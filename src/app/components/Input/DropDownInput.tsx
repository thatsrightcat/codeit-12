"use client";

import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import useMyActivityList from "@hooks/useMyActivityList";
import icon_checkmark from "@icons/icon_checkmark.svg";
import icon_trailing_down from "@icons/icon_trailing_down.svg";
import icon_trailing_up from "@icons/icon_trailing_up.svg";

type DropDownOption = string;

type DropDownPropsType = {
  dropDownOptions: DropDownOption[] | [];
  onChange: (value: string) => void; // Update the onChange type to handle value changes
  setInitialValue: boolean;
  placeholder?: string;
  id?: string;
  value?: string; // Ensure the value prop is used for controlled component
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  invalid?: boolean;
  inputLable?: string;
};

const DropDownInput = forwardRef<HTMLInputElement, DropDownPropsType>(
  (
    {
      placeholder,
      dropDownOptions,
      id,
      inputLable,
      setInitialValue,
      value,
      onChange,
      onBlur,
      invalid,
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    /**
     * dropDownInput 내부에서 관리되는 selectedOption state값입니다.
     * 상위 컴포넌트에서 내려주는 value값이 존재한다면, 그 value값을 <input />에 표시합니다. 그게 아니라면,
     * selectedOption값이 <input />에 표시됩니다.
     */
    const [selectedOption, setSelectedOption] = useState<string>("");

    /**
     * 비동기 함수, dropdownOptions, selectedOption 초기값 설정
     * dropDownOptions[0] 값을 selectedOption의 초기값으로 설정하고 싶은데
     * dropdownOptions값이 비동기 함수의 실행 결과인 경우 뒤늦게 도착하기 때문에, 이 경우의 수까지 커버하기 위해서는
     *  useEffect를 사용하여, dropDownOptions값이 이용가능해진 시점에 selectedOption을 선택해 주는 것입니다.
     */
    useEffect(() => {
      if (!placeholder && dropDownOptions.length > 0 && selectedOption === "") {
        setSelectedOption(dropDownOptions[0]);
      }
    }, [dropDownOptions, selectedOption, placeholder]);

    return (
      <div className="relative flex flex-col">
        <section>
          <div className="relative flex items-center">
            <input
              readOnly
              ref={ref}
              onBlur={onBlur}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              id={id}
              // <input /> 태그에 표시되는 값은 상위 컴포넌트에서 control되는 value값이 우선순위를 가집니다.
              value={value || selectedOption}
              placeholder={!setInitialValue ? placeholder : ""}
              className={`w-full cursor-pointer rounded-[6px] border ${invalid ? "border-red-500" : "border-gray-700"} px-[16px] py-[16px] caret-transparent`}
            />
            <button className="cursor-pointer">
              <Image
                src={isDropdownOpen ? icon_trailing_up : icon_trailing_down}
                alt="Toggle-Dropdown"
                className="absolute right-[15px] top-[45%]"
              />
            </button>
            {inputLable && (
              <div className="absolute -top-3 left-5 bg-white text-md">
                {inputLable}
              </div>
            )}
          </div>
        </section>
        {isDropdownOpen && (
          <section className="absolute top-[60px] z-50 mt-[16px] max-h-[200px] w-full overflow-y-scroll rounded-[6px] bg-white shadow-md">
            <ul>
              {dropDownOptions?.map((option, index) => (
                <li
                  onClick={() => {
                    onChange(option); // react-hook-form의 controller에 값을 전달합니다. // 또는 전달받은 onChange handler에 값을 전달합니다.
                    setSelectedOption(option);
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
