"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`flex min-h-11 items-center gap-[0.875rem] rounded-xl px-4 py-2 text-lg font-semibold text-primary ${isActive ? "bg-[#CED8D5] opacity-100" : "opacity-40 hover:bg-[#CED8D5] hover:opacity-100"}`}
      >
        {icon && <Image src={icon} alt={label} width={24} height={24} />}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;
