import SignupForm from "@app/components/Form/SignupForm";
import Image from "next/image";
import Link from "next/link";
import icon_logo from "@icons/icon_logo_big.svg";

export default function SignUp() {
  return (
    <div className="container mt-[104px] max-w-[640px]">
      <div className="flex flex-col items-center">
        <Image
          className="w-[270px] md:w-[340px]"
          alt="icon_logo"
          src={icon_logo}
        />
        <SignupForm />
        <section className="mt-[32px] flex gap-3 text-[#333236]">
          <p>회원이신가요?</p>
          <Link className="text-green-300 underline" href={"/login"}>
            로그인하기
          </Link>
        </section>
      </div>
    </div>
  );
}
