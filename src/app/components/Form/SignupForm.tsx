"use client";

import React, { useEffect } from "react";
import { useForm, Controller, FieldErrors, Control } from "react-hook-form";
import BasicInput from "@app/components/Input/BasicInput";
import { TSignUpSchema, signUpSchema } from "@customTypes/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@context/AuthContext";

export default function SignupForm() {
  const { signup } = useAuth();
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: TSignUpSchema) => {
    await signup(data.email, data.nickname, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mt-[40px] flex w-full flex-col gap-[28px] text-black"
    >
      <section className="flex flex-col gap-[8px]">
        <label className="text-[16px]" htmlFor="email">
          이메일
        </label>
        <Controller
          name="email"
          control={control}
          render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="email"
              placeholder="이메일을 입력해 주세요"
              id="email"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
            />
          )}
        />
        {errors.email && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.email.message as string}
          </p>
        )}
      </section>
      <section className="flex flex-col gap-[8px]">
        <label className="text-[16px]" htmlFor="nickname">
          닉네임
        </label>
        <Controller
          name="nickname"
          control={control}
          render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="text"
              placeholder="닉네임을 입력해 주세요"
              id="nickname"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
            />
          )}
        />
        {errors.nickname && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.nickname.message as string}
          </p>
        )}
      </section>
      <section className="flex flex-col gap-[8px]">
        <label className="text-[16px]" htmlFor="email">
          비밀번호
        </label>
        <Controller
          name="password"
          control={control}
          render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="password"
              placeholder="8자 이상 입력해 주세요"
              id="password"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
            />
          )}
        />
        {errors.password && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.password.message as string}
          </p>
        )}
      </section>
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="password">비밀번호 확인</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              id="confirmPassword"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
            />
          )}
        />
        {errors.confirmPassword && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.confirmPassword.message as string}
          </p>
        )}
      </section>
      <input
        disabled={!isValid}
        type="submit"
        value="회원가입 하기"
        className={`${isValid ? "cursor-pointer bg-green-300" : "bg-gray-600"} rounded-[6px] py-[11px] font-[700] text-white transition`}
      ></input>
    </form>
  );
}
