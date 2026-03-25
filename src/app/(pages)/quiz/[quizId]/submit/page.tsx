"use client";
import { apiRoutes } from "@/app/api/apiRoutes";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import NotFoundQuizResults from "@/app/components/Quiz/NotFoundQuizResults";
import QuizResults from "@/app/components/Quiz/QuizResults";
import QuizResultsLoading from "@/app/components/Quiz/QuizResultsLoading";
import { quizResultsProps } from "@/app/types/api";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const { quizId } = useParams();
  const [loading, setLoading] = useState(false);
  const [quizResult, setQuizResult] = useState<quizResultsProps>();
  console.log(quizResult);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        const storedQuestions = localStorage.getItem("questions");
        const questions = storedQuestions ? JSON.parse(storedQuestions) : [];

        const res = await RoadmapApiAxiosInstance.post(
          apiRoutes.Question.submitQuizAnswers.route(String(quizId)),
          { answers: questions },
        );

        if (res.data.success) {
          setQuizResult(res.data.result);
        }
      } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error(
          axiosError.message || "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    if (quizId) fetchResults();
  }, [quizId]);
  if (loading) return <QuizResultsLoading />;
  if (!quizResult) return <NotFoundQuizResults />;
  return (
    <QuizResults
      answerDetails={quizResult?.answerDetails ?? []}
      correctAnswers={quizResult?.correctAnswers ?? 0}
      grade={quizResult?.grade ?? "F"}
      percentage={quizResult?.percentage ?? 0}
      quizTitle={quizResult?.quizTitle ?? ""}
      status={quizResult?.status ?? "Failed"}
      totalQuestions={quizResult?.totalQuestions ?? 0}
      wrongAnswers={quizResult?.wrongAnswers ?? 0}
      quizId={quizResult?.quizId ?? ""}
    />
  );
};

export default Page;
