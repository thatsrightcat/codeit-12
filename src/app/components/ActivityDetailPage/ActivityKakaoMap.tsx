"use client";

import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";

export default function KakaoMap() {
  useKakaoLoader();
  return (
    <Map
      // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "50%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    />
  );
}
