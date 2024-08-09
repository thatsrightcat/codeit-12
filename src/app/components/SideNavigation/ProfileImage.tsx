'use client';

import React from "react";
import Image from "next/image";
import useUserProfile from "@hooks/useUserProfile";
import DefaultUserImage from "@icons/icon_user.svg";

const ProfileImage: React.FC = () => {
  const { data, isLoading, error } = useUserProfile();

  return (
    <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gray-300">
      {error || isLoading || !data?.profileImageUrl ? (
        <Image
          src={DefaultUserImage}
          alt="기본 프로필 이미지"
          className="rounded-full object-cover"
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <Image
          src={data.profileImageUrl}
          alt="사용자 설정 프로필 이미지"
          className="rounded-full object-cover"
          layout="fill"
          objectFit="cover"
        />
      )}
    </div>
  );
};

export default ProfileImage;