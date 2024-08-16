"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "@api/axios";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  email: string;
  nickname?: string;
  profileImageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthContextType = AuthState & {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, nickname: string, password: string) => Promise<void>;
  isLoading: boolean;
};

type AuthProviderPropsType = {
  children: ReactNode;
};

type ErrorResponse = {
  message: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderPropsType) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const setIsAuthenticated = () => {
      const storedRefreshToken = Cookies.get("refreshToken");
      const storedAccessToken = Cookies.get("accessToken");
      if (storedRefreshToken && storedAccessToken) {
        setAuthState((prevState) => ({
          ...prevState,
          isAuthenticated: true,
        }));
      }
      setIsLoading(false);
    };
    setIsAuthenticated();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<{
        accessToken: string;
        refreshToken: string;
        user: User;
      }>("/auth/login", {
        email,
        password,
      });

      const { accessToken, refreshToken, user } = response.data;

      Cookies.set("refreshToken", refreshToken, { expires: 7 });
      Cookies.set("accessToken", accessToken);
      setAuthState({
        user,
        isAuthenticated: true,
      });

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage = axiosError.response?.data?.message;
      alert(errorMessage);
    }
  };

  const logout = () => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
    window.location.reload();
    router.push("/");
  };

  const signup = async (email: string, nickname: string, password: any) => {
    try {
      const response = await axios.post<{
        id: number;
        email: string;
        nickname: string;
        profileImageUrl: string | null;
        createdAt: string;
        updatedAt: string;
      }>("/users", {
        email,
        nickname,
        password,
      });
      if (response.status === 201) {
        alert("가입이 완료되었습니다");
        router.push("/login"); // 회원가입 성공 후 로그인 페이지로 이동
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage = axiosError.response?.data?.message;
      alert(errorMessage);
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, login, logout, signup, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
