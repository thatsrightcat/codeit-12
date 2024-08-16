import TestForm from "@app/components/Form/TestForm";
import Link from "next/link";

export default function InputTestPage() {
  return (
    <div className="container mt-[104px] max-w-[640px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px]">
          react-hook-form, react-hook-from/controller, cutom input, zod <br />
          테스트 페이지
        </h1>
        <TestForm />
        <section className="mt-[32px] flex gap-3 text-[#333236]">
          <p>회원이 아니신가요?</p>
          <Link className="text-green-300 underline" href={"/signup"}>
            회원가입하기
          </Link>
        </section>
      </div>
    </div>
  );
}
