import { useQuery } from "@tanstack/react-query";
import { getUserMe, UserMe } from "@api/user";

const useUserProfile = () => {
  return useQuery<UserMe, Error>({
    queryKey: ["userProfile"],
    queryFn: getUserMe,
  });
};

export default useUserProfile;