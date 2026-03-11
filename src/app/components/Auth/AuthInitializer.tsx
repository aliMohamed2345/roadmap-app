"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout, setLoading } from "@/app/redux/Slices/userSlice";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import { InternalAxiosRequestConfig } from "axios";

const AuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      dispatch(setLoading(true));
      try {
        const res = await RoadmapApiAxiosInstance.get(
          apiRoutes.Users.getProfile.route,
          { _silentAuth: true } as InternalAxiosRequestConfig & {
            _silentAuth?: boolean;
          },
        );
        dispatch(setUser(res.data.user));
      } catch {
        dispatch(logout());
      } finally {
        dispatch(setLoading(false));
      }
    };
    checkAuth();
  }, [dispatch]);

  return null;
};

export default AuthInitializer;
