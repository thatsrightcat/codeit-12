import instance from "@api/axios";

export interface UserMe {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const getUserMe = async (): Promise<UserMe> => {
  const { data } = await instance.get("/users/me");
  console.log("Fetched user profile data:", data);
  return data;
};
