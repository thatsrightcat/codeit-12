"use client";

import ActivityCardList from "@app/components/MainPage/ActivityCardList";
import Pagination from "@app/components/MainPage/Pagination";
import CategoryFilter from "@components/MainPage/CategoryFilter";

export default function Home() {
  const monthNum = new Date().getMonth() + 1;

  return (
    <>
      <section>
        <div className="relative flex h-[240px] w-full justify-center bg-[url('../../public/images/img_main_banner.png')] bg-cover bg-center md:h-[550px]">
          <div className="relative -left-1/4 mt-[74px] flex flex-col gap-5 md:mt-[144px] xl:mt-[159px]">
            {/* 이달의 인기 체험 기능 필요 */}
            <h1 className="text-[24px] font-bold leading-tight text-white md:text-[54px] xl:text-[68px]">
              함께 배우면 즐거운
              <br /> 스트릿 댄스
            </h1>
            <p className="text-[14px] font-bold leading-tight text-white md:text-[20px] xl:text-[24px]">{`${monthNum}월의 인기 체험 BEST 🔥`}</p>
          </div>
        </div>
      </section>
      <div className="container">
        {/* 체험 검색 기능 필요 */}
        <section>Search section</section>
        <section>
          {/* 인기 체험 구현 필요 */}
          <div className="flex">
            <h1 className="text-[18px] font-bold md:text-[36px]">
              🔥인기 체험
            </h1>
            <div>{"< > button or swipe - slick library"}</div>
          </div>
          <div>items - rating</div>
        </section>
        <section>
          {/* Category 선택 기능 필요 */}
          <CategoryFilter />
          {/* Filter 기능 필요 */}
          <h1 className="text-[18px] font-bold md:text-[36px]">🎯모든 체험</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <ActivityCardList />
          </div>
          {/* 페이지네이션 구현 필요 */}
          <Pagination />
        </section>
      </div>
    </>
  );
}
