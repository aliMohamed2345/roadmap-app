"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { changePasswordProps } from "@/app/types/api";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { validateChangePassword } from "@/app/validators";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { FiEdit } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const ChangePasswordModal = ({
  setChangePassword,
}: {
  setChangePassword: Dispatch<SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [changePasswordData, setChangePasswordData] =
    useState<changePasswordProps>({
      confirmPassword: "",
      currentPassword: "",
      password: "",
    });
  const handleEditProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const validatorError = validateChangePassword(
        changePasswordData.password,
        changePasswordData?.confirmPassword,
        changePasswordData?.currentPassword,
      );
      if (validatorError) {
        setError(validatorError);
        setLoading(false);
        return;
      }

      const res = await RoadmapApiAxiosInstance.put(
        apiRoutes.Users.changePassword.route,
        changePasswordData,
      );

      if (res.data?.success) {
        setChangePasswordData((prev) =>
          prev
            ? { ...prev, ...changePasswordData }
            : ({ ...changePasswordData } as changePasswordProps),
        );
        toast.success("Password changed successfully");
        setChangePassword(false);
      } else {
        setError(res.data?.message || "Something went wrong");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      setError(axiosError.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6 py-2">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground flex items-center gap-2">
            Old Password
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="text"
              value={changePasswordData.currentPassword}
              onChange={(e) =>
                setChangePasswordData((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
              placeholder="Enter Old Password"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">New Password</label>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="text"
              value={changePasswordData.password}
              onChange={(e) =>
                setChangePasswordData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="Enter New Password"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">
          Confirm Password
        </label>

        <div className="rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
          <input
            className="w-full bg-transparent outline-none text-sm"
            type="text"
            value={changePasswordData?.confirmPassword}
            onChange={(e) =>
              setChangePasswordData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            placeholder="Enter Confirm Password"
          />
        </div>
      </div>
      {error && <p className="text-sm text-destructive text-center">{error}</p>}
      <button
        onClick={handleEditProfile}
        className="p-2 rounded-xl bg-primary/70 hover:bg-primary transition-all cursor-pointer mx-auto mt-5 w-full max-w-2xl flex items-center gap-2 justify-center font-bold text-white"
      >
        {loading ? (
          <>
            <AiOutlineLoading3Quarters
              className="animate-spin text-white"
              size={20}
            />
            Loading
          </>
        ) : (
          <>
            <FiEdit /> Edit Profile
          </>
        )}
      </button>
    </div>
  );
};

export default ChangePasswordModal;
