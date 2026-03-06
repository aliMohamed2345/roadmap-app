"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCompass, FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="p-6 rounded-3xl bg-primary/10 border border-border">
            <FaCompass size={60} className="text-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">This roadmap doesn’t exist</h2>

          <p className="text-muted-foreground max-w-lg mx-auto">
            Looks like you took a wrong turn in your learning journey. The
            roadmap you&apos;re looking for may have been removed, renamed, or
            never existed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold hover:opacity-90 transition"
          >
            <FaHome />
            Go Home
          </Link>

          <Link
            href="/roadmap"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-muted transition"
          >
            <FaSearch />
            Browse Roadmaps
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-8 text-sm text-muted-foreground"
        >
          Every developer gets lost sometimes. Just pick another path 🚀
        </motion.div>
      </div>
    </div>
  );
}
