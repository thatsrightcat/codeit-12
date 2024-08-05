import { MouseEvent, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";
import icon_arrow_filter from "@icons/icon_arrow_filter.svg";

const CATEGORIES = ["문화 · 예술", "식음료", "스포츠", "투어", "관광", "웰빙"];

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleSortClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between text-[16px] font-medium md:text-[18px]">
      {/* Category */}
      <div className="flex gap-[8px] md:gap-[14px] xl:gap-[24px]">
        {CATEGORIES.map((category) => (
          <button
            className="h-[41px] w-[80px] rounded-[15px] border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white md:h-[58px] md:w-[120px] xl:w-[127px]"
            key={category}
            value={category}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Filter */}
      <div>
        <button
          onClick={handleFilterClick}
          className="flex h-[41px] w-[90px] items-center justify-between rounded-[15px] border border-primary px-[10px] py-[20px] text-primary md:h-[58px] md:w-[120px] md:px-[16px] xl:w-[127px]"
        >
          <p className="text-[14px] text-primary md:text-[18px]">가격</p>
          <Image
            src={icon_arrow_filter}
            alt="arrow icon"
            width={22}
            height={22}
          />
        </button>
        <div onClick={handleSortClick}>
          {/* Filter 기능 구현 필요 */}
          {/* 바깥쪽 클릭시 꺼짐 기능 구현 필요 */}
          <Filter isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
