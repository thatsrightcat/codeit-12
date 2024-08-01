import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-3xl font-bold text-primary">font test</div>
      <div className="bg-overlay text-lg font-medium text-orange-200">
        font test
      </div>
      <span className="center-block w-1/2 text-center text-xl font-semibold text-gray-400">
        font test
      </span>
      <span className="center-block w-1/2 text-center text-xl font-semibold text-gray-400">
        <span className="visually-hidden">찜하기</span>
      </span>
      <section>
        <Link className="block" href={"/signup"}>
          <span className="font-bold text-red-100">회원가입</span> 페이지
          테스트하러 가기
        </Link>
        <Link className="block" href={"/login"}>
          <span className="font-bold text-red-100">로그인</span> 페이지
          테스트하러 가기
        </Link>
      </section>
    </>
  );
}
