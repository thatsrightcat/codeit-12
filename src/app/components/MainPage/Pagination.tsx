import { MouseEvent } from "react";
import * as React from "react";
import Image from "next/image";
import Arrow_Left from "@icons/icon_arrow_pagination_left_off.svg";
import Arrow_Right from "@icons/icon_arrow_pagination_right_on.svg";

interface PaginationProps {
  totalCount: number;
  offsetLimit: number;
  currentPage: number;
  currentGroup: number;
  setPageNum: (pageNum: number) => void;
}

const GROUP_LIMIT = 5; // 페이지 한 그룹 당 개수 - 5 개

// 페이지네이션 arrow svg 컬러 변경
const LeftArrowOn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none">
    <path
      fill="#0B3B2D"
      d="m7.144 10.176 5.802-5.626c.362-.351 1.054-.138 1.054.324v11.252c0 .462-.692.675-1.054.324l-5.802-5.626a.436.436 0 0 1 0-.648Z"
    />
  </svg>
);

// 페이지네이션 arrow svg 컬러 변경
const RightArrowOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none">
    <path
      fill="#A1A1A1"
      d="M13.856 10.176 8.054 4.55C7.692 4.199 7 4.412 7 4.874v11.252c0 .462.692.675 1.054.324l5.802-5.626a.436.436 0 0 0 0-.648Z"
    />
  </svg>
);

// 페이지네이션 arrow button className 지정
const ARROW_BUTTON_STYLE = {
  active:
    "flex h-[40px] w-[40px] items-center justify-center rounded-[15px] border border-[#0B3B2D] md:w-[55px] md:h-[55px]",
  disabled:
    "flex h-[40px] w-[40px] items-center justify-center rounded-[15px] border border-[#A1A1A1] md:w-[55px] md:h-[55px]",
};

const Pagination = ({
  totalCount,
  offsetLimit,
  currentPage,
  currentGroup,
  setPageNum,
}: PaginationProps) => {
  const totalPage = Math.ceil(totalCount / offsetLimit); // 전체 페이지 수 계산
  const pageNumberArray = new Array(totalPage).fill(0).map((v, i) => v + i); // 페이지 숫자 배열 생성
  const pageGroupArray = []; // 페이지 그룹 배열 생성
  // 페이지 그룹 배열
  for (let i = 0; i < pageNumberArray.length; i += GROUP_LIMIT) {
    pageGroupArray.push(pageNumberArray.slice(i, i + GROUP_LIMIT));
  }

  // '<' 버튼 클릭했을 때
  const handleLeftClick = () => {
    if (currentPage === 0) return;
    setPageNum(currentPage - 1);
  };

  // '>' 버튼 클릭했을 때
  const handleRightClick = () => {
    const lastPage = pageNumberArray.length - 1;
    if (currentPage === lastPage) return;
    setPageNum(currentPage + 1);
  };

  // 페이지 버튼 클릭했을 때 - button id 값으로 pageNum 전달
  const handlePageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    setPageNum(Number(button.id));
  };

  return (
    <div className="flex gap-[10px]">
      {/* '< 버튼' - 첫 페이지일 때 비활성화 */}
      <button
        onClick={handleLeftClick}
        className={
          currentPage === 0
            ? ARROW_BUTTON_STYLE.disabled
            : ARROW_BUTTON_STYLE.active
        }
        disabled={currentPage === 0}
      >
        {currentPage === 0 ? (
          <Image src={Arrow_Left} alt="arrow left" />
        ) : (
          <LeftArrowOn />
        )}
      </button>
      {/* 페이지 버튼 */}
      {pageGroupArray[currentGroup] &&
        pageGroupArray[currentGroup].map((pageNum) => (
          <button
            id={pageNum}
            key={pageNum}
            onClick={handlePageClick}
            className={`${currentPage === pageNum ? "bg-[#0B3B2D] text-white" : "border border-[#0B3B2D] bg-white text-[#0B3B2D]"} flex h-[40px] w-[40px] items-center justify-center rounded-[15px] text-[18px] md:h-[55px] md:w-[55px]`}
          >
            {pageNum + 1}
          </button>
        ))}
      {/* '>' 버튼 - 끝 페이지일 때 비활성화 */}
      <button
        onClick={handleRightClick}
        className={
          currentPage === pageNumberArray[pageNumberArray.length - 1]
            ? ARROW_BUTTON_STYLE.disabled
            : ARROW_BUTTON_STYLE.active
        }
        disabled={currentPage === pageNumberArray[pageNumberArray.length - 1]}
      >
        {currentPage === pageNumberArray[pageNumberArray.length - 1] ? (
          <RightArrowOff />
        ) : (
          <Image src={Arrow_Right} alt="arrow right" />
        )}
      </button>
    </div>
  );
};

export default Pagination;
