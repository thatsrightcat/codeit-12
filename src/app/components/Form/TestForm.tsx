"use client";

import { useForm, Controller } from "react-hook-form";
import BasicInput from "@app/components/Input/BasicInput";
import CalendarInput from "@app/components/Input/CalendarInput";
import DropDownInput from "@app/components/Input/DropDownInput";
import { TTestFormSchema, TestFormSchema } from "@customTypes/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@context/AuthContext";

export default function TestForm() {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TTestFormSchema>({
    resolver: zodResolver(TestFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: TTestFormSchema) => {
    // 입력받아온 값 중 email과 password만 받아서 login 함수를 실행시켜봅니다 (테스트).
    login(data.email, data.password);

    // 입력받아온 값 전부를 콘솔창에 표시해봅니다.
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[40px] flex w-full flex-col gap-[28px] text-[#1B1B1B]"
      noValidate
    >
      {/* BasicInput: !password 타입이 아닌 모든 타입이 여기에 해당합니다. */}
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="email">이메일</label>
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
      {/* BasicInput: Paswword 타입 */}
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="password">비밀번호</label>
        <Controller
          name="password"
          control={control}
          render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid },
          }) => (
            <BasicInput
              type="password"
              placeholder="비밀번호를 입력해 주세요"
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
      {/* DropDown Input */}
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="dropdown">드롭다운</label>
        <Controller
          name="dropdown"
          control={control}
          render={({
            field: { onChange, onBlur, ref, value },
            fieldState: { invalid },
          }) => (
            <DropDownInput
              dropDownOptions={["옵션1", "옵션2", "옵션3", "옵션4"]}
              placeholder="옵션을 선택해 주세요"
              setInitialValue={false}
              id="dropDown"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
              value={value}
            />
          )}
        />
        {errors.dropdown && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.dropdown.message as string}
          </p>
        )}
      </section>
      {/* Calendar Input */}
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="calendar">날짜</label>
        <Controller
          name="calendar"
          control={control}
          render={({
            field: { onChange, onBlur, ref },
            fieldState: { invalid },
          }) => (
            <CalendarInput
              id="calendar"
              onChange={onChange}
              placeholder="YY/MM/DD"
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
            />
          )}
        />
        {errors.calendar && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.calendar.message as string}
          </p>
        )}
      </section>
      {/* dropDown을 사용하여 시간대 rendering하고 값 받아오기 */}
      <section className="flex flex-col gap-[8px]">
        <label htmlFor="time">시작 시간</label>
        <Controller
          name="startTime"
          control={control}
          render={({
            field: { onChange, onBlur, ref, value },
            fieldState: { invalid },
          }) => (
            <DropDownInput
              setInitialValue={false}
              dropDownOptions={["00:00", "01:00", "02:00", "03:00"]}
              placeholder="00:00"
              id="time"
              onChange={onChange}
              onBlur={onBlur}
              invalid={invalid}
              ref={ref}
              value={value}
            />
          )}
        />
        {errors.startTime && (
          <p className="mt-[8px] text-[12px] text-red-100">
            {errors.startTime.message as string}
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
