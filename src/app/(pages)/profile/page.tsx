"use client";

import { useState, useEffect } from "react";
import { FaCalendar, FaEnvelope } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { tabsTypesProps } from "@/app/types/quiz";
import Modal from "@/app/components/UI/Modal";
import EditProfileModal from "@/app/components/Profile/EditProfileModal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import ProfileDetailsLoading from "@/app/components/Profile/ProfileDetailsLoading";
import Image from "next/image";
import { convertDateToYear } from "@/app/helper";
import { GoShieldCheck } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import QuizProfileTab from "@/app/components/Profile/QuizProfileTab";
import RoadmapProfileTab from "@/app/components/Profile/RoadmapProfileTab";
import ProjectProfileTab from "@/app/components/Profile/ProjectProfileTab";
import { FaLock } from "react-icons/fa";
import ChangePasswordModal from "@/app/components/Profile/ChangePasswordModal";
import ProfileImageUploader from "@/app/components/Profile/ProfileImageUploader";
import { motion } from "framer-motion";
import { UserProps } from "@/app/types/api";
import UnauthorizedPage from "@/app/components/Auth/UnauthorizedPage";
function Page() {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.user,
  );
  const tabs: tabsTypesProps[] = ["Roadmaps", "Quizzes", "Projects"];
  const [profile, setProfile] = useState<UserProps | null>(null);
  const defaultImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);
  const [openChangePassword, setOpenChangePassword] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Quizzes");
  const [loading, setLoading] = useState(true);
  const [openImage, setOpenImage] = useState<boolean>(false);

  useEffect(() => {
    const loadingProfileData = async () => {
      try {
        if (user && isAuthenticated) {
          const res = await RoadmapApiAxiosInstance.get(
            apiRoutes.Users.getProfile.route,
          );
          if (res.data?.success) {
            setProfile(res.data.user);
          } else {
            toast.error(res.data?.message);
            console.log(res.data?.message);
          }
        }
      } finally {
        setLoading(false);
      }
    };
    loadingProfileData();
  }, [user, isAuthenticated]);
  if (!isAuthenticated) return <UnauthorizedPage  mode="authenticate"/>;
  if (loading) return <ProfileDetailsLoading />;
  return (
    <>
      <div className="pt-24 sm:px-6 pb-20 text-foreground space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-xl p-8">
          <div className="absolute inset-0 opacity-20 bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink" />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <ProfileImageUploader
              setProfile={setProfile}
              setOpenImage={setOpenImage}
              initialImage={defaultImage}
            />

            <div className="flex-1 text-center md:text-left space-y-3">
              <h1 className="text-4xl font-bold tracking-tight">
                {profile?.username || "John Doe"}
              </h1>

              <p className="text-muted-foreground">
                @{profile?.username || "johndoe"}
              </p>

              <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
                {profile?.bio || "No bio yet"}
              </p>
              <span className="text-muted-foreground flex items-center gap-1 justify-center sm:justify-start text-sm">
                {profile?.isAdmin ? (
                  <>
                    <GoShieldCheck className="text-primary" /> Admin
                  </>
                ) : (
                  <>
                    <FaUser className="text-primary" /> User
                  </>
                )}
              </span>

              <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <IoBookOutline className="text-primary" />
                  Member since{" "}
                  {convertDateToYear(profile?.createdAt || new Date())}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-col sm:flex-row ">
              <button
                onClick={() => setOpenChangePassword(true)}
                className="flex items-center gap-2 rounded-2xl border border-border bg-muted cursor-pointer backdrop-blur px-5 py-2.5 text-sm hover:bg-neon-red hover:text-white transition-all shadow-sm"
              >
                <FaLock />
                Change Password
              </button>
              <button
                onClick={() => setOpenEditProfile(true)}
                className="flex items-center gap-2 rounded-2xl border border-border bg-muted cursor-pointer backdrop-blur px-5 py-2.5 text-sm hover:bg-neon-purple hover:text-white transition-all shadow-sm"
              >
                <FiEdit />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 shadow-lg space-y-5 hover:shadow-xl transition">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              Personal Info
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-muted/60 p-4 hover:border-primary transition">
                <FaEnvelope className="text-primary text-lg shrink-0" />

                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">{profile?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-muted/60 p-4 hover:border-primary transition">
                <FaCalendar className="text-primary text-lg shrink-0" />

                <div>
                  <p className="text-xs text-muted-foreground">Birth Date</p>
                  <p className="font-medium text-sm">
                    {profile?.createdAt &&
                      new Date(profile.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-2 rounded-2xl border border-border bg-card/80 backdrop-blur p-2 text-sm shadow-sm">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-xl cursor-pointer py-2.5 transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-muted font-semibold shadow-sm"
                      : "text-muted-foreground hover:bg-muted/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 space-y-5 shadow-lg">
              {activeTab === "Quizzes" && (
                <QuizProfileTab quiz={profile?.progressData?.quiz || []} />
              )}
              {activeTab === "Roadmaps" && (
                <RoadmapProfileTab
                  roadmap={profile?.progressData?.roadmap || []}
                />
              )}
              {activeTab === "Projects" && (
                <ProjectProfileTab
                  project={profile?.progressData?.project || []}
                />
              )}
            </div>
          </div>
          {openEditProfile && (
            <Modal
              isOpen={openEditProfile}
              onClose={() => setOpenEditProfile(false)}
              title="Edit Profile"
            >
              <EditProfileModal
                setEditProfile={setOpenEditProfile}
                profile={profile!}
              />
            </Modal>
          )}
          {openChangePassword && (
            <Modal
              isOpen={openChangePassword!}
              onClose={() => setOpenChangePassword(false)}
              title="Change Password"
            >
              <ChangePasswordModal setChangePassword={setOpenChangePassword} />
            </Modal>
          )}
        </div>
      </div>
      {openImage && (
        <motion.div
          onClick={() => setOpenImage(false)}
          className="fixed inset-0 w-full h-full bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-full max-h-full"
          >
            <Image
              className="rounded-lg object-contain shadow-lg cursor-pointer max-w-full max-h-[90vh]"
              alt={profile?.username || "Profile Picture"}
              src={profile?.imageURL || defaultImage}
              width={1000}
              height={1000}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Page;
