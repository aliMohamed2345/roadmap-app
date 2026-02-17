"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import AuthSubmitButton from "./AuthSubmitButton";

const AuthWindow = () => {
  const [currentTab, setCurrentTab] = useState<"signup" | "signin">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleTabChange = (tab: "signup" | "signin") => {
    setCurrentTab(tab);
    setEmail("");
    setPassword("");
    setUsername("");
  };
  const handleSignUp = () => {
    console.log({ password, email, username });
  };
  const handleSignIn = () => {
    console.log({ password, email });
  };

  return (
    <div className="relative w-105 max-w-[90vw] rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl p-6 overflow-hidden h-125 flex flex-col justify-center gap-3">
      <div className="relative grid grid-cols-2 bg-muted p-1 rounded-xl mb-6">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-background shadow ${
            currentTab === "signup" ? "left-1/2" : "left-1"
          }`}
        />

        <button
          onClick={() => handleTabChange("signin")}
          className="relative z-10 py-2 text-sm font-semibold cursor-pointer"
        >
          Sign In
        </button>

        <button
          onClick={() => handleTabChange("signup")}
          className="relative z-10 py-2 text-sm font-semibold cursor-pointer"
        >
          Sign Up
        </button>
      </div>

      <AnimatePresence mode="wait">
        {currentTab === "signin" ? (
          <motion.div
            key="signin"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <AuthHeader
              title="Welcome Back"
              subtitle="Sign in to continue your learning journey"
            />

            <AuthInput
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={setEmail}
            />

            <AuthInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={setPassword}
              type="password"
            />

            <AuthSubmitButton onHandleSubmit={handleSignIn} text="Sign In" />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <AuthHeader title="Create Account" subtitle="Join Learn Path" />

            <AuthInput
              label="Username"
              placeholder="johndoe"
              value={username}
              onChange={setUsername}
            />

            <AuthInput
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={setEmail}
            />

            <AuthInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={setPassword}
              type="password"
            />

            <AuthSubmitButton
              onHandleSubmit={handleSignUp}
              text="Create Account"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthWindow;
