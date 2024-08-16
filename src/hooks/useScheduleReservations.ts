import { getScheduleReservations } from "@api/MyActivityStatusApi";
import { useQuery } from "@tanstack/react-query";

const useScheduleReservationsStatus = (
  selectedActivityId: string | undefined,
  selectedScheduleId: string | undefined,
  activeTab: string,
) => {
  const translateActiveTabIntoEng = (activeTab: string): string => {
    if (activeTab === "신청") {
      return "pending";
    } else if (activeTab === "승인") {
      return "confirmed";
    } else if (activeTab === "거절") {
      return "declined";
    } else {
      return "pending"; // Handle the case where the tab is unknown
    }
  };

  const activeTabInEng = translateActiveTabIntoEng(activeTab);

  const {
    data: scheduleReservationsStatus,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "scheduleReservationsStatus",
      selectedActivityId,
      selectedScheduleId,
      activeTabInEng,
    ],
    queryFn: () =>
      getScheduleReservations(
        selectedActivityId,
        selectedScheduleId,
        activeTabInEng,
      ),
  });

  console.log("$ clicked a schedule 👉 useScheduleReservationsStatus ran");

  return { scheduleReservationsStatus, isLoading, error };
};

export default useScheduleReservationsStatus;
