import React from "react";
import Image from "next/image";
import useUserProfile from "@hooks/useUserProfile";

const ProfileImage: React.FC = () => {
  const { data, isLoading, error } = useUserProfile();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error || !data?.profileImageUrl) {
    return (
      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray-300">
        <span className="text-gray-500">Upload</span>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-40 w-40">
        <Image
          src={data.profileImageUrl}
          alt="Profile"
          className="rounded-full object-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default ProfileImage;
