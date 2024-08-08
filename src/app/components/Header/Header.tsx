"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";
import Logo from "@icons/icon_logo_md.svg";

export default function Header() {
  return (
    <header className="h-[70px] border-b border-gray-300 bg-white">
      <div className="container flex h-full items-center justify-between">
        <h1>
          <Link href="/">
            <Image src={Logo} alt="글로벌 노마드" height={30} />
          </Link>
        </h1>
        <UserMenu />
      </div>
    </header>
  );
}
