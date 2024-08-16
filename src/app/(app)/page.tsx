"use client";

import { Suspense } from "react";
import { useState, useCallback } from "react";
import { MouseEvent } from "react";
import ActivityCardList from "@app/components/MainPage/ActivityCardList";
import PopularActivityList from "@app/components/MainPage/PopularActivityList";
import SearchActivityResult from "@app/components/MainPage/SearchActivityResult";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import BedIcon from "@icons/icon_search.svg";

export default function Home() {
  const monthNum = new Date().getMonth() + 1;
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [content, setContent] = useState("");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      if (!value) params.delete(name);
      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setContent(name);
    router.push(pathname + "?" + createQueryString("keyword", String(keyword)));
  };

  return (
    <>
      <Suspense>
        <section>
          <div className="relative flex h-[240px] w-full justify-center bg-[url('../../public/images/img_main_banner.png')] bg-cover bg-center md:h-[550px]">
            <div className="relative -left-1/4 mt-[74px] flex flex-col gap-5 md:mt-[144px] xl:mt-[159px]">
              <h1 className="text-[24px] font-bold leading-tight text-white md:text-[54px] xl:text-[68px]">
                함께 배우면 즐거운
                <br /> 스트릿 댄스
              </h1>
              <p className="text-[14px] font-bold leading-tight text-white md:text-[20px] xl:text-[24px]">{`${monthNum}월의 인기 체험 BEST 🔥`}</p>
            </div>
          </div>
        </section>

        <div>
          <section className="container relative flex justify-center bg-none">
            <div className="absolute -top-14 w-full rounded-2xl bg-white px-6 py-9">
              <h2 className="mb-5 text-lg font-bold md:text-xl">
                무엇을 체험하고 싶으신가요?
              </h2>
              <div className="flex gap-3">
                <div className="flex h-[56px] w-full gap-2 rounded-[4px] border border-gray-700 px-3 py-4">
                  <Image src={BedIcon} alt="search icon" />
                  {keyword.length > 0 && (
                    <p className="absolute left-16 top-[70px] w-[144px] bg-white text-center text-[18px] text-gray-700 md:top-[76px]">
                      내가 원하는 체험은
                    </p>
                  )}
                  <input
                    className="bg-white text-[18px] placeholder:text-[18px] placeholder:text-gray-600 active:bg-white"
                    name="keyword"
                    value={keyword}
                    placeholder="내가 원하는 체험은"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <button
                  className="h-[56px] w-[96px] rounded-[4px] bg-primary text-lg font-bold text-white md:w-[136px]"
                  onClick={handleSearch}
                  name="name"
                >
                  검색하기
                </button>
              </div>
            </div>
          </section>
          {content ? (
            <Suspense>
              <SearchActivityResult />
            </Suspense>
          ) : (
            <div>
              <section>
                <PopularActivityList />
              </section>
              <section className="container">
                <Suspense>
                  <ActivityCardList />
                </Suspense>
              </section>
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
}

// @TODO 쿼리 스트링 뒤죽박죽 - 카테고리 변경하면 페이지 번호 따라옴 / 반응형 화면 size에 따른 페이지 번호 변경 적용 안됨
// @TODO 검색 후 메인 페이지로 돌아와도 메인페이지 렌더링 안됨 - 초기화 필요 (keyword param이 삭제 안되고 null 적용됨)
// @TODO 인기 체험 슬라이더 디자인 수정
// @TODO 카테고리 mobile 화면일 때 슬라이더 적용
