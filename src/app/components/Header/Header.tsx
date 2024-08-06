"use client";

import Button from "@app/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@context/AuthContext";

const Header: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <header>
      <Link href="/">헤더영역 로고</Link>
      <Button
        color="dark"
        size="md"
        onClick={() => {
          logout();
          alert("로그아웃 됐습니다.");
        }}
      >
        임시 로그아웃 버튼
      </Button>
      <Link className="block" href="/login">
        로그인 페이지로
      </Link>
      <Link className="block" href="/signup">
        회원가입 페이지로
      </Link>
    </header>
  );
};

export default Header;
