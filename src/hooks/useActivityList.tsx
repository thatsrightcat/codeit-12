import instance from "@api/axios";
import { ActivityInfo, ActivityResponse } from "@customTypes/MainPage";
import { useQuery } from "@tanstack/react-query";

const useActivityList = () => {
  const getActivities = async (category?: string, sort?: string) => {
    const params = new URLSearchParams({ method: "offset" });
    const { data } = await instance.get<ActivityResponse>("/activities", {
      params,
    });
    return data;
  };

  const { data } = useQuery<ActivityResponse>({
    queryKey: ["activities"],
    queryFn: () => getActivities(),
  });

  return { activities: data?.activities || [] };
};
export default useActivityList;
