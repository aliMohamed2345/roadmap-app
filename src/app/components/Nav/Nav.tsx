"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MainTitle from "../Home/MainTitle";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import RenderAuthArea from "./RenderAuthArea";

const Nav = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.user,
  );

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const path = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-border fixed w-full z-10 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-3">
              <MainTitle />
            </div>
          </div>

          <div className="hidden md:block font-bold">
            <div className="flex items-center gap-5">
              <Link
                href="/roadmap"
                className={`hover:bg-background p-2 transition rounded-md ${
                  path.includes("roadmap") && "text-green bg-background"
                }`}
              >
                Roadmaps
              </Link>
              <Link
                href="/quiz"
                className={`hover:bg-background p-2 transition rounded-md ${
                  path.includes("quiz") && "text-green bg-background"
                }`}
              >
                Quizzes
              </Link>
              <Link
                href="/project"
                className={`hover:bg-background p-2 transition rounded-md ${
                  path.includes("project") && "text-green bg-background"
                }`}
              >
                Projects
              </Link>
              {user?.isAdmin && (
                <Link
                  href="/admin"
                  className={`hover:bg-background p-2 transition rounded-md ${
                    path.includes("admin") && "text-green bg-background"
                  }`}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="cursor-pointer flex items-center">
            {
              <RenderAuthArea
                dropdownRef={dropdownRef}
                isAuthenticated={isAuthenticated}
                loading={loading}
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
                user={user!}
              />
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
