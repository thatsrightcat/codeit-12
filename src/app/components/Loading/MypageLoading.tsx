import Image from "next/image";
// import SpinnerIcon from "@images/image_spinner.png";
import loadingImage from "@images/image_loading.gif";
import loadingText from "@images/loading_text.gif";

// 헤더 제외한 부분에서 중앙에 위치할 수 있도록
// viewport height - header height
function MyPageLoading() {
  return (
    <div className="fixed inset-0 flex h-[100vh] flex-col items-center justify-center bg-[rgba(255,255,255,0.5)] backdrop-blur-[2px]">
      <Image className="w-[400px]" src={loadingImage} alt="loading image" />
      <Image
        className="w-[110px] translate-x-[10px] translate-y-[-75px]"
        src={loadingText}
        alt="loading text"
      />
    </div>
  );
}

export default MyPageLoading;
