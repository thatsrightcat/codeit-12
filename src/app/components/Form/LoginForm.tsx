"use client";

import { useForm, Controller } from "react-hook-form";
import BasicInput from "@app/components/Input/BasicInput";
import { TLoginSchema, LoginSchema } from "@customTypes/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: TLoginSchema) => {
    login(data.email, data.password);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[40px] flex w-full flex-col gap-[28px] text-[#1B1B1B]"
      noValidate
    >
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="email">이메일</label>
        <Controller
          name="email"
          control={control}
          render={({
            field: { onChange, onBlur },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="email"
              placeholder="이메일을 입력해 주세요"
              id="email"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
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
        <label htmlFor="password">비밀번호</label>
        <Controller
          name="password"
          control={control}
          render={({
            field: { onChange, onBlur },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              id="password"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
            />
          )}
        />
        {errors.password && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.password.message as string}
          </p>
        )}
      </section>
      <button
        disabled={!isValid}
        type="submit"
        className={`${isValid ? "cursor-pointer bg-[#0B3B2D]" : "bg-[#A4A1AA]"} rounded-[6px] py-[11px] font-[700] text-white transition`}
      >
        로그인 하기
      </button>
    </form>
  );
}
