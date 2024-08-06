import NavItem from "./NavItem";
import ProfileImage from "./ProfileImage";
import Account from "@icons/icon_account.svg";
import Setting from "@icons/icon_my_activities.svg";
import Calendar from "@icons/icon_my_activities_reservations.svg";
import Reservation from "@icons/icon_my_reservations.svg";

const navItems = [
  { href: "/mypage/me", label: "내 정보", icon: Account },
  { href: "/mypage/reservations", label: "예약내역", icon: Reservation },
  { href: "/mypage/activity-list", label: "내 체험 관리", icon: Setting },
  { href: "/mypage/activity-status", label: "예약현황", icon: Calendar },
];

const SideNavigation: React.FC = () => {
  return (
    <div className="shadow-[rgba(17, 34, 17, 0.05)] rounded-xl border border-gray-300 p-6 shadow-md">
      <div className="mb-6 flex flex-col items-center">
        <ProfileImage />
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;
