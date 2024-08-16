"use client";

import { useState } from "react";
import DropDownInput from "@app/components/Input/DropDownInput";
import useMyActivityList from "@hooks/useMyActivityList";

export default function DropDownSection() {
  // useMyActivityList() hook으로부터 myActivityList와 handleMyActivitySelect를 가져옵니다.
  const { myActivityList, handleMyActivitySelect, selectedActivity } =
    useMyActivityList();

  // dropdownOptions을 설정해줍니다.
  const dropdownOptions = myActivityList.map((myActivity) => myActivity.title);

  // dropDownOptions중에 선택된 option의 activityId를 알아냅니다.
  const findSelectedActivityId = (selectedActivity: string | undefined) => {
    const selectedActivityInfo = myActivityList?.find(
      (myActivity) => myActivity.title === selectedActivity,
    );
    const selectedActivityId = selectedActivityInfo?.id;
    return selectedActivityId?.toString();
  };

  /**
   * DropDownInput의 onChange Prop에 전달할 function을 생성합니다.
   * 사용자가 activity를 선택하면 선택된 activity의 id정보를 MyActivityContext에 전달하는 함수입니다.
   * 전달된 정보는 Calendar Section에서 사용됩니다.
   */
  const handleActivitySelect = async (selectedActivity: string | undefined) => {
    const selectedActivityId = findSelectedActivityId(selectedActivity);
    handleMyActivitySelect(selectedActivity, selectedActivityId);
  };

  return (
    <DropDownInput
      setInitialValue
      onChange={handleActivitySelect}
      dropDownOptions={dropdownOptions}
      value={selectedActivity}
      inputLable="체험명"
      placeholder="place holder"
    />
  );
}
