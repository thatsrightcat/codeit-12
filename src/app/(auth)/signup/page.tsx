"use client";

import { useForm } from "react-hook-form";
import { signUpSchema, TSignUpSchema } from "@customTypes/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import BasicInput from "@components/Input/BasicInput";
import icon_logo from "@icons/icon_logo_big.svg";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: TSignUpSchema) => {
    // server로 회원가입 request를 보내는 logic

    // form에 입력된 값 초기화(제거)
    reset();
  };

  return (
    <div className="mx-auto mb-[357px] mt-[104px] max-w-[640px]">
      <div className="mx-[13px] flex flex-col items-center">
        <Image
          className="w-[270px] md:w-[340px]"
          alt="icon_logo"
          src={icon_logo}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-[40px] flex w-full flex-col gap-[28px] text-[#1B1B1B]"
        >
          <section className="flex flex-col gap-[8px]">
            <label className="text-[16px]" htmlFor="email">
              이메일
            </label>
            <BasicInput
              type="email"
              placeholder="이메일을 입력해 주세요"
              fieldName="email"
              register={register}
              error={errors.email}
            />
          </section>
          <section className="flex flex-col gap-[8px]">
            <label className="text-[16px]" htmlFor="nickname">
              닉네임
            </label>
            <BasicInput
              type="text"
              placeholder="닉네임을 입력해 주세요"
              fieldName="nickname"
              register={register}
            />
          </section>
          <section className="flex flex-col gap-[8px]">
            <label className="text-[16px]" htmlFor="email">
              비밀번호
            </label>
            <BasicInput
              type="password"
              placeholder="8자 이상 입력해 주세요"
              fieldName="password"
              register={register}
              error={errors.password}
            />
          </section>
          <section className="flex flex-col gap-[8px]">
            <label htmlFor="password">비밀번호 확인</label>
            <BasicInput
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              fieldName="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            />
          </section>
          <button
            className={`${isValid ? "bg-[#0B3B2D]" : "bg-[#A4A1AA]"} rounded-[6px] py-[11px] font-[700] text-white`}
          >
            로그인 하기
          </button>
        </form>
        <section className="mt-[32px] flex gap-3 text-[#333236]">
          <p>회원이신가요?</p>
          <Link className="underline" href={"/login"}>
            로그인하기
          </Link>
        </section>
      </div>
    </div>
  );
}
