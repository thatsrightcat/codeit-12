"use client";

import { formatPriceKorean } from "@/utils/formatPrice";
import { MyActivityType } from "@customTypes/MyActivityStatusType";
import Image from "next/image";
import { useDropdown } from "@hooks/useDropdown";
import Menu from "@icons/icon_menu.svg";
import Star from "@icons/icon_star_on.svg";

interface MyActivityProps extends MyActivityType {
  onDelete: (id: number) => void;
}

const MyActivity: React.FC<MyActivityProps> = ({
  id,
  title,
  price,
  bannerImageUrl,
  rating,
  reviewCount,
  onDelete,
}) => {
  const { ref, isOpen, toggle, close } = useDropdown();

  const handleDelete = async () => {
    onDelete(id);
    close();
  };

  return (
    <li className="flex h-32 rounded-3xl bg-white shadow-custom-shadow-01 md:h-[9.75rem] xl:h-[12.75rem]">
      <div className="relative aspect-square h-full overflow-hidden rounded-l-3xl">
        <Image
          src={bannerImageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-3 md:px-4 md:py-3 xl:px-6 xl:py-4">
        <div className="overflow-hidden">
          <div className="mb-[0.375rem] flex gap-1 text-md font-normal text-black md:text-lg">
            <Image src={Star} alt={"별점"} width={18} />
            <span>{rating}</span>
            <span>&#40;{reviewCount}&#41;</span>
          </div>
          <h3 className="truncate text-md font-bold text-primary md:text-2lg xl:text-xl">
            {title}
          </h3>
        </div>
        <div className="mt-auto flex place-items-center justify-between">
          <div className="truncate text-lg font-medium text-black md:text-xl xl:text-2xl xl:text-gray-800">
            {formatPriceKorean(price)}
          </div>
          <div className="relative flex flex-shrink-0" ref={ref}>
            <button onClick={toggle}>
              <Image
                src={Menu}
                alt="더보기 버튼"
                width={40}
                height={40}
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 top-full z-10 mt-2 w-full min-w-28 rounded-lg border border-gray-300 bg-white text-center text-md font-medium text-gray-800 shadow-custom-shadow-01 md:min-w-32 md:text-lg xl:min-w-40 xl:text-2lg">
                <button
                  onClick={handleDelete}
                  className="block w-full border-b border-gray-300 px-4 py-2 md:h-14 xl:h-16"
                >
                  삭제하기
                </button>
                <button className="block w-full px-4 py-2 md:h-14 xl:h-16">
                  수정하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MyActivity;
