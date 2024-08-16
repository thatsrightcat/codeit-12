"use client";

import { ActivityInfo } from "@customTypes/MainPage";
import Image from "next/image";
import Link from "next/link";
import { formatPriceKorean } from "@utils/formatPrice";
import icon_star from "@icons/icon_star_on.svg";

interface ActivityCardProps {
  cardData: ActivityInfo;
}
const ActivityCard = ({
  cardData: { id, title, price, bannerImageUrl, rating, reviewCount },
}: ActivityCardProps) => {
  return (
    <div>
      <Link href={`/activities/${id}`}>
        <div className="mb-[10px] flex flex-col gap-[16px] md:mb-[30px] xl:mb-[48px]">
          <div className="relative h-[168px] w-[168px] md:h-[221px] md:w-[221px] xl:h-[283px] xl:w-[283px]">
            <Image
              src={`${bannerImageUrl}`}
              alt="card image"
              fill
              sizes="(min-width: 1280px) 283px,
              (min-width: 768px) 221px"
              style={{ borderRadius: 15, objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="flex">
              <Image
                src={icon_star}
                alt="star icon"
                style={{ width: 20, height: 20 }}
              />
              <p>
                {rating}
                <span className="text-[#A1A1A1]">{` (${reviewCount})`}</span>
              </p>
            </div>
            <div className="text-[18px] font-semibold md:text-2xl">{title}</div>
            <div className="text-xl font-bold md:text-[24px]">
              {formatPriceKorean(price)}
              <span className="text-lg text-gray-800 md:text-xl">/ 인</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ActivityCard;
