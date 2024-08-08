import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { useAuth } from "@context/AuthContext";

const instance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/6-12",
  withCredentials: false,
});

export default instance;

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshToken");

        if (!refreshToken) {
          throw new Error("No refresh token available.");
        }

        const response = await instance.post<{
          accessToken: string;
          refreshToken: string;
        }>("/auth/tokens", {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", newRefreshToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }

        return instance(originalRequest);
      } catch (error) {
        console.error("Failed to refresh token:", error);
        throw error;
      }
    }

    return Promise.reject(error);
  },
);
