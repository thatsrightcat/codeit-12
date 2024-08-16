"use client";

import dynamic from "next/dynamic";
import DropDownSection from "./components/DropDownSection";
import useMyActivityList from "@hooks/useMyActivityList";

// Dynamically import the Calendar component with SSR disabled
const CalendarSection = dynamic(() => import("./components/CalendarSection"), {
  ssr: false,
});

export default function MyActivityStatusPage() {
  const {
    data: { totalCount },
  } = useMyActivityList();

  return (
    <div>
      <h2 className="mb-10 text-3xl font-bold text-primary">에약 현황</h2>
      {totalCount == 0 ? (
        <div>아직 등록한 체험이 없어요</div>
      ) : (
        <>
          <DropDownSection />
          <CalendarSection />
        </>
      )}
    </div>
  );
}
