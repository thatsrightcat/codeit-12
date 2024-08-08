"use client";

import { useEffect, useState } from "react";
import instance from "@api/axios";
import { ActivityResponse } from "@customTypes/MainPage";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import ActivityCard from "./ActivityCard";
import Pagination from "./Pagination";
import useOffsetSize from "@hooks/useOffsetSize";

const getPageData = async (
  pageNum: number,
  size: number,
  category?: string,
  sort?: string,
) => {
  const params = new URLSearchParams({
    method: "offset",
    page: String(pageNum + 1),
    size: String(size),
  });
  if (category) params.append("category", category);
  if (sort) params.append("sort", sort);
  const response = await instance.get<ActivityResponse>(
    `/activities?${params}`,
  );
  return response.data;
};

const usePageData = (
  pageNum: number,
  size: number,
  category?: string,
  sort?: string,
) => {
  return useQuery({
    queryKey: ["activities", pageNum, size, category, sort],
    queryFn: () => getPageData(pageNum, size, category, sort),
  });
};

const ActivityCardList = () => {
  const [currentPageNum, setCurrentPageNum] = useState(0); // 현재 페이지 번호
  const [category, setCategory] = useState(""); // 카테고리
  const [sort, setSort] = useState(""); // 정렬
  const searchParams = useSearchParams();
  const pageParams = searchParams.get("page");
  const currentPageGroup = Math.floor(currentPageNum / 5); // 현재 페이지 그룹 계산
  const currentSize = useOffsetSize(); // 페이지의 데이터 수 - 화면 크기에 따라 결정

  useEffect(() => {
    if (pageParams) setCurrentPageNum(Number(pageParams) - 1);
  }, [pageParams]);

  const handlePageNum = (page: number) => {
    setCurrentPageNum(page);
  };

  const { data } = usePageData(currentPageNum, currentSize, category, sort);
  const totalCount = data?.totalCount || 0; // activity 데이터에서 totalCount
  const activities = data?.activities || []; // activity 데이터에서 activities

  return (
    <div className="flex flex-col gap-[38px] md:gap-[72px] xl:gap-[64px]">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} cardData={activity} />
        ))}
      </div>
      <div className="mb-[83px] flex items-center justify-center">
        {/* 페이지네이션 */}
        <Pagination
          currentPage={currentPageNum}
          totalCount={totalCount}
          offsetLimit={currentSize}
          currentGroup={currentPageGroup}
          setPageNum={handlePageNum}
        />
      </div>
    </div>
  );
};

export default ActivityCardList;
