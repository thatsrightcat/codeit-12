"use client";

import React, { useState } from "react";
import {
  UseFormRegister,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";
import Image from "next/image";
import icon_visibility_off from "@icons/icon_visibility_off.svg";
import icon_visibility_on from "@icons/icon_visibility_on.svg";

type InputPropsType = {
  // react-hook-form 없이 사용할 경우 아래의 prop들을 사용합니다.
  placeholder: string;
  type: "email" | "password" | "text" | "number";
  fieldName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // react-hook-form을 사용할 경우 아래의 prop들을 사용합니다.
  register?: UseFormRegister<any>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export default function Input({
  placeholder,
  fieldName,
  type,
  register,
  onChange,
  error,
}: InputPropsType) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <section>
      <div className="relative flex items-center">
        <input
          {...(register && register(fieldName))}
          id={fieldName}
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
          className={`${error ? "border-[#FF472E]" : "border-[#79747E]"} h-[58px] w-full rounded-[6px] border px-[16px] py-[20px] text-[16px] font-[400] text-[#1B1B1B]`}
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
      {error && (
        <p className="mt-[8px] text-[12px] text-[#FF472E]">
          {error.message as string}
        </p>
      )}
    </section>
  );
}
