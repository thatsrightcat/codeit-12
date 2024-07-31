"use client";

import React, { useEffect, useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from "react-hook-form";
import Image from "next/image";
import icon_checkmark from "@icons/icon_checkmark.svg";
import icon_trailing_down from "@icons/icon_trailing_down.svg";
import icon_trailing_up from "@icons/icon_trailing_up.svg";

type dropDownOption = string;

type DropDownPropsType = {
  // react-hook-form 없이 사용되는 drop down props
  dropDownOptions: dropDownOption[];
  placeholder: string;
  fieldName: string;
  onOptionSelect?: (selectedOption: dropDownOption) => void;
  // react-hook-form을 사용할 경우 아래의 Prop들을 사용합니다.
  register?: UseFormRegister<any>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  // schema?: any;
};

export default function DropDown({
  placeholder,
  dropDownOptions,
  fieldName,
  onOptionSelect,
  register,
  error,
}: DropDownPropsType) {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex flex-col">
      <section>
        <div className="relative flex items-center">
          <input
            onClick={() => {
              setisDropdownOpen(!isDropdownOpen);
            }}
            {...(register && register(fieldName))}
            id={fieldName}
            value={selectedOption}
            placeholder={placeholder}
            className="w-full cursor-pointer rounded-[6px] border border-[#79747E] px-[16px] py-[16px] caret-transparent "
          />
          <button className="cursor-pointer">
            <Image
              src={isDropdownOpen ? icon_trailing_up : icon_trailing_down}
              alt="icon_trailing_down"
              className="absolute right-[15px] top-[45%]"
            />
          </button>
        </div>
      </section>
      {isDropdownOpen && (
        <section className="mt-[16px] shadow-md">
          <ul>
            {dropDownOptions?.map((dropDownOption, index) => (
              <li
                onClick={() => {
                  setSelectedOption(dropDownOption);
                  {
                    onOptionSelect && onOptionSelect(dropDownOption);
                  }
                  setisDropdownOpen(false);
                }}
                value={dropDownOption}
                key={index}
                className="flex gap-[8px] rounded-[6px] px-[12px] py-[8px] font-[400] transition hover:cursor-pointer hover:bg-primary hover:text-white"
              >
                <Image src={icon_checkmark} alt="icon_checkmark" />
                <p>{dropDownOption}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
