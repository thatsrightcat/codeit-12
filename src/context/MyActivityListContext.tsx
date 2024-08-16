"use client";

import { createContext, useEffect, useState } from "react";
import {
  MyActivityResponseType,
  MyActivityType,
} from "@customTypes/MyActivityStatusType";

export type MyActivityListContextType = {
  myActivityList: MyActivityType[] | [];
  setMyActivityList: React.Dispatch<React.SetStateAction<MyActivityType[]>>;
  handleMyActivitySelect: (
    selectedActivity: string | undefined,
    selectedActivityId: string | undefined,
  ) => void;
  selectedActivityId: string | undefined;
  selectedActivity: string | undefined;
  setSelectedActivity: React.Dispatch<React.SetStateAction<string | undefined>>;
  data: MyActivityResponseType;
};

export const MyActivityListContext =
  createContext<MyActivityListContextType | null>(null);

type MyActivityListProviderPropsType = {
  data: MyActivityResponseType;
  children: React.ReactNode;
};

export default function MyActivityListContextProvider({
  data,
  children,
}: MyActivityListProviderPropsType) {
  const [myActivityList, setMyActivityList] = useState<MyActivityType[] | []>(
    data.activities,
  );
  const [selectedActivityId, setSelectedActivityId] = useState(
    data.totalCount != 0 ? myActivityList[0].id.toString() : undefined,
  );
  const [selectedActivity, setSelectedActivity] = useState<string | undefined>(
    myActivityList.length > 0 ? myActivityList[0].title : "",
  );

  const handleMyActivitySelect = (
    selectedActivity: string | undefined,
    selectedActivityId: string | undefined,
  ) => {
    // 예약현황 페이지에서 선택된 activity title과 id를 MyActivityListContext 수준에서 관리하면
    // 이 context가 unmount되지 않는 범위에서만 페이지 이동을 한다면, 예약현황 페이지로 돌아왔을 때, 이 두 값들을 여전히 기억할 것입니다.
    setSelectedActivity(selectedActivity);
    setSelectedActivityId(selectedActivityId);
  };

  return (
    <MyActivityListContext.Provider
      value={{
        myActivityList,
        setMyActivityList,
        handleMyActivitySelect,
        selectedActivityId,
        selectedActivity,
        setSelectedActivity,
        data,
      }}
    >
      {children}
    </MyActivityListContext.Provider>
  );
}
