"use client";

import React, { ForwardedRef, forwardRef, useRef, useState } from "react";
import Image from "next/image";
import icon_checkmark from "@icons/icon_checkmark.svg";
import icon_trailing_down from "@icons/icon_trailing_down.svg";
import icon_trailing_up from "@icons/icon_trailing_up.svg";

type DropDownOption = string;

type DropDownPropsType = {
  dropDownOptions: DropDownOption[];
  placeholder: string;
  id: string;
  value?: string; // Ensure the value prop is used for controlled component
  onChange: (value: string) => void; // Update the onChange type to handle value changes
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  invalid?: boolean;
};

const DropDownInput = forwardRef<HTMLInputElement, DropDownPropsType>(
  (
    { placeholder, dropDownOptions, id, value, onChange, onBlur, invalid },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div className="flex flex-col">
        <section>
          <div className="relative flex items-center">
            <input
              ref={ref}
              onBlur={onBlur}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              id={id}
              value={value} // Controlled component
              placeholder={placeholder}
              className={`w-full cursor-pointer rounded-[6px] border ${invalid ? "border-red-500" : "border-gray-700"} px-[16px] py-[16px] caret-transparent`}
            />
            <button className="cursor-pointer">
              <Image
                src={isDropdownOpen ? icon_trailing_up : icon_trailing_down}
                alt="Toggle Dropdown"
                className="absolute right-[15px] top-[45%]"
              />
            </button>
          </div>
        </section>
        {isDropdownOpen && (
          <section className="mt-[16px] shadow-md">
            <ul>
              {dropDownOptions.map((option, index) => (
                <li
                  onClick={() => {
                    onChange(option); // Notify React Hook Form of the selected option
                    setIsDropdownOpen(false);
                  }}
                  key={index}
                  className="flex gap-[8px] rounded-[6px] px-[12px] py-[8px] font-[400] transition hover:cursor-pointer hover:bg-primary hover:text-white"
                >
                  <Image src={icon_checkmark} alt="Checkmark" />
                  <p>{option}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  },
);

DropDownInput.displayName = "DropDown"; // Display name for debugging

export default DropDownInput;
