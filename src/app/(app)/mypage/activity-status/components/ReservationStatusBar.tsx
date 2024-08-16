import { Dispatch, SetStateAction } from "react";
import { TScheduleReservationsStatus } from "@customTypes/MyActivityStatusType";

type TReservationStatusBarProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  selectedSchedule: TScheduleReservationsStatus | undefined;
};

export function ReservationStatusBar({
  activeTab,
  setActiveTab,
  selectedSchedule,
}: TReservationStatusBarProps) {
  console.log("selectedSchedule 👉", selectedSchedule);

  const activeTabClassName =
    "translate-y-[2px] rounded-sm border-b-4 border-green-300 font-[600] text-green-300";

  return (
    <section className="flex items-center gap-[22px] border-b-2">
      <button
        onClick={() => setActiveTab("신청")}
        className={`${activeTab == "신청" ? activeTabClassName : "text-gray-800"}`}
      >
        신청&nbsp;{selectedSchedule && selectedSchedule.count.pending}
      </button>
      <button
        onClick={() => setActiveTab("승인")}
        className={`${activeTab == "승인" ? activeTabClassName : "text-gray-800"}`}
      >
        승인&nbsp;{selectedSchedule && selectedSchedule.count.confirmed}
      </button>
      <button
        onClick={() => setActiveTab("거절")}
        className={`${activeTab == "거절" ? activeTabClassName : "text-gray-800"}`}
      >
        거절&nbsp;{selectedSchedule && selectedSchedule.count.declined}
      </button>
    </section>
  );
}
