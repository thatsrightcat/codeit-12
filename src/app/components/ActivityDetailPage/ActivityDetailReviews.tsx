interface ActivityDetailReviewsProps {
  reviews: [];
  totalCount: number;
  averageRating: number;
}

export default function ActivityDetailReviews({
  reviews,
  totalCount,
  averageRating,
}: ActivityDetailReviewsProps) {
  return (
    <div className="bg-orange-200">
      {/* 리뷰 후기 영역 */}
      <h1>후기</h1>
      {/* 리뷰 점수, 만족도, 후기 개수 영역 */}
      <div>
        <h3>{totalCount}</h3>
        <p>매우 만족</p>
        <p>{averageRating}</p>
      </div>
      {/* 등록된 유저 리뷰 */}
      <p>리뷰가 아직 없습니다</p>
    </div>
  );
}
