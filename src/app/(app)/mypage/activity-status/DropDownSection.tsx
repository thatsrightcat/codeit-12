"use client";

import DropDownInput from "@app/components/Input/DropDownInput";
import useMyActivityList from "@hooks/useMyActivityList";

export default function DropDownSection() {
  // useMyActivityList() hook으로부터 myActivityList와 handleMyActivitySelect를 가져옵니다.
  const { myActivityList, handleMyActivitySelect } = useMyActivityList();

  // dropdownOptions을 설정해줍니다.
  const dropdownOptions = myActivityList.map((myActivity) => myActivity.title);

  // dropDownOptions중에 선택된 option의 activityId를 알아냅니다.
  const findSelectedActivityId = (selectedActivity: string) => {
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
  const setSelectedActivityId = async (selectedActivity: string) => {
    const selectedActivityId = findSelectedActivityId(selectedActivity);
    handleMyActivitySelect(selectedActivityId as string);
  };

  return (
    <DropDownInput
      onChange={setSelectedActivityId}
      dropDownOptions={dropdownOptions}
      placeholder="체험을 선택해 주세요"
    />
  );
}
