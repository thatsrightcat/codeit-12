import { z } from "zod";

// validation check를 할 schema를 생성합니다
export const signUpSchema = z
  .object({
    email: z
      .string({ required_error: "이메일을 입력해 주세요" })
      .email({ message: "잘못된 이메일입니다." }),
    password: z
      .string({ required_error: "비밀번호를 입력해 주세요" })
      .min(8, { message: "8자리 이상 입력해 주세요" }),
    confirmPassword: z.string(),
    nickname: z.string().min(1, { message: "닉네임을 입력해 주세요" }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });
// 생성한 스키마(Schema)로부터 타입(type)을 추론(infer)할 수 있습니다.
export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "이메일을 입력해 주세요" })
    .email({ message: "잘못된 이메일입니다." }),
  password: z
    .string({ required_error: "비밀번호를 입력해 주세요" })
    .min(8, { message: "8자리 이상 입력해 주세요" }),
  category: z.string({
    message: "카테고리를 선택해 주세요",
    required_error: "카테고리를 선택해 주세요",
  }),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
