export type MyActivitiesResponseType = {
  cursorId: number;
  totalCount: number;
  activities: MyActivityType[];
};

export type MyActivityType = {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
};

export type MyActivityResponseType = {
  activities: MyActivityType[];
  totalCount: number;
  cursorId: null | number;
};

export type DailyReservations = {
  date: string;
  reservations: {
    completed: number;
    confirmed: number;
    pending: number;
  };
};

export type TScheduleReservationsStatus = {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: {
    declined: number;
    confirmed: number;
    pending: number;
  };
};

export type TScheduleReservation = {
  id: number;
  status: string;
  totalPrice: number;
  headCount: number;
  nickname: string;
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  activityId: number;
  scheduleId: number;
  reviewSubmitted: boolean;
  teamId: boolean;
};

export type TScheduleReservations = {
  reservations: TScheduleReservation[];
  totalCount: number;
  cursorId: null;
};

export type ScheduleReservationsListPropType = {
  scheduleReservations: TScheduleReservations | undefined;
};
