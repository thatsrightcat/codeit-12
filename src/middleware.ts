import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("미들웨어 실행중");

  const token = req.cookies.get("accessToken");

  if (req.nextUrl.pathname.startsWith("/mypage") && !token) {
    console.log("토큰 없어요. 로그인페이지로 이동합니다.");
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mypage/:path*"],
};
