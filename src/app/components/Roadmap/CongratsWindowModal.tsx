import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import Link from "next/link";
import { userProgressProps } from "@/app/types/api";

const CongratsWindowModule = ({
  userProgress,
}: {
  userProgress: userProgressProps;
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 py-4">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-6xl text-chart-4"
      >
        <FaTrophy />
      </motion.div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold">
          Congratulations! You finished{" "}
          {userProgress?.roadmap.title ?? "this roadmap"}
        </h3>

        <p className="text-muted-foreground text-sm">
          You have successfully completed all sections. Keep learning and
          challenge yourself with the next level.
        </p>
      </div>

      <div className="flex gap-3 pt-2">
        <Link
          href={`/roadmap`}
          className="px-5 py-2 rounded-xl bg-secondary hover:bg-primary hover:opacity-90 transition text-white"
        >
          Continue Learning
        </Link>
      </div>
    </div>
  );
};

export default CongratsWindowModule;
