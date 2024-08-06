"use client";

import { ActivityInfo } from "@customTypes/MainPage";
import Image from "next/image";
import Link from "next/link";
import icon_star from "@icons/icon_star_on.svg";

interface ActivityCardProps {
  cardData: ActivityInfo;
}
const ActivityCard = ({
  cardData: { id, title, price, bannerImageUrl, rating, reviewCount },
}: ActivityCardProps) => {
  return (
    <div>
      <Link href={`/activity/${id}`}>
        <div className="flex flex-col gap-[16px]">
          <Image
            src={`${bannerImageUrl}`}
            alt="card image"
            width={168}
            height={168}
          />
          <div>
            <div className="flex">
              <Image src={icon_star} alt="star icon" width={20} height={20} />
              <p>
                {rating}
                <span className="text-[#A1A1A1]">{` (${reviewCount})`}</span>
              </p>
            </div>
            <div>{title}</div>
            <div>{price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ActivityCard;
