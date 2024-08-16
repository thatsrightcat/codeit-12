import { useEffect, useState } from "react";
import { ReservationStatusBar } from "@app/(app)/mypage/activity-status/components/ReservationStatusBar";
import DropDownInput from "@app/components/Input/DropDownInput";
import { TScheduleReservationsStatus } from "@customTypes/MyActivityStatusType";
import { format } from "date-fns";
import Image from "next/image";
import ScheduleReservationsList from "./ScheduleReservationsCardList";
import useDailySchedulesReservations from "@hooks/useDailyReservations";
import useScheduleReservationsStatus from "@hooks/useScheduleReservations";
import close_icon from "@icons/icon_x_40px.svg";

type PopUpMenuPropsType = {
  date: Date;
  selectedActivityId: string | undefined;
  closePopUp: () => void;
};

const PopUpMenu = ({
  date,
  selectedActivityId,
  closePopUp,
}: PopUpMenuPropsType) => {
  const {
    dailyReservations = [],
    activityTimeOptions = [],
    isLoading,
  } = useDailySchedulesReservations(date, selectedActivityId);
  const [selectedSchedule, setSelectedSchedule] = useState<
    TScheduleReservationsStatus | undefined
  >(undefined);
  const [selectedScheduleId, setSelectedScheduleId] = useState<
    string | undefined
  >(undefined);
  const [activeTab, setActiveTab] = useState("");
  const { scheduleReservationsStatus } = useScheduleReservationsStatus(
    selectedActivityId,
    selectedScheduleId,
    activeTab,
  );

  // 자료 구조 : dailyReservations에 다수의 schedule(reservations)가 존재함
  // dailyReservations의 load(date-fetching)가 완료되면 스케쥴 초기값을 설정해줍니다. (비동기함수, client-side data-fetching의 한계...)
  useEffect(() => {
    if (dailyReservations.length > 0 && selectedSchedule == undefined) {
      const initialSelectedSchedule = dailyReservations[0];
      setSelectedSchedule(initialSelectedSchedule);
    }
  }, [dailyReservations, selectedSchedule]);

  // scheduleId의 초기값 설정
  // 설정된 초기 아이디 값으로 schedule 예약 정보를 팝업이 마운트 되자마자 불러옵니다.
  useEffect(() => {
    if (selectedSchedule && selectedScheduleId == null)
      setSelectedScheduleId(selectedSchedule.scheduleId.toString());
  }, [selectedSchedule, selectedScheduleId]);

  useEffect(() => {
    const initialBusiestTab = (selectedScheduleId: string) => {
      const scheduleStatusCounts = dailyReservations.find(
        (x) => x.scheduleId == Number(selectedScheduleId),
      )?.count;

      if (scheduleStatusCounts) {
        let busiestStatus;
        if (scheduleStatusCounts.pending > 0) {
          busiestStatus = "신청";
        } else if (scheduleStatusCounts.confirmed) {
          busiestStatus = "승인";
        } else {
          busiestStatus = "거절";
        }
        setActiveTab(busiestStatus);
      }
    };
    selectedScheduleId && initialBusiestTab(selectedScheduleId);
  }, [selectedScheduleId, dailyReservations]);

  // 유저가 schdule을 선택하면, 해당 activityTime에 해당하는 schdule을 찾아내서 selectedSchdule에 state값으로 저장합니다.
  // 이 state값으로 시간대별 예약 내역을 조회하는 api call을 보냅니다 getHourlyReservation()
  const handleScheduleSelect = (activityTime: string) => {
    const schedule = dailyReservations.find((dailyReservation) => {
      return (
        activityTime ===
        `${dailyReservation.startTime} ~ ${dailyReservation.endTime}`
      ); // Ensure the condition is returned
    });

    // schedule을 찾았으면 scheduleId의 state값이 업데이트, re-rendering이 발생하면서 useScheduleReservationsStatus()가 data-fetching을 수행합니다.
    if (schedule) {
      setSelectedScheduleId(schedule.scheduleId.toString());
      setSelectedSchedule(schedule);
      setActiveTab(findBusiestTab(schedule?.scheduleId));
    }
  };

  const findBusiestTab = (scheduleId: number) => {
    const scheduleStatusCounts = dailyReservations.find(
      (x) => x.scheduleId == scheduleId,
    )?.count;

    if (scheduleStatusCounts) {
      let busiestStatus;
      if (scheduleStatusCounts.pending > 0) {
        busiestStatus = "신청";
      } else if (scheduleStatusCounts.confirmed) {
        busiestStatus = "승인";
      } else {
        busiestStatus = "거절";
      }
      return busiestStatus;
    }
    return "신청";
  };

  // if (isLoading) {
  //   <Image src={loading_text} alt="loading" />;
  // }

  return (
    <div
      className={`flex min-h-[568px] w-full flex-col gap-[27px] rounded-2xl border border-green-300 bg-white p-[24px] ${activeTab == "pending" && "pb-[89px]"} text-[20px] text-black shadow`}
    >
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-[700]">예약 정보</h1>
        <button onClick={closePopUp}>
          <Image
            alt="close-button"
            src={close_icon}
            width={28}
            height={28}
            className="text-gray-800"
          />
        </button>
      </section>
      <ReservationStatusBar
        activeTab={activeTab}
        selectedSchedule={selectedSchedule}
        setActiveTab={setActiveTab}
      />
      <section className="flex flex-col gap-[16px]">
        <div>
          <h2 className="font-[600]">예약 날짜</h2>
        </div>
        <div className="flex flex-col gap-[2px]">
          <h3>{format(date, "yyyy년 M월 dd일")}</h3>
          <div className="text-[16px]">
            <DropDownInput
              onChange={handleScheduleSelect}
              dropDownOptions={activityTimeOptions}
              setInitialValue
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-[16px]">
        <h2 className="font-[600]">예약 내역</h2>
        <div className="flex items-center justify-center">
          <ScheduleReservationsList
            scheduleReservations={scheduleReservationsStatus}
          />
        </div>
      </section>
      {activeTab !== "신청" && (
        <section className="mt-auto flex justify-between">
          <h2 className="font-[600]">예약 현황</h2>
          <h2 className="font-[600]">
            {scheduleReservationsStatus?.totalCount}
          </h2>
        </section>
      )}
    </div>
  );
};

export default PopUpMenu;
