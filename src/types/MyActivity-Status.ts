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

export type DailyReservationsStatus = {
  date: string;
  reservations: {
    completed: number;
    confirmed: number;
    pending: number;
  };
};