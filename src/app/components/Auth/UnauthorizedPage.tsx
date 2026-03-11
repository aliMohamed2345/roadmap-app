"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  UnAuthorizedItemVariants,
  floatingOrbs,
  unAuthorizedContainerVariants,
} from "@/app/types/variants";
import { FaLock } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
export default function UnauthorizedPage({
  mode,
}: {
  mode: "admin" | "authenticate";
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgb(0,255,255) 1px, transparent 1px), linear-gradient(90deg, rgb(0,255,255) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.color} ${orb.pos} rounded-full opacity-[0.12] blur-[100px] pointer-events-none`}
          animate={{ scale: [1, 1.12, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-px h-full opacity-10"
          style={{
            left: "38%",
            background:
              "linear-gradient(to bottom, transparent, rgb(0,255,255), rgb(166,77,255), transparent)",
            transform: "rotate(12deg) translateX(-50%)",
          }}
        />
      </div>

      <motion.div
        variants={unAuthorizedContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div
          className="rounded-3xl p-10 border border-border bg-card backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 0 1px rgba(0,255,255,0.06), 0 32px 64px rgba(0,0,0,0.1), 0 0 100px rgba(0,255,255,0.04)",
          }}
        >
          <motion.div
            variants={UnAuthorizedItemVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative flex items-center justify-center">
              {[1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border border-[rgb(0,255,255)]"
                  style={{ width: 56 + ring * 24, height: 56 + ring * 24 }}
                  animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: ring * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,255,0.15), rgba(166,77,255,0.15))",
                  border: "1px solid rgba(0,255,255,0.25)",
                  boxShadow: "0 0 32px rgba(0,255,255,0.2)",
                }}
              >
                <FaLock size={20} className={`text-primary`} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={UnAuthorizedItemVariants}
            className="flex justify-center mb-5"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[3px] uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "rgb(0,255,255)",
                background: "rgba(0,255,255,0.08)",
                border: "1px solid rgba(0,255,255,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              401 · Unauthorized
            </span>
          </motion.div>

          <motion.h1
            variants={UnAuthorizedItemVariants}
            className="text-center text-[2rem] font-extrabold leading-tight mb-3 text-foreground"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Access{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgb(0,255,255), rgb(166,77,255))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Restricted
            </span>
          </motion.h1>

          <motion.p
            variants={UnAuthorizedItemVariants}
            className="text-center text-sm leading-relaxed text-muted-foreground mb-8 px-2"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {mode === "authenticate"
              ? `You need to be signed in to access this page.`
              : `You need to be admin to access this page.`}
            Join thousands of developers already mapping their learning journey.
          </motion.p>

          <motion.div
            variants={UnAuthorizedItemVariants}
            className="w-full h-px mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-border), transparent)",
            }}
          />

          <motion.div
            variants={UnAuthorizedItemVariants}
            className="flex flex-col gap-3"
          >
            {mode === "authenticate" && (
              <Link href="/login">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-bold cursor-pointer"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    background:
                      "linear-gradient(135deg, rgb(0,255,255), rgb(0,210,210))",
                    color: "rgb(8,12,22)",
                    boxShadow:
                      "0 0 24px rgba(0,255,255,0.3), 0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <FiLogIn />
                  Login to Continue
                </motion.div>
              </Link>
            )}

            <Link href="/">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -1,
                  borderColor: "rgba(166,77,255,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold cursor-pointer border text-muted-foreground border-border hover:text-foreground transition-colors"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                <FaArrowLeft />
                Back to Home
              </motion.div>
            </Link>
          </motion.div>

          <motion.p
            variants={UnAuthorizedItemVariants}
            className="text-center mt-6 text-[10px] tracking-widest opacity-30 text-muted-foreground"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            roadmap.app · protected route
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
