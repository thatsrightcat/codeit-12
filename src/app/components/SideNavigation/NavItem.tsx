"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  hoverClassName?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  icon,
  onClick,
  className,
  activeClassName,
  hoverClassName,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li onClick={onClick}>
      <Link
        href={href}
        className={`flex items-center ${
          isActive
            ? `${activeClassName} opacity-100`
            : `opacity-50 ${hoverClassName} hover:opacity-100`
        } ${className}`}
      >
        {icon && <Image src={icon} alt={label} width={24} height={24} />}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;
