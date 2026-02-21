"use client";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MainTitle from "../Home/MainTitle";
import Theme from "./Theme";
const Nav = () => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const path = usePathname();
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="border-b border-border fixed w-full z-10 bg-muted ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-3 ">
              <MainTitle />
            </div>
          </div>

          <div className="hidden md:block font-bold">
            <div className="flex items-center gap-5" ref={dropdownRef}>
              <Link
                href={"/roadmap"}
                className={`hover:bg-background p-2 transition rounded-md  ${
                  path.includes(`roadmap`) && `text-green bg-background`
                }`}
              >
                Roadmaps
              </Link>
              <Link
                href={`/quiz`}
                className={`hover:bg-background p-2 transition rounded-md  ${
                  path.includes(`quiz`) && `text-green bg-background`
                }`}
              >
                Quizzes
              </Link>
              <Link
                href={`/project`}
                className={`hover:bg-background p-2 transition rounded-md  ${
                  path.includes(`project`) && `text-green bg-background`
                }`}
              >
                Projects
              </Link>
            </div>
          </div>

          <div className="gap-1 sm:gap-3 cursor-pointer flex items-center">
            <Theme />
            <Link
              href="/auth"
              className="text-white text-xs sm:text-lg md:text-xl bg-linear-to-br from-neon-cyan to-neon-purple p-2 rounded-lg hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
