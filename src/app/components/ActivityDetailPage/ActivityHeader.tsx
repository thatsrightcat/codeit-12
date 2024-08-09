import Image from "next/image";
import ActivityHeaderKebabMenu from "./ActivityHeaderKebabMenu";
import locationIcon from "@icons/icon_location.svg";
import starIcon from "@icons/icon_star_on.svg";

interface ActivityHeaderProps {
  category: string;
  title: string;
  rating: number;
  reviewCount: number;
  address: string;
}

export default function ActivityHeader({
  category,
  title,
  rating,
  reviewCount,
  address,
}: ActivityHeaderProps) {
  /**
   */
  return (
    <header className="mb-[1.5625rem] flex h-[7.25rem] w-full justify-between">
      {/* 헤더 왼쪽 영역 */}
      <div className="flex flex-col gap-[0.625rem]">
        {/* 카테고리 영역 */}
        <p className="text-md font-regular text-primary">{category}</p>
        {/* 타이틀, 별점, 주소 영역 */}
        <div className="flex flex-col gap-[1rem]">
          {/* 타이틀 영역 */}
          <h1 className="text-3xl font-bold text-primary">{title}</h1>
          {/* 별점, 주소 영역 */}
          <div className="flex gap-[0.75rem]">
            {/* 별점 이미지, 텍스트 영역 */}
            <div className="flex items-center gap-[0.375rem] text-md font-regular text-[#000]">
              {/* 별점 이미지 */}
              <div className="relative h-[1rem] w-[1rem]">
                <Image fill src={starIcon} alt="별점 아이콘" />
              </div>
              {/* 별점 텍스트 */}
              <span>{`${rating} (${reviewCount})`}</span>
            </div>
            {/* 주소 이미지, 텍스트 영역 */}
            <div className="flex items-center gap-[0.125rem] text-md font-regular text-primary">
              {/* 주소 이미지 */}
              <div className="relative h-[1.125rem] w-[1.125rem]">
                <Image fill src={locationIcon} alt="주소 아이콘" />
              </div>
              {/* 주소 텍스트 */}
              <span>{address}</span>
            </div>
          </div>
        </div>
      </div>
      {/* 헤더 케밥 메뉴 영역 */}
      <ActivityHeaderKebabMenu />
    </header>
  );
}
