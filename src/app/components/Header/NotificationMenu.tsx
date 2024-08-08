"use client";

import React from "react";
import Image from "next/image";
import { useDropdown } from "@hooks/useDropdown";
import Notification from "@icons/icon_notification.svg";

export default function NotificationMenu() {
  const { ref, isOpen, toggle, close } = useDropdown();

  return (
    <div className="relative flex" ref={ref}>
      <button onClick={toggle}>
        <Image src={Notification} alt="알림" width={24} height={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-full min-w-40 rounded-lg border border-gray-400 bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="block px-4 py-2 text-sm text-gray-700">알림 1</div>
            <div className="block px-4 py-2 text-sm text-gray-700">알림 2</div>
            <div className="block px-4 py-2 text-sm text-gray-700">알림 3</div>
          </div>
        </div>
      )}
    </div>
  );
}
