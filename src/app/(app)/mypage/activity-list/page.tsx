"use client";

import { useContext } from "react";
import { deleteMyActivity } from "@api/myActivites";
import Button from "@app/components/Button/Button";
import { MyActivityType } from "@customTypes/MyActivityStatusType";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import Image from "next/image";
import EmptyState from "@components/EmptyState/EmptyState";
import MyActivity from "./MyActivity";
import { MyActivityListContext } from "@context/MyActivityListContext";
import Empty from "@icons/icon_empty.svg";

export default function ActivityList() {
  const queryClient = useQueryClient();
  const context = useContext(MyActivityListContext);

  if (!context) {
    throw new Error(
      "MyActivityListContext이 컨텍스트가 올바르게 제공되지 않습니다.",
    );
  }

  const { myActivityList, setMyActivityList } = context;

  const mutation = useMutation<
    void,
    Error,
    number,
    { previousData: MyActivityType[] }
  >({
    mutationFn: deleteMyActivity,
    onMutate: async (activityId: number) => {
      await queryClient.cancelQueries({ queryKey: ["myActivityList"] });
      const previousData = queryClient.getQueryData<MyActivityType[]>([
        "myActivityList",
      ]);

      setMyActivityList((prev) =>
        prev.filter((activity) => activity.id !== activityId),
      );

      return { previousData: previousData || [] };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        setMyActivityList(context.previousData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myActivityList"] });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-primary">내 체험 관리</h2>
        <Button size={"sm"} color={"dark"} className={""}>
          체험 등록하기
        </Button>
      </div>
      {myActivityList.length > 0 ? (
        <ul className="flex flex-col gap-4 xl:gap-6">
          {myActivityList.map((myActivity) => (
            <MyActivity
              key={myActivity.id}
              {...myActivity}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <EmptyState>아직 등록한 체험이 없어요</EmptyState>
      )}
    </div>
  );
}
