import { updateScheduleReservationStatus } from "@api/MyActivityStatusApi";
import Button from "@app/components/Button/Button";
import { ScheduleReservationsListPropType } from "@customTypes/MyActivityStatusType";
import Image from "next/image";
import ReservationStatusBadge from "./ReservationStatusBadge";
import no_notification from "@images/no_notification2.gif";

export default function ScheduleReservationsList({
  scheduleReservations,
}: ScheduleReservationsListPropType) {
  const schedules = scheduleReservations?.reservations;

  return (
    <>
      {scheduleReservations?.totalCount == 0 && (
        <Image height={132} src={no_notification} alt="no_schedules" />
      )}
      {schedules &&
        schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex w-full flex-col gap-[6px] rounded-[4px] border-2 px-[16px] py-[12px] text-[16px] text-black"
          >
            <section className="flex gap-[10px]">
              <div className="text-gray-700">닉네임</div>
              <div>{schedule.nickname}</div>
            </section>
            <section className="flex gap-[10px]">
              <div className="text-gray-700">인원</div>
              <div>{schedule.headCount}</div>
            </section>

            {schedule.status !== "pending" && (
              <section className="place-self-end">
                {
                  <ReservationStatusBadge
                    text={
                      schedule.status == "confirmed" ? "예약 승인" : "예약 거절"
                    }
                    type={
                      schedule.status == "confirmed" ? "confirmed" : "declined"
                    }
                  />
                }
              </section>
            )}

            {schedule.status == "pending" && (
              <section className="flex gap-[6px] place-self-end text-[14px]">
                <Button
                  onClick={() =>
                    // useMutation함수를 사용하여 onSuccess 업데이트 되도록 refactoring하기
                    updateScheduleReservationStatus(
                      schedule.activityId.toString(),
                      schedule.id.toString(),
                      "confirmed",
                    )
                  }
                  color="dark"
                  size="sm"
                  className="w-[82px]"
                >
                  승인 하기
                </Button>
                <Button
                  onClick={() =>
                    updateScheduleReservationStatus(
                      schedule.activityId.toString(),
                      schedule.id.toString(),
                      "declined",
                    )
                  }
                  color="bright"
                  size="sm"
                  className="w-[82px]"
                >
                  거절 하기
                </Button>
              </section>
            )}
          </div>
        ))}
    </>
  );
}
