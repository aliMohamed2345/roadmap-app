"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateUser } from "@/app/redux/Slices/userSlice";
import { ProfileImageUploaderProps } from "@/app/types/UI";
const ProfileImageUploader = ({
  initialImage,
  setOpenImage,
  alt,
  setProfile,
}: ProfileImageUploaderProps) => {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState<string>(initialImage || "");
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", file);

        const res = await RoadmapApiAxiosInstance.put(
          apiRoutes.Users.uploadImage.route,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } },
        );

        if (res.data?.success) {
          setImageSrc(res.data.imageURL);
          setProfile((prev) =>
            prev ? { ...prev, imageURL: res.data.imageURL } : prev,
          );
          dispatch(updateUser({ imageURL: res.data.imageURL }));
          toast.success("Image uploaded successfully");
        } else {
          toast.error(res.data?.message || "Failed to upload image");
        }
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error(axiosError.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDeleteImage = async () => {
    try {
      setLoading(true);
      const res = await RoadmapApiAxiosInstance.delete(
        apiRoutes.Users.deleteImage.route,
      );

      if (res?.data?.success) {
        toast.success(res.data.message || "Image deleted successfully");
        setImageSrc(initialImage || "");
        setProfile((prev) => (prev ? { ...prev, imageURL: "" } : prev));
      } else {
        toast.error(res.data?.message || "Failed to delete image");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 relative">
        <Image
          onClick={() => setOpenImage(true)}
          className="h-32 w-32 rounded-full object-cover shadow-md cursor-pointer"
          alt={alt || "Profile Picture"}
          src={imageSrc}
          width={128}
          height={128}
        />

        {imageSrc === initialImage ? (
          <label className="absolute cursor-pointer right-2 bottom-2 bg-primary/80 hover:bg-primary transition-all text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            {loading ? (
              <AiOutlineLoading3Quarters
                className="animate-spin text-white "
                size={22}
              />
            ) : (
              <FiPlus size={18} />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <button
            onClick={handleDeleteImage}
            className="absolute right-2 bottom-2 bg-destructive/80 hover:bg-destructive transition-all text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer"
          >
            {loading ? (
              <AiOutlineLoading3Quarters
                className="animate-spin text-white "
                size={22}
              />
            ) : (
              <FiTrash2 size={18} />
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileImageUploader;
