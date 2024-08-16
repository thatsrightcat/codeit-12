import { getMonthlyReservations } from "@api/MyActivityStatusApi";
import { DailyReservations } from "@customTypes/MyActivityStatusType";
import { useQuery } from "@tanstack/react-query";

export const useMonthlyReservations = (
  selectedActivityId: string | undefined,
  year: string,
  month: string,
) => {
  const {
    data: monthlyReservations,
    error,
    isLoading,
  } = useQuery<DailyReservations[]>({
    // 이용자 로그인 정보가 바뀌었을 때 캐싱한 결과를 보여주는 것이 아니라, 새로운 이용자의 정보를 보여줘야 하는데 왜 안되는거지?
    // queryKey에 이용자 정보를 넣어줘야 겠네
    // 오잉 이렇게 해도 안되네
    // 아니 근데 애초에 year, month 이런 값들을 기억하고 있다는 것도 말이 안되는데
    queryKey: ["MonthlyReservations", selectedActivityId, year, month],
    queryFn: () => getMonthlyReservations(selectedActivityId, year, month),
  });

  return { monthlyReservations, error, isLoading };
};

export default useMonthlyReservations;
