import { getDailyReservations } from "@api/MyActivityStatusApi";
import { TScheduleReservationsStatus } from "@customTypes/MyActivityStatusType";
import { useQuery } from "@tanstack/react-query";

const useDailySchedulesReservations = (
  date: Date,
  selectedActivityId: undefined | string,
) => {
  const {
    data: dailyReservations,
    isLoading,
    error,
  } = useQuery<TScheduleReservationsStatus[]>({
    queryKey: ["dailyReservations", date, selectedActivityId],
    queryFn: () => getDailyReservations(date, selectedActivityId),
  });

  const activityTimeOptions = dailyReservations?.map((dailyReservation) => {
    return `${dailyReservation.startTime} ~ ${dailyReservation.endTime}`;
  });

  return { dailyReservations, activityTimeOptions, isLoading, error };
};

export default useDailySchedulesReservations;
