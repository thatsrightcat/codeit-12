"use client";

import Button from "@app/components/Button/Button";
import Link from "next/link";
import { useAuth } from "@context/AuthContext";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter()
  return (
    <header>
      <Link href="/">헤더영역 로고</Link>
      <Button color="dark" size="md" onClick={() => {logout(); router.push('/login') }}>
        임시 로그아웃 버튼
      </Button>
    </header>
  );
};

export default Header;
