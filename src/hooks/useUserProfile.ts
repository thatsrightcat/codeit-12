import instance from "@api/axios";
import { useQuery } from "@tanstack/react-query";

interface UserProfile {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const fetchUserProfile = async (): Promise<UserProfile> => {
  const { data } = await instance.get("/users/me");
  console.log("Fetched user profile data:", data); // 콘솔 로그 추가
  return data;
};

const useUserProfile = () => {
  return useQuery<UserProfile, Error>({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });
};

export default useUserProfile;
