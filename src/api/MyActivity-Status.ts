import axios from "@api/axios";
import { DailyReservationsStatus } from "@customTypes/MyActivity-Status";

export async function getMyActivityList(authToken?: string) {
  let token = authToken;

  try {
    const response = await axios.get("/my-activities", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token if available
      },
    });
    return response.data.activities;
  } catch (error) {
    console.error("Error fetching activity list:", error);
    throw error;
  }
}

export const getMonthlyReservationsStatus = async (
  selectedActivityId: string,
  year: string,
  month: string,
): Promise<DailyReservationsStatus[]> => {
  try {
    const response = await axios.get<DailyReservationsStatus[]>(
      `/my-activities/${selectedActivityId}/reservation-dashboard?year=${year}&month=${month}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly reservations status:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
