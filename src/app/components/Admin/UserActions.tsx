"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { menuVariants } from "@/app/types/variants";

const UserActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-lg hover:bg-muted transition-all cursor-pointer"
      >
        <FiMoreHorizontal size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden"
          >
            <ul className="text-sm">
              <li className="flex items-center gap-3 px-4 py-3 hover:bg-muted cursor-pointer transition-all">
                <IoEyeOutline />
                View Profile
              </li>

              <li className="flex items-center gap-3 px-4 py-3 hover:bg-muted cursor-pointer transition-all">
                <MdModeEdit />
                Edit Profile
              </li>

              <li className="flex items-center gap-3 px-4 py-3 hover:bg-muted cursor-pointer transition-all">
                <GoShieldCheck />
                Toggle Role
              </li>

              <div className="h-px bg-border mx-2" />

              <li className="flex items-center gap-3 px-4 py-3 hover:bg-destructive/10 hover:text-destructive cursor-pointer transition-all text-destructive">
                <FaTrash />
                Delete User
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserActions;
