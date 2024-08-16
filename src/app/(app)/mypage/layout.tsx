import { getMyActivityList } from "@api/MyActivityStatusApi";
import SideNavigation from "@app/components/SideNavigation/SideNavigation";
// "next/headers" 에서 제공하는 {cookies}를 사용하면, server-side에서 data-fetching을 하려고 할 때, browser에 저장된 쿠키값에 접근할 수 있는 것 같습니다.
import { cookies } from "next/headers";
import MyActivityListContextProvider from "@context/MyActivityListContext";

export default async function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // HTTP reqeust에 따라온 cookie에 접근하여 accessToken 값을 가져올 수 있습니다.
  const cookieStore = cookies();
  const authToken = cookieStore.get("accessToken")?.value;
  /**
   * 가져온 accessToken 값을 JWT Token인증이 필요한 api request를 보내는 함수에 전달해줍니다.
   * 이렇게 하면 server-side에서 data-fetch가 가능합니다.
   */
  const myActivityList = await getMyActivityList(authToken);

  return (
    <div className="flex-grow bg-gray-100 py-6 md:py-10 xl:py-[4.5rem]">
      <div className="container flex flex-1 flex-wrap gap-6">
        <div className="hidden w-full md:block md:w-4/12 xl:w-96">
          <SideNavigation></SideNavigation>
        </div>
        <MyActivityListContextProvider data={myActivityList}>
          <div className="min-w-0 flex-1">{children}</div>
        </MyActivityListContextProvider>
      </div>
    </div>
  );
}
