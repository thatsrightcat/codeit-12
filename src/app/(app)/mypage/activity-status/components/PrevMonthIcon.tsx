import Image from "next/image";
import prevIcon from "@icons/icon_arrow_left_on_44px.svg";

export default function PrevMonthIcon() {
  return (
    <div className="2 relative flex h-[36px] justify-end text-black">
      <Image
        src={prevIcon}
        alt="prev-button"
        className="absolute right-4 h-full w-4"
      />
      <Image
        src={prevIcon}
        alt="prev-button"
        className="absolute right-3 h-full w-4"
      />
    </div>
  );
}
