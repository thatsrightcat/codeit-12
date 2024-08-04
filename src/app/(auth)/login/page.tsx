"use client";

import { FieldValues, useForm } from "react-hook-form";
import BasicInput from "@app/components/Input/BasicInput";
import { TLoginSchema, LoginSchema } from "@customTypes/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@context/AuthContext";
import icon_logo from "@icons/icon_logo_big.svg";

export default function Login() {
  const { login, user, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<TLoginSchema>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data: FieldValues) => {
    login(data.email, data.password);
    reset();
  };

  return (
    <div className="mx-auto mt-[104px] max-w-[640px]">
      <div className="mx-[13px] flex flex-col items-center">
        <Image
          className="w-[270px] md:w-[340px]"
          alt="icon_logo"
          src={icon_logo}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[40px] flex w-full flex-col gap-[28px] text-[#1B1B1B]"
          noValidate
        >
          <section className="flex flex-col gap-[8px]">
            <label htmlFor="email">이메일</label>
            <BasicInput
              type="email"
              placeholder="이메일을 입력해 주세요"
              fieldName="email"
              register={register}
              error={errors.email}
            />
          </section>
          <section className="flex flex-col gap-[8px]">
            <label htmlFor="password">비밀번호</label>
            <BasicInput
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              fieldName="password"
              register={register}
              error={errors.password}
            />
          </section>
          <button
            type="submit"
            className={`${isValid ? "bg-[#0B3B2D]" : "bg-[#A4A1AA]"} rounded-[6px] py-[11px] font-[700] transition  text-white`}
          >
            로그인 하기
          </button>
        </form>
        <section className="mt-[32px] flex gap-3 text-[#333236]">
          <p>회원이 아니신가요?</p>
          <Link className="underline" href={"/signup"}>
            회원가입하기
          </Link>
        </section>
      </div>
    </div>
  );
}
