"use client";

import { FieldValues, useForm } from "react-hook-form";
import BasicInput from "@app/components/Input/BasicInput";
import { TLoginSchema, LoginSchema } from "@customTypes/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import icon_logo from "@icons/icon_logo_big.svg";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<TLoginSchema>({ resolver: zodResolver(LoginSchema) });
  /** 1. data의 type은 TLoginSchema 입니다.
   2. resolver라는 것을 통해 validation check를 zodResolver를 사용할 것이며, 미리 만들어 놓은 LoginSchema를 기준으로 validation check를 진행합니다.*/

  const onSubmit = async (data: FieldValues) => {
    /** form으로부터 받아오는 data console에 찍어보기
    console.log(data);*/

    //server에 전송하는 logic 작성 필요

    // form의 각 input field의 값을 초기화시키는 함수
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
            className={`${isValid ? "bg-[#0B3B2D]" : "bg-[#A4A1AA]"} rounded-[6px] py-[11px] font-[700] text-white`}
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
