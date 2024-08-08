import { useState, useEffect } from "react";

interface WindowSize {
  width: number | undefined;
}

// 화면 크기 가져오는 함수
const GetSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window === "undefined" ? undefined : window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize); // resize 이벤트 - 브라우저 크기가 변경될 때
    return () => {
      window.removeEventListener("resize", handleResize); // cleanup - 메모리 누수 방지
    };
  }, []);

  return windowSize;
};

// 화면 크기(반응형)에 따라 페이지에 나타나는 데이터 수 결정
const useOffsetSize = (XL = 8, MD = 9, SM = 4): number => {
  const { width } = GetSize();
  const [size, setSize] = useState<number>(8);

  useEffect(() => {
    if (!width) return;
    if (width >= 1280) {
      setSize(XL);
      return;
    }
    if (width >= 768) {
      setSize(MD);
      return;
    }
    if (width >= 640) {
      setSize(SM);
      return;
    }
    if (width < 640) {
      setSize(SM);
      return;
    }
  }, [XL, MD, SM, width]);
  return size;
};

export default useOffsetSize;
