import Image, { StaticImageData } from "next/image";
import bannerImage from "@images/banner_image.png";
import subImage_1 from "@images/sub_image-1.png";
import subImage_2 from "@images/sub_image-2.png";
import subImage_3 from "@images/sub_image-3.png";
import subImage_4 from "@images/sub_image-4.png";

interface SubImages {
  id: number;
  imageUrl: string;
}

interface Images {
  bannerImageUrl: string | StaticImageData;
  subImages: SubImages[];
}

export default function ActivityImageContainer({
  bannerImageUrl,
  subImages,
}: Images) {
  /**
   * bannerImageUrl
   * @type string;
   *
   * bannerImageUrl ? bannerImageUrl : bannerImage;
   *
   * subImages
   * @type interface SubImages {id: number, imageUrl: string} => SubImages[];
   *
   * url 필터링
   * url 값이 더미 데이터일 경우의 예외처리
   * bannerImage, subImages의 url 확장자가 a.png, b.png일 경우 default image로 변경
   *
   *
   * 렌더링을 어떻게 하면 모든 경우의 수를 해결?
   *
   * 1. subImages 배열의 요소가 0 ~ 4개
   * 2. 레이아웃 구성
   *    : flex or grid
   *    : 요소의 개수에 따라 grid row, col 생성>
   *    : 요소가 0 ~ 1개 일때 => 너비 100%, 높이 100%로
   *    : 요소가 2개 일때 => 너비 50%, 높이 50%로
   *    : 요소가 3개 일때 => 윗줄 너비 25%, 높이 25%, 아랫줄 너비 100%, 높이 50%
   *    : 요소가 4개 일때 => 각각 너비 25%, 높이 25%
   *
   * 1. 레이아웃을 flex로 잡을때
   * (1). 배열의 요소를 중첩배열로 만들어 각각 렌더링?
   * ex) subImages = [
   *    [ {id: 1, imageUrl: string}, {id: 2, imageUrl: string}],
   *    [ {id: 3, imageUrl: string}, {id: 4, imageUrl: string}],
   * ];
   *
   * 렌더링
   * subImages[0].map((image) => ...);
   * subImages[1].map((image) => ...);
   *
   * 예외처리
   * subImages.length >= 1 && map()
   *
   *
   */

  return (
    <div className="mb-[5.3125rem] flex h-[33.375rem] w-full gap-[0.5rem]">
      <div className="relative h-full w-[50%]">
        {bannerImageUrl ? (
          <Image fill src={bannerImageUrl} alt="배너 이미지" />
        ) : (
          <Image fill src={bannerImage} alt="배너 이미지" />
        )}
      </div>
      <div className="flex h-full w-[50%] flex-col gap-[0.5rem]">
        <div className="flex h-[50%] w-full gap-[0.5rem]">
          <div className="relative h-full w-[50%]">
            {/* <Image fill src={subImages[0].imageUrl} alt="서브 이미지" /> */}
            <Image fill src={subImage_1} alt="서브 이미지" />
          </div>
          <div className="relative h-full w-[50%]">
            <Image fill src={subImage_2} alt="서브 이미지" />
          </div>
        </div>
        <div className="flex h-[50%] w-full gap-[0.5rem]">
          <div className="relative h-full w-[50%]">
            <Image fill src={subImage_3} alt="서브 이미지" />
          </div>
          <div className="relative h-full w-[50%]">
            <Image fill src={subImage_4} alt="서브 이미지" />
          </div>
        </div>
      </div>
    </div>
  );
}
