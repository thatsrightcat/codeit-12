import SideNavigation from "@app/components/SideNavigation/SideNavigation";

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container 2x flex flex-1 flex-wrap gap-6">
      <div className="w-full md:w-4/12 xl:w-96">
        <SideNavigation></SideNavigation>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
