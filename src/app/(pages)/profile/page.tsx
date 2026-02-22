"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { tabsTypesProps } from "@/app/types/quiz";
import Modal from "@/app/components/UI/Modal";
import QuizTab from "@/app/components/Profile/QuizTab";
import LearningTab from "@/app/components/Profile/LearningTab";
import ProjectTab from "@/app/components/Profile/ProjectTab";
import { updateProfileProps } from "@/app/types/roadmap";
import EditProfileModal from "@/app/components/Profile/EditProfileModal";
import { personalInfoData } from "@/app/data";
// import ProfileDetailsLoading from "@/app/components/Profile/ProfileDetailsLoading";

function Page() {
  const tabs: tabsTypesProps[] = ["Quizzes", "Learning", "Projects"];
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Quizzes");
  const [updateProfile, setUpdateProfile] = useState<updateProfileProps>({
    username: "",
    bio: "",
    email: "",
    links: {
      github: "",
      linkedin: "",
      website: "",
    },
  });
  return (
    <div className="pt-24 px-6 pb-12 text-foreground space-y-8">
      {/* <ProfileDetailsLoading/> */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-xl p-8">
        <div className="absolute inset-0 opacity-20 bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink" />

        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <div className="h-32 w-32 rounded-2xl text-white bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center text-5xl font-bold shadow-lg">
              J
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>

            <p className="text-muted-foreground">@johndoe</p>

            <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
              Passionate full-stack developer focused on building clean,
              scalable, and beautiful digital experiences.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                San Francisco, CA
              </span>

              <span className="flex items-center gap-2">
                <IoBookOutline className="text-primary" />
                Member since January 2025
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => setOpenEditProfile((prev) => !prev)}
              className="flex items-center gap-2 rounded-2xl border border-border bg-muted cursor-pointer backdrop-blur px-5 py-2.5 text-sm hover:bg-neon-purple transition-all shadow-sm"
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
            {personalInfoData.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-muted/60 p-4 hover:border-primary transition"
                >
                  <Icon className="text-primary text-lg shrink-0" />

                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}
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
            {activeTab === "Quizzes" && <QuizTab />}
            {activeTab === "Learning" && <LearningTab />}
            {activeTab === "Projects" && <ProjectTab />}
          </div>
        </div>
        {openEditProfile && (
          <Modal
            isOpen={openEditProfile}
            onClose={() => setOpenEditProfile(false)}
            title="Edit Profile"
          >
            <EditProfileModal
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Page;
