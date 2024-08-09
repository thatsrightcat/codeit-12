import {
  getActivityDetailList,
  getActivityDetailReviews,
} from "@api/fetchActivityDetail";
import ActivityDetailReviews from "@app/components/ActivityDetailPage/ActivityDetailReviews";
import ActivityHeader from "@app/components/ActivityDetailPage/ActivityHeader";
import ActivityImageContainer from "@app/components/ActivityDetailPage/ActivityImageContainer";
import ActivityKakaoMap from "@app/components/ActivityDetailPage/ActivityKakaoMap";
import ReservationCard from "@app/components/ActivityDetailPage/ReservationCard";
import bannerImage from "@images/banner_image.png";

interface Params {
  params: {
    activityId: string | number;
  };
}

interface SubImages {
  id: number;
  imageUrl: string;
}

interface DefaultImages {
  src: string;
}

export default async function ActivityDetailPage({ params }: Params) {
  const activityId = Number(params.activityId);
  const activityDetailList = await getActivityDetailList({
    activityId,
  });
  const activityDetailReviews = await getActivityDetailReviews({ activityId });

  // console.log(activityDetailList);

  const {
    category,
    title,
    rating,
    reviewCount,
    address,
    description,
    subImages,
    bannerImageUrl,
    price,
  } = activityDetailList;

  const { reviews, totalCount, averageRating } = activityDetailReviews;

  // 배너 이미지 a.png, b.png 검사
  const bannerImageUrlFilter = (url: string) => {
    const extension = url.split("/");
    const fileName = extension[extension.length - 1].split(".");
    if (fileName[0] === "a" || "b") {
      return bannerImage;
    } else {
      return url;
    }
  };

  // const subImageUrlFilter = (images: SubImages[]) => {
  //   let filterImagesUrl: string[] = [];
  //   images.forEach((image, index) => {
  //     const extension = image.imageUrl.split("/");
  //     const fileName = extension[extension.length - 1].split(".");
  //     if (fileName[0] === "a" || "b") {
  //       /** fileName이 a 또는 b라면
  //        * images 폴더에 있는 기본 이미지로 교채
  //        */
  //       filterImagesUrl[index] = "";
  //     }
  //   });
  //   return filterImagesUrl;
  // };

  /**
   * @TODO
   * api GET, POST 요청
   * 가져와야 할 데이터 목록
   * 체험 상세 조회: /activities/{activityId}
   * 예약 카드 날짜 클릭시 체험 예약 가능일 조회: /activities/{activityId}/available-schedule
   * 체험 리뷰 조회: activities/{activityId}/reviews
   */

  return (
    <div className="container">
      <ActivityHeader
        category={category}
        title={title}
        rating={rating}
        reviewCount={reviewCount}
        address={address}
      />
      <ActivityImageContainer
        bannerImageUrl={bannerImageUrlFilter(bannerImageUrl)}
        subImages={subImages}
      />
      <p>{description}</p>
      <ActivityKakaoMap />
      {/* <ReservationCard price={price} /> */}
      <ActivityDetailReviews
        reviews={reviews}
        totalCount={totalCount}
        averageRating={averageRating}
      />
    </div>
  );
}
