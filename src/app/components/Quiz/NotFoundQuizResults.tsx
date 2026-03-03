import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MdQuiz } from "react-icons/md";

const NotFoundQuizResults = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full text-center space-y-6 p-10 rounded-3xl border border-border bg-card shadow-xl"
      >
        <div className="flex justify-center text-6xl text-primary">
          <MdQuiz />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Quiz Result Not Found</h2>
          <p className="text-muted-foreground">
            It seems that quiz results are not available or you haven&apos;t
            completed this quiz yet.
          </p>
        </div>

        <button
          onClick={() => router.push("/quiz")}
          className="w-full p-3 cursor-pointer rounded-xl bg-linear-to-br from-neon-cyan to-neon-purple text-white font-semibold hover:scale-105 transition-transform"
        >
          Go To Quiz
        </button>
      </motion.div>
    </div>
  );
};

export default NotFoundQuizResults;
