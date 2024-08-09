"use client";

import { useState } from "react";
import Image from "next/image";
import kebabMenuIcon from "@icons/icon_menu.svg";

export default function ActivityHeaderKebabMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prevClick) => !prevClick);
  };

  return (
    <div className="relative flex items-center">
      <button
        className="relative h-[2.5rem] w-[2.5rem] cursor-pointer"
        onClick={handleOnClick}
      >
        <Image fill src={kebabMenuIcon} alt="케밥 메뉴 아이콘" />
        {isOpen && (
          <ul className="absolute right-0 top-[2.5rem] z-[9999] flex h-[7.125rem] w-[10rem] flex-col items-center justify-center rounded-md bg-white shadow-[0_0.25rem_1rem_0_#1122110D]">
            <li className="flex h-full w-full items-center justify-center rounded-t-md border border-solid border-gray-300 hover:bg-primary hover:text-white">
              수정하기
            </li>
            <li className="flex h-full w-full items-center justify-center rounded-b-md border-x border-b border-solid border-gray-300 hover:bg-primary hover:text-white">
              삭제하기
            </li>
          </ul>
        )}
      </button>
    </div>
  );
}
