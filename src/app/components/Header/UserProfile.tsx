"use client";

import React from "react";
import Image from "next/image";
import NavItem from "@components/SideNavigation/NavItem";
import { useDropdown } from "@hooks/useDropdown";
import useUserProfile from "@hooks/useUserProfile";
import DefaultUserImage from "@icons/icon_user.svg";

const navItems = [
  {
    href: "/mypage/me",
    label: "마이페이지",
  },
  {
    href: "#",
    label: "로그아웃",
    onClick: (close: () => void, onLogout: () => void) => {
      onLogout();
      close();
    },
  },
];

export default function UserProfile({ onLogout }: { onLogout: () => void }) {
  const { data, isLoading, error } = useUserProfile();
  const { ref, isOpen, toggle, close } = useDropdown();

  return (
    <div className="relative hidden md:block" ref={ref}>
      <div
        className="flex cursor-pointer items-center justify-center gap-3"
        onClick={toggle}
      >
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
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
        <div>{data?.nickname}</div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-full min-w-40 rounded-lg border border-gray-400 bg-white">
          <nav className="py-1">
            <ul>
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  href={item.href}
                  label={item.label}
                  onClick={
                    item.href === "#"
                      ? () => item.onClick?.(close, onLogout)
                      : close
                  }
                  className="px-4 py-2 text-sm text-primary"
                />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
