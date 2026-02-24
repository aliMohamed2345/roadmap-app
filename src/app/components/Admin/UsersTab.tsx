"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import { motion } from "framer-motion";
import UserActions from "./UserActions";
import { users } from "@/app/data";
import { containerVariants, rowVariants } from "@/app/types/variants";

const UsersTable = ({ search }: { search: string }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  return filteredUsers;
};
const UsersTab = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const users = UsersTable({ search: searchQuery });
  return (
    <div className="p-3 rounded-xl bg-card border border-border my-20">
      <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
        <h4 className="text-lg sm:text-2xl font-bold">All Users (7)</h4>
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="relative">
            <input
              placeholder="Search users..."
              className="bg-muted rounded-lg border border-border p-2 pl-5 w-50 max-w-lg sm:w-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-1 top-1/2 -translate-y-1/2 text-muted-foreground">
              <IoSearch />
            </span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="p-2 sm:p-2 text-sm sm:text-base font-bold rounded-lg group cursor-pointer bg-muted/20 hover:bg-muted transition-all border border-border flex items-center gap-3"
          >
            <TbRefresh className="group-hover:rotate-180 duration-300 transition-all" />{" "}
            Refresh
          </button>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-6 w-full overflow-x-auto"
      >
        <div className="min-w-225 w-full">
          <div className="grid grid-cols-6 text-sm font-semibold text-muted-foreground border-b border-border pb-3 px-3">
            <span>User</span>
            <span className="hidden sm:block">Email</span>
            <span>Role</span>
            <span>Status</span>
            <span className="hidden md:block">Joined</span>
            <span className="text-right">Actions</span>
          </div>

          {users.map((user) => (
            <motion.div
              key={user.id}
              variants={rowVariants}
              className="grid grid-cols-6 items-center px-3 py-4 border-b border-border text-sm bg-card hover:bg-muted/40 transition-all"
            >
              {/* User */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0">
                  {user.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="font-medium truncate">{user.name}</span>
              </div>

              <span className="text-muted-foreground truncate hidden sm:block">
                {user.email}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold w-fit
          ${
            user.role === "admin"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
              >
                {user.role}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold w-fit
          ${
            user.status === "active"
              ? "bg-chart-5/20 text-chart-5"
              : "bg-destructive text-destructive-foreground"
          }`}
              >
                {user.status}
              </span>

              <span className="text-muted-foreground hidden md:block">
                {user.joined}
              </span>

              <div className="flex justify-end">
                <UserActions />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UsersTab;
