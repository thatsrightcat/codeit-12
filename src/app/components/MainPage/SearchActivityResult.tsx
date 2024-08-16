"use client";

import { useState } from "react";
import instance from "@api/axios";
import { ActivityResponse } from "@customTypes/MainPage";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import ActivityCard from "./ActivityCard";
import Pagination from "./Pagination";
import useOffsetSize from "@hooks/useOffsetSize";

const getSearch = async (keyword: string, pageNum: number, size: number) => {
  const params = new URLSearchParams({
    method: "offset",
    keyword,
    page: String(pageNum + 1),
    size: String(size),
  });
  const response = await instance.get<ActivityResponse>(
    `/activities?${params}`,
  );
  return response.data;
};
const useSearch = (keyword: string, pageNum: number, size: number) => {
  return useQuery({
    queryKey: ["searchActivity", keyword, pageNum, size],
    queryFn: () => getSearch(keyword, pageNum, size),
    placeholderData: keepPreviousData,
  });
};

const SearchActivityResult = () => {
  const [currentPageNum, setCurrentPageNum] = useState(0);
  const searchParams = useSearchParams();
  const currentPageGroup = Math.floor(currentPageNum / 5);
  const currentSize = useOffsetSize();
  const keyword = searchParams.get("keyword");

  const handlePageNum = (page: number) => {
    setCurrentPageNum(page);
  };

  const { data } = useSearch(String(keyword), currentPageNum, currentSize);

  const searchActivities = data?.activities || [];
  const searchTotalCount = data?.totalCount || 0;
  return (
    <div className="container mt-40">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl">
          <span className="font-bold">{keyword}</span>으로 검색한 결과입니다.
        </h1>
        <p className="mb-6 text-lg">총 {searchTotalCount}개의 결과</p>
      </div>
      <div className="flex flex-col gap-[38px] md:gap-[72px] xl:gap-[64px]">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {searchActivities.map((activity) => (
            <ActivityCard key={activity.id} cardData={activity} />
          ))}
        </div>
        {searchTotalCount === 0 && (
          <div className="text-2xl">검색 결과가 없습니다.</div>
        )}
        {searchTotalCount !== 0 && (
          <div className="mb-[83px] flex items-center justify-center">
            <Pagination
              totalCount={searchTotalCount}
              currentGroup={currentPageGroup}
              currentPage={currentPageNum}
              offsetLimit={currentSize}
              setPageNum={handlePageNum}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchActivityResult;
