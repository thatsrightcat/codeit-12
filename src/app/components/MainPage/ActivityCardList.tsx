"use client";

import ActivityCard from "./ActivityCard";
import useActivityList from "@hooks/useActivityList";

const ActivityCardList = () => {
  const { activities } = useActivityList();
  return activities.map((activity) => (
    <ActivityCard key={activity.id} cardData={activity} />
  ));
};

export default ActivityCardList;
