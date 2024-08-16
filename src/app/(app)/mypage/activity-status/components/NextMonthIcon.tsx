import Image from "next/image";
import nextIcon from "@icons/icon_arrow_right_on_44px.svg";

export default function NextMonthIcon() {
  return (
    <div className="2 relative flex h-[36px] justify-end text-black">
      <Image
        src={nextIcon}
        alt="prev-button"
        className="absolute left-4 h-full w-4"
      />
      <Image
        src={nextIcon}
        alt="prev-button"
        className="absolute left-3 h-full w-4"
      />
    </div>
  );
}
