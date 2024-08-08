"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getMonthlyReservationsStatus } from "@api/MyActivity-Status";
import { DailyReservationsStatus } from "@customTypes/MyActivity-Status";
import { useQuery } from "@tanstack/react-query";
import "./Calendar.css";
import useMyActivityList from "@hooks/useMyActivityList";

export default function CalendarSection() {
  const [year, setYear] = useState<string>(new Date().getFullYear().toString());
  const [month, setMonth] = useState<string>(
    (new Date().getMonth() + 1).toString().padStart(2, "0"),
  );
  const { selectedActivityId, myActivityList } = useMyActivityList();

  // Define the fetch function with parameters
  const fetchReservations = async (
    selectedActivityId: string,
    year: string,
    month: string,
  ): Promise<DailyReservationsStatus[]> => {
    if (selectedActivityId && year && month) {
      return await getMonthlyReservationsStatus(
        selectedActivityId,
        year,
        month,
      );
    }
    return []; // Return an empty array if dependencies are not available
  };
  console.log(selectedActivityId);

  // Use useQuery with a function that accepts parameters
  const { data, error, isLoading } = useQuery<DailyReservationsStatus[]>({
    queryKey: ["MonthlyReservations", selectedActivityId, year, month],
    queryFn: () => fetchReservations(selectedActivityId, year, month), // Pass parameters to the fetch function
    // Optionally add staleTime, cacheTime, etc. based on your needs
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <Calendar />
      {data?.map((data) => (
        <div key={data.date} className="flex gap-1">
          <div>{data.date}</div>
          <div>completed: {data.reservations.completed}</div>
          <div>confirmed: {data.reservations.confirmed}</div>
          <div>pending: {data.reservations.pending}</div>
        </div>
      ))}
    </>
  );
}
