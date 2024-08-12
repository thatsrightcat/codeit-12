import Image from "next/image";
import bannerImage from "@images/banner_image.png";

interface SubImages {
  id: number;
  imageUrl: string;
}

interface Images {
  bannerImageUrl: string;
  subImages: SubImages[];
}

export default function ActivityImageSlider({
  bannerImageUrl,
  subImages,
}: Images) {
  return (
    <div className="mb-[5.3125rem] flex h-[33.375rem] w-full gap-[0.5rem]">
      <div className="relative h-full w-[50%]">
        {bannerImageUrl ? (
          <Image fill src={bannerImageUrl} alt="배너 이미지" />
        ) : (
          <Image fill src={bannerImage} alt="배너 이미지" />
        )}
      </div>
      <div className="grid h-full w-[50%] grid-cols-2 grid-rows-2 flex-col gap-[0.5rem]">
        {subImages.map((subImage) => (
          <div key={subImage.id} className="h-full w-full gap-[0.5rem]">
            <div className="relative h-full w-full">
              <Image fill src={subImage.imageUrl} alt="서브 이미지" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
