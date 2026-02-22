"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { ModalProps } from "@/app/types/UI";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-2xl",
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={`relative w-full ${width} rounded-3xl border border-border bg-card p-6 shadow-2xl`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">{title}</h2>

              <button
                onClick={onClose}
                className="rounded-xl p-1.5 hover:bg-muted transition cursor-pointer"
              >
                <IoClose size={18} />
              </button>
            </div>

            <div className="space-y-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
