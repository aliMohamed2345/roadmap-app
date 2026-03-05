"use client";
import { useState } from "react";
import { IoShieldOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { adminTabs } from "@/app/data";
import { adminTypeProps } from "@/app/types/admin";
import RoadmapsTab from "@/app/components/Admin/RoadmapsTab";
import QuizzesTab from "@/app/components/Admin/QuizzesTab";
import UsersTab from "@/app/components/Admin/UsersTab";
const Page = () => {
  const [currentTab, setCurrentTab] = useState<adminTypeProps>("quizzes");
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
      <div className="relative flex w-full max-w-xl mx-auto mt-10 rounded-2xl border border-border bg-card/80 backdrop-blur-md p-1 px-2 shadow-sm">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-1 bottom-1 rounded-xl bg-muted shadow-sm"
          style={{
            width: `calc(100% / ${adminTabs.length})`,
            left: `${
              (adminTabs.findIndex((t) => t.id === currentTab) * 100) /
              adminTabs.length
            }%`,
          }}
        />

        {adminTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id as adminTypeProps)}
              className={`relative z-10 flex-1 flex items-center text-xs sm:text-base cursor-pointer justify-center gap-2 rounded-xl py-2.5  font-medium transition-all duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon
                size={18}
                className={`transition-all duration-300 ${
                  isActive ? "text-primary scale-110" : ""
                }`}
              />
              {tab.label}
            </button>
          );
        })}
      </div>
      {currentTab === "roadmaps" && <RoadmapsTab />}
      {currentTab === "quizzes" && <QuizzesTab />}
      {currentTab === "users" && <UsersTab />}
    </div>
  );
};

export default Page;
