import { ActivityInfo } from "@customTypes/MainPage";
import Image from "next/image";
import Link from "next/link";
import { formatPriceKorean } from "@utils/formatPrice";
import icon_star from "@icons/icon_star_on.svg";

interface PopularActivityCardProps {
  cardData: ActivityInfo;
}
const PopularActivityCard = ({
  cardData: { id, title, price, bannerImageUrl, rating, reviewCount },
}: PopularActivityCardProps) => {
  return (
    <Link href={`/activities/${id}`}>
      <div
        className="mx-3 h-[186px] w-[186px] rounded-3xl bg-cover bg-center md:h-[317px] md:w-[317px]"
        style={{ backgroundImage: `url('${bannerImageUrl}')` }}
      >
        <div className="mb-6 ml-5 flex h-[160px] flex-col justify-end gap-[6px] text-white">
          <div className="flex">
            <Image
              src={icon_star}
              alt="star icon"
              style={{ width: 20, height: 20 }}
            />
            <p className="text-lg">
              {rating}
              <span>{` (${reviewCount})`}</span>
            </p>
          </div>
          <div className="text-[18px] font-semibold md:text-3xl">{title}</div>
          <div className="text-lg font-bold md:text-xl">
            {formatPriceKorean(price)}
            <span className="text-lg text-gray-400 md:text-xl">/ 인</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PopularActivityCard;
