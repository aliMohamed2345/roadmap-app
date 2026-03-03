"use client";

import { quizResultsProps } from "@/app/types/api";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaTrophy } from "react-icons/fa";
import { getGradeColor } from "@/app/helper";
import { MdQuiz } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const QuizResults = ({
  percentage,
  grade,
  correctAnswers,
  wrongAnswers,
  totalQuestions,
  status,
  answerDetails,
  quizTitle,
  quizId,
}: quizResultsProps) => {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const safePercentage = Math.min(100, Math.max(0, percentage || 0));
  const strokeDashoffset =
    circumference - (safePercentage / 100) * circumference;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const restartQuiz = async () => {
    try {
      setLoading(true);
      if (!quizId) return;

      localStorage.removeItem("questions");

      await RoadmapApiAxiosInstance.get(
        apiRoutes.Question.restartQuizAnswers.route(quizId),
      );

      router.push(`/quiz/${quizId}`);
    } catch (error) {
      console.error("Failed to restart quiz:", error);
      toast.error("Failed to restart the quiz. please try again");
    } finally {
      setLoading(false);
    }
  };
  const goToQuiz = () => {
    localStorage.removeItem("questions");
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen p-6 bg-background text-foreground pt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 shadow-2xl border bg-card border-border"
        >
          <h1 className="text-lg sm:text-3xl font-bold text-center mb-6">
            {quizTitle}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke="var(--color-muted)"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke="var(--color-primary)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1 }}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                {percentage}%
              </div>
            </div>

            <div className="text-center space-y-4">
              <div
                className={`flex items-center gap-3 justify-center px-8 py-3 rounded-full text-lg sm:text-3xl font-bold shadow-lg text-primary-foreground ${getGradeColor(grade)}`}
              >
                <FaTrophy />
                {grade}
              </div>
            </div>
          </div>
          <p
            className={`text-lg font-semibold p-1 rounded-lg text-center my-5 w-full max-w-xs mx-auto ${status === "Passed" ? `text-chart-5 bg-chart-5/20` : ` text-destructive bg-destructive/20`}`}
          >
            {status}
          </p>
          <p className="text-muted-foreground font-bold text-center">
            {" "}
            Your score
          </p>
          <div className="grid grid-cols-3 gap-6 mt-5 text-center">
            <div className="p-2 rounded-lg border border-border bg-background">
              <p className="text-sm opacity-70">Total</p>
              <p className="text-xl font-bold">{totalQuestions}</p>
            </div>
            <div className="p-2 rounded-lg border border-border bg-background">
              <p className="text-sm opacity-70">Correct</p>
              <p className="text-xl font-bold text-chart-5">{correctAnswers}</p>
            </div>
            <div className="p-2 rounded-lg border border-border bg-background">
              <p className="text-sm opacity-70">Wrong</p>
              <p className="text-xl font-bold text-destructive">
                {wrongAnswers}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between my-4 flex-col sm:flex-row gap-4">
            <button
              onClick={restartQuiz}
              className="bg-muted hover:scale-105 border border-border p-2 rounded-lg hover:bg-muted/80 transition-all cursor-pointer flex items-center gap-2 w-full justify-center"
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters
                    className="animate-spin text-white mx-auto"
                    size={22}
                  />
                </>
              ) : (
                <>
                  <VscDebugRestart />
                  Restart Quiz
                </>
              )}
            </button>
            <button
              onClick={goToQuiz}
              className="hover:scale-105 transition-all bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer flex items-center gap-2 p-2 rounded-lg w-full text-center justify-center"
            >
              <MdQuiz />
              Go To Quiz
            </button>
          </div>
        </motion.div>

        <div className="rounded-3xl p-8 shadow-xl border bg-card border-border my-20">
          <h2 className="text-2xl font-bold mb-8">Answer Review</h2>

          <div className="space-y-5">
            {answerDetails?.map((item, index) => (
              <motion.div
                key={item?.questionId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-muted/40 backdrop-blur-sm p-6 hover:shadow-lg transition-all duration-300 w-full text-center"
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1.5 rounded-l-3xl ${
                    item?.isCorrect ? "bg-chart-5" : "bg-destructive"
                  }`}
                />

                <div className="flex gap-4 flex-col sm:flex-row text-center sm:text-left items-center ">
                  <div className="mt-1">
                    {item?.isCorrect ? (
                      <FaCheckCircle className="text-chart-5 text-lg" />
                    ) : (
                      <FaTimesCircle className="text-destructive text-lg" />
                    )}
                  </div>

                  <div className="flex-1 space-y-3">
                    <p className="font-semibold text-base leading-relaxed">
                      {item?.question}
                    </p>

                    <div className="sm:text-base text-xs space-y-1">
                      <div>
                        <span className="font-medium text-foreground">
                          Your Answer:
                        </span>{" "}
                        <span
                          className={`font-bold ${item.isCorrect ? `text-chart-5` : `text-destructive`}`}
                        >
                          {item?.userAnswer || (
                            <span className="italic opacity-60 font-bold text-destructive">
                              Not Answered
                            </span>
                          )}
                        </span>
                      </div>

                      {!item?.isCorrect && (
                        <div>
                          <span>Correct Answer:</span>
                          <span className="text-chart-5 font-bold">
                            {item?.correctAnswer}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
