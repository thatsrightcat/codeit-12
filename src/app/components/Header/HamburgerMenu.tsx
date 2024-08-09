"use client";

import React from "react";
import Image from "next/image";
import NavItem from "@components/SideNavigation/NavItem";
import { useDropdown } from "@hooks/useDropdown";
import Hamburger from "@icons/icon_hamburger.svg";

const navItems = [
  { href: "/mypage/me", label: "내 정보" },
  { href: "/mypage/reservations", label: "예약내역" },
  { href: "/mypage/activity-list", label: "내 체험 관리" },
  { href: "/mypage/activity-status", label: "예약현황" },
  {
    href: "#",
    label: "로그아웃",
    onClick: (close: () => void, onLogout: () => void) => {
      onLogout();
      close();
    },
  },
];

export default function HamburgerMenu({ onLogout }: { onLogout: () => void }) {
  const { ref, isOpen, toggle, close } = useDropdown();

  return (
    <div className="relative" ref={ref}>
      <button className="block md:hidden" onClick={toggle}>
        <Image src={Hamburger} alt="햄버거 버튼" width={24} height={24} />
      </button>
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
