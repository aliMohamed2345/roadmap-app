"use client";
import { useState } from "react";
import { IoShieldOutline } from "react-icons/io5";
import { adminTypeProps } from "@/app/types/admin";
import RoadmapsTab from "@/app/components/Admin/RoadmapsTab";
import QuizzesTab from "@/app/components/Admin/QuizzesTab";
import UsersTab from "@/app/components/Admin/UsersTab";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import UnauthorizedPage from "@/app/components/Auth/UnauthorizedPage";
import ProjectsTab from "@/app/components/Admin/ProjectsTab";
import AdminTabs from "@/app/components/Admin/AdminTabs";
const Page = () => {
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.user,
  );
  const [currentTab, setCurrentTab] = useState<adminTypeProps>("roadmaps");
  if (!isAuthenticated || !user?.isAdmin)
    return <UnauthorizedPage mode="admin" />;
  if (loading) return <div>Loading...</div>;
  return (
    <div className="pt-20 mx-auto px-2 container">
      <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
        <IoShieldOutline
          size={70}
          className=" rounded-xl text-white bg-linear-to-br from-neon-cyan to-neon-purple p-2"
        />
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h1 className="text-lg sm:text-3xl font-bold">Admin Panel</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Manage roadmaps, quizzes, users, and more
          </p>
        </div>
      </div>
      <AdminTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "roadmaps" && <RoadmapsTab />}
      {currentTab === "quizzes" && <QuizzesTab />}
      {currentTab === "users" && <UsersTab />}
      {currentTab === "projects" && <ProjectsTab />}
    </div>
  );
};

export default Page;
