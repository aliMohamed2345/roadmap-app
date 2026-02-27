"use client";
import { useMemo, useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { userProgressProps } from "@/app/types/api";

const ProgressCircle = ({
  userProgress,
}: {
  userProgress: userProgressProps;
}) => {
  const safeCompleted = Math.min(
    userProgress?.completed ?? 0,
    userProgress?.total ?? 0,
  );
  const safeTotal = userProgress?.total ?? 0;

  const percentage = useMemo(() => {
    if (!safeTotal) return 0;
    return Math.round((safeCompleted / safeTotal) * 100);
  }, [safeCompleted, safeTotal]);

  const progress = useMotionValue(0);
  const progressNumber = useTransform(progress, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(progress, percentage, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
    return () => controls.stop();
  }, [percentage, progress]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(
    progress,
    (v) => circumference - (v / 100) * circumference,
  );

  return (
    <div className="lg:col-span-1 flex flex-col gap-6 my-10">
      <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-md">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="transform -rotate-90" width="128" height="128">
            <circle
              cx="64"
              cy="64"
              r={radius}
              strokeWidth="10"
              className="stroke-muted"
              fill="transparent"
            />
            <motion.circle
              cx="64"
              cy="64"
              r={radius}
              strokeWidth="10"
              fill="transparent"
              stroke="url(#gradient)"
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
            />
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
            <motion.span>{progressNumber}</motion.span>%
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 text-center sm:text-left">
          Overall Progress
        </p>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            Sections Completed: {safeCompleted} / {safeTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
