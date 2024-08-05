import Image from "next/image";
import Arrow_Left from "@icons/icon_arrow_pagination_left_off.svg";
import Arrow_Right from "@icons/icon_arrow_pagination_right_on.svg";

// 페이지네이션 구현 필요
const Pagination = () => {
  return (
    <div className="flex">
      <button
        className={`flex h-[40px] w-[40px] items-center justify-center rounded-[15px] border border-primary`}
      >
        <Image src={Arrow_Left} alt="arrow left" />
      </button>
      <button
        className={`flex h-[40px] w-[40px] items-center justify-center rounded-[15px] border border-primary`}
      >
        <Image src={Arrow_Right} alt="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
