import LoginForm from "@app/components/Form/LoginForm";
import Image from "next/image";
import Link from "next/link";
import icon_logo from "@icons/icon_logo_big.svg";

export default function Login() {

  return (
    <div className="container mt-[104px] max-w-[640px]">
      <div className="flex flex-col items-center">
        <Link href={"/"}>
          <Image
            className="w-[270px] md:w-[340px]"
            alt="icon_logo"
            src={icon_logo}
          />
        </Link>
        <LoginForm />
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
