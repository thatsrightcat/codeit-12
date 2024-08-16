"use client";

import { useEffect, useState } from "react";
import Calendar, { OnArgs, TileArgs, TileDisabledFunc } from "react-calendar";
import Chips from "@app/components/Chips";
import MyPageLoading from "@app/components/Loading/MypageLoading";
import { format } from "date-fns";
import NextMonthIcon from "./NextMonthIcon";
import PopUpMenu from "./PopUpMenu";
import PrevMonthIcon from "./PrevMonthIcon";
import { useDropdown } from "@hooks/useDropdown";
import useMonthlyReservations from "@hooks/useMonthlyReservations";
import useMyActivityList from "@hooks/useMyActivityList";
import "@lib/Calendar/MyActivityStatusCalendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarSection() {
  const [year, setYear] = useState<string>(format(new Date(), "yyyy"));
  const [month, setMonth] = useState<string>(format(new Date(), "MM"));
  const [date, setDate] = useState<string>(format(new Date(), "dd"));
  const { selectedActivityId } = useMyActivityList();

  const {
    monthlyReservations = [],
    error,
    isLoading,
  } = useMonthlyReservations(selectedActivityId, year, month);
  const { ref, close, isOpen, toggle } = useDropdown();

  // Set initial value for the calendar
  const initialDate = new Date(`${year}-${month}-${date}`);
  const [value, onChange] = useState<Value>(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Sync calendar value with year and month state
  useEffect(() => {
    onChange(new Date(`${year}-${month}-${date}`));
  }, [year, month, date]);

  // 월단위로 날짜 변경에 맞춰 year와 month state를 업데이트하는 함수입니다.
  const handleMonthChange = ({ activeStartDate }: OnArgs) => {
    if (activeStartDate) {
      const newYear = format(activeStartDate, "yyyy");
      const newMonth = format(activeStartDate, "MM");

      setYear(newYear);
      setMonth(newMonth);
    }
  };

  // 캘린더의 각 date-tile에 rendering할 함수를 생성합니다.
  const tileContent = ({ date }: { date: Date }) => {
    // react-calendar의 date 포맷과 api의 date 포맷을 일치시키기 위해서 전자를 포맷팅 합니다.
    const formattedDate = format(date, "yyyy-MM-dd");

    // 해당 date에 예약건이 있는지 확인합니다.
    const reservation = monthlyReservations?.find(
      (dailyReservation) => dailyReservation.date == formattedDate,
    );
    // 예약건이 있는 타일에 표시할 dot에 관련한 logic을 생성합니다.
    const today = new Date().getDate();
    const isPast = date.getDate() < today;
    const dotColor = isPast ? "bg-[#4B4B4B]" : "bg-[#0085FF]";

    return (
      <div className="relative flex h-full flex-col justify-between">
        <section className="flex gap-2">
          <div>{format(date, "d")}</div>
          {reservation && (
            <div className={`h-[8px] w-[8px] rounded-full ${dotColor}`}></div>
          )}
        </section>
        {reservation && (
          <>
            <section className="w-full">
              {!!reservation.reservations.completed && (
                <div className="w-full">
                  <Chips
                    counting={reservation.reservations.completed}
                    type="completed"
                  />
                </div>
              )}
              {!!reservation.reservations.confirmed && (
                <div className="w-full">
                  <Chips
                    counting={reservation.reservations.confirmed}
                    type="confirmed"
                  />
                </div>
              )}
              {!!reservation.reservations.pending && (
                <div className="w-full">
                  <Chips
                    counting={reservation.reservations.pending}
                    type="reservation"
                  />
                </div>
              )}
            </section>
          </>
        )}
      </div>
    );
  };

  const disabledTiles: TileDisabledFunc = ({ date }: TileArgs) => {
    const today = new Date();
    if (date < today) {
      return true;
    }
    return false;
  };

  if (error) return <p>Error fetching data</p>;
  if (isLoading) return <MyPageLoading />;

  return (
    <div className="relative flex items-center">
      <Calendar
        value={value}
        onChange={onChange}
        locale="eng"
        prev2Label={null}
        next2Label={null}
        view="month"
        tileContent={tileContent}
        onActiveStartDateChange={handleMonthChange}
        formatMonthYear={(locale, date) => format(date, "yyyy년 M월")}
        prevLabel={<PrevMonthIcon />}
        nextLabel={<NextMonthIcon />}
        tileDisabled={disabledTiles}
        onClickDay={(value: Date, event) => {
          const haveReservation = monthlyReservations.find(
            (x) => x.date == format(value, "yyyy-MM-dd"),
          );
          if (haveReservation) {
            setSelectedDate(value);
            toggle();
          }
        }}
      />
      <div ref={ref} className="absolute right-0 w-full max-w-[380px]">
        {isOpen && selectedDate && (
          <PopUpMenu
            date={selectedDate}
            closePopUp={close}
            selectedActivityId={selectedActivityId}
          />
        )}
      </div>
    </div>
  );
}
