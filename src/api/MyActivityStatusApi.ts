import axios from "@api/axios";
import {
  DailyReservations,
  TScheduleReservationsStatus as dailyReservationsType,
  TScheduleReservations,
} from "@customTypes/MyActivityStatusType";
import { format } from "date-fns";

export async function getMyActivityList(authToken?: string) {
  let token = authToken;

  try {
    const response = await axios.get("/my-activities", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token if available
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching activity list:", error);
    throw error;
  }
}

export const getMonthlyReservations = async (
  selectedActivityId: string | undefined,
  year: string,
  month: string,
): Promise<DailyReservations[]> => {
  try {
    const response = await axios.get<DailyReservations[]>(
      `/my-activities/${selectedActivityId}/reservation-dashboard?year=${year}&month=${month}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly reservations status:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export const getDailyReservations = async (
  date: Date,
  selectedActivityId: string | undefined,
): Promise<dailyReservationsType[]> => {
  try {
    const response = await axios.get<dailyReservationsType[]>(
      `/my-activities/${selectedActivityId}/reserved-schedule?date=${format(date, "yyyy-MM-dd")}`,
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching daily reservations status:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export const getScheduleReservations = async (
  selectedActivityId: string | undefined,
  scheduleId: string | undefined,
  activeTab: string,
): Promise<TScheduleReservations> => {
  const response = await axios.get(
    `my-activities/${selectedActivityId}/reservations?size=10&scheduleId=${scheduleId}&status=${activeTab}`,
  );

  console.log(
    "$ getScheduleReservations ran 👉",
    "selectedAcitivtyId:",
    selectedActivityId,
    "scheduleId:",
    scheduleId,
    "activeTab:",
    activeTab,
  );

  return response.data;
};

export const updateScheduleReservationStatus = async (
  selectedActivityId: string,
  scheduleId: string | undefined,
  confirmOrDecline: string,
) => {
  const response = await axios.patch(
    `/my-activities/${selectedActivityId}/reservations/${scheduleId}`,
    {
      status: confirmOrDecline,
    },
  );

  console.log(response);
};
