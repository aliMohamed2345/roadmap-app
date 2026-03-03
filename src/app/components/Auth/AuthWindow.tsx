"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import AuthSubmitButton from "./AuthSubmitButton";
import {
  validateSignInCredentials,
  validateSignUpCredentials,
} from "@/app/validators";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/Slices/userSlice";

const AuthWindow = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState<"signup" | "signin">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleTabChange = (tab: "signup" | "signin") => {
    setCurrentTab(tab);
    setEmail("");
    setPassword("");
    setUsername("");
    setError("");
  };
  const handleSignUp = async () => {
    const validatorError = validateSignUpCredentials(username, email, password);
    if (validatorError) {
      setError(validatorError);
      setLoading(false);
      return;
    }
    setLoading(true);

    try {
      const res = await RoadmapApiAxiosInstance.post(
        apiRoutes.Auth.signup.route,
        { username, email, password },
      );

      if (!res.data.success) {
        setError(res.data.message);
      } else {
        dispatch(setUser(res.data.user));
        router.push("/");
      }
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message: string }>;

      setError(axiosError.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    const validatorError = validateSignInCredentials(email, password);
    if (validatorError) {
      setError(validatorError);
      setLoading(false);
      return;
    }
    setLoading(true);

    try {
      const res = await RoadmapApiAxiosInstance.post(
        apiRoutes.Auth.login.route,
        { email, password },
      );

      if (!res.data.success) {
        setError(res.data.message);
      } else {
        dispatch(setUser(res.data.user));
        router.push("/");
      }
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message: string }>;

      setError(axiosError.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-105 max-w-[90vw] rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl p-6 overflow-hidden h-135 flex flex-col justify-center gap-3">
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
            {error && (
              <p
                className={`text-destructive text-center ${error ? "opacity-100" : "opacity-0"}`}
              >
                {error}
              </p>
            )}
            <AuthSubmitButton
              loading={loading}
              onHandleSubmit={handleSignIn}
              text="Sign In"
            />
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
            {error && (
              <p
                className={`text-destructive text-center ${error ? "opacity-100" : "opacity-0"}`}
              >
                {error}
              </p>
            )}

            <AuthSubmitButton
              loading={loading}
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
