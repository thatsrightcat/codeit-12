"use client";

import DropDownSection from "@app/(app)/mypage/activity-status/DropDownSection";
import dynamic from "next/dynamic";

// Dynamically import the Calendar component with SSR disabled
const CalendarSection = dynamic(() => import("./CalendarSection"), {
  ssr: false,
});

export default function MyActivityStatusPage() {
  return (
    <div>
      <DropDownSection />
      <CalendarSection />
    </div>
  );
}
