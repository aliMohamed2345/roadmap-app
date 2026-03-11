"use client";
import { motion, AnimatePresence } from "framer-motion";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { ProfileWindowProps } from "@/app/types/UI";
import React, { useState } from "react";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "@/app/redux/Slices/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ProfileWindow = ({
  setOpenProfile,
  openProfile,
  user,
}: ProfileWindowProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoading(true);
    try {
      const res = await RoadmapApiAxiosInstance.post(
        apiRoutes.Auth.logout.route,
        {},
      );
      if (!res.data.success) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        dispatch(logout());
        router.push("/");
      }
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message: string }>;
      toast.error(axiosError.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
      setOpenProfile(false);
    }
  };
  return (
    <div className="relative cursor-pointer">
      <Image
        onClick={() => setOpenProfile((prev) => !prev)}
        src={
          user?.imageURL ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt={user?.username || "User"}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full border-2 border-primary/60 shadow-sm object-cover cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-md"
      />

      <AnimatePresence>
        {openProfile && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-48 rounded-xl border border-border bg-popover/95 backdrop-blur-md shadow-xl z-50 overflow-hidden"
          >
            <ul className="flex flex-col text-sm">
              <li>
                <Link
                  href="/profile"
                  onClick={() => setOpenProfile(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-popover-foreground hover:bg-muted transition-all duration-200 group"
                >
                  <FaRegUser className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">View Profile</span>
                </Link>
              </li>

              <div className="h-px bg-border mx-2" />

              <li>
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="w-full flex cursor-pointer items-center gap-3 px-4 py-3 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all duration-200 group"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters
                      className="animate-spin"
                      size={18}
                    />
                  ) : (
                    <LuLogOut />
                  )}
                  <span className="font-medium">Logout</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileWindow;
