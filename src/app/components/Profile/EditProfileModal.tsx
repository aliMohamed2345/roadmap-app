"use client";
import { apiRoutes } from "@/app/api/apiRoutes";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { updateProfileProps } from "@/app/types/roadmap";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { AxiosError } from "axios";
import { validateUpdateUserData } from "@/app/validators";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUser } from "@/app/redux/Slices/userSlice";
import { EditProfileModalProps } from "@/app/types/UI";
import { UsersProps } from "@/app/types/api";
const EditProfileModal = ({
  profile,
  setEditProfile,
  setUsersData,
}: EditProfileModalProps) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [updateProfile, setUpdateProfile] = useState<updateProfileProps>({
    username: profile?.username || "",
    bio: profile?.bio || "",
    email: profile?.email || "",
  });
  const handleEditProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const validatorError = validateUpdateUserData(
        updateProfile.username || "",
        updateProfile.email || "",
        updateProfile.bio || "",
      );
      if (validatorError) {
        setError(validatorError);
        setLoading(false);
        return;
      }

      const res = await RoadmapApiAxiosInstance.put(
        apiRoutes.Users.updateUserById.route(profile._id || ""),
        updateProfile,
      );

      if (res.data?.success) {
        setUsersData!((prev:UsersProps) => {
          if (!prev) return prev;

          return {
            ...prev,
            users: prev.users.map((user) =>
              user._id === profile._id ? { ...user, ...updateProfile } : user,
            ),
          };
        });
        dispatch(
          updateUser({
            username: updateProfile.username,
            email: updateProfile.email,
          }),
        );
        toast.success("Profile updated successfully");
        setEditProfile(false);
      } else {
        setError(res.data?.message || "Something went wrong");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      setError(axiosError.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6 py-2">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground flex items-center gap-2">
            User Name
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="text"
              value={updateProfile?.username}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              placeholder="Enter username"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Email</label>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="email"
              value={updateProfile?.email}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Bio</label>

        <div className="rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
          <input
            className="w-full bg-transparent outline-none text-sm"
            type="text"
            value={updateProfile?.bio}
            onChange={(e) =>
              setUpdateProfile((prev) => ({
                ...prev,
                bio: e.target.value,
              }))
            }
            placeholder="Tell something about yourself"
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

export default EditProfileModal;
