"use client";

import React from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import NotificationMenu from "./NotificationMenu";
import UserProfile from "./UserProfile";
import { useAuth } from "@context/AuthContext";

export default function UserMenu() {
  const { isAuthenticated, logout, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative flex text-md font-medium text-primary">
      {isAuthenticated ? (
        <div className="flex items-center">
          <NotificationMenu />
          <span className="divider mx-3 h-5 bg-gray-300 md:mx-6"></span>
          <HamburgerMenu onLogout={handleLogout} />
          <UserProfile onLogout={handleLogout} />
        </div>
      ) : (
        <div className="flex gap-6">
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
          <Link href="/signup" className="hover:underline">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
}
