"use client";

import React, { ChangeEventHandler, useState } from "react";
import Image from "next/image";
import icon_visibility_off from "@icons/icon_visibility_off.svg";
import icon_visibility_on from "@icons/icon_visibility_on.svg";

type BasicInputPropsType = {
  placeholder: string;
  type: "email" | "password" | "text" | "number";
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  invalid?: boolean;
};

export default function BasicInput({
  placeholder,
  id,
  type,
  onChange,
  onBlur,
  invalid,
}: BasicInputPropsType) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <section>
      <div className="relative flex items-center">
        <input
          id={id}
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur} 
          className={`${invalid ? "border-red-100" : "border-gray-700"} h-[58px] w-full rounded-[6px] border px-[16px] py-[20px] text-[16px] font-[400] text-black`}
        />
        {type == "password" && (
          <div
            onClick={() => {
              setIsPasswordVisible((prev) => !prev);
            }}
            className="absolute right-[10px] cursor-pointer"
          >
            <Image
              src={isPasswordVisible ? icon_visibility_on : icon_visibility_off}
              width={24}
              alt="icon_visibility"
              className="text-[#9FA6B2]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
