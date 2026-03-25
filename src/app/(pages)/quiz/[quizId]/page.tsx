"use client";

import QuestionItem from "@/app/components/Quiz/QuestionItem";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import QuizDetailsLoading from "@/app/components/Quiz/QuizDetailsLoading";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { QuestionItemProps } from "@/app/types/quiz";
import { QuestionProps } from "@/app/types/api";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import UnauthorizedPage from "@/app/components/Auth/UnauthorizedPage";
const Page = () => {
  const searchParams = useSearchParams();
  const { quizId } = useParams();
  const router = useRouter();
  const quizTitle = searchParams.get("quizTitle");
  const quizDescription = searchParams.get("quizDescription");
  const QUESTION_PER_PAGE = 10;

  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [questionDetails, setQuestionDetails] = useState<QuestionProps>();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  console.log(selectedAnswers);

  const answeredCount = Object.keys(selectedAnswers).length;

  const progress = useMemo(() => {
    const total = questionDetails?.questions.length ?? 0;
    if (!total) return 0;
    return (answeredCount / total) * 100;
  }, [answeredCount, questionDetails]);

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    const stored: { questionId: string; answer: string }[] = JSON.parse(
      localStorage.getItem("questions") || "[]",
    );

    const index = stored.findIndex((q) => q.questionId === questionId);

    if (index !== -1) {
      stored[index].answer = answer;
    } else {
      stored.push({ questionId, answer });
    }

    localStorage.setItem("questions", JSON.stringify(stored));
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      if (isAuthenticated) {
        setLoading(true);
        try {
          const res = await RoadmapApiAxiosInstance.get(
            apiRoutes.Question.getAllQuestionsByQuiz.route(String(quizId), {
              page: currentPage,
              random: false,
              limit: QUESTION_PER_PAGE,
            }),
          );

          if (res.data.success) {
            setQuestionDetails(res.data);
          }
        } catch (err) {
          const axiosError = err as AxiosError<{ message: string }>;
          toast.error(
            axiosError.message || "Something went wrong",
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchQuizData();
  }, [quizId, currentPage, isAuthenticated]);

  useEffect(() => {
    if (!questionDetails?.questions) return;

    const stored: { _id: string; userAnswer: string }[] = JSON.parse(
      localStorage.getItem("questions") || "[]",
    );

    const answersForThisPage: Record<string, string> = {};

    questionDetails.questions.forEach((q) => {
      const found = stored.find((item) => item._id === q._id);
      if (found?.userAnswer) {
        answersForThisPage[String(q._id)] = found.userAnswer;
      }
    });

    setSelectedAnswers(answersForThisPage);
  }, [questionDetails]);

  const handlePreviousButton = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < (questionDetails?.totalPages ?? 1)) {
      setCurrentPage((prev) => prev + 1);
    } else {
      router.push(
        `/quiz/${quizId}/submit?quizTitle=${encodeURIComponent(quizTitle as string)}`,
      );
      console.log("Submit quiz");
    }
  };
  if (!isAuthenticated) return <UnauthorizedPage mode="authenticate" />;

  if (loading) return <QuizDetailsLoading />;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">{quizTitle}</h1>

          <p className="text-muted-foreground max-w-2xl text-sm sm:text-lg">
            {quizDescription}
          </p>

          <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-linear-to-br from-neon-cyan to-neon-purple text-white">
            {questionDetails?.totalQuestions} Questions
          </div>
        </div>

        <div className="mb-10 rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 shadow-lg">
          <div className="flex justify-between mb-3 text-sm sm:text-base font-medium">
            <span className="text-muted-foreground">Progress</span>
            <span>
              {answeredCount} / {questionDetails?.questions.length} answered
            </span>
          </div>

          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-neon-cyan to-neon-purple transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {questionDetails?.questions?.map((question: QuestionItemProps, i) => (
            <QuestionItem
              key={question._id}
              _id={String(question._id)}
              questionNumber={(currentPage - 1) * QUESTION_PER_PAGE + (i + 1)}
              question={question.question}
              answers={question.options!}
              selectedAnswer={selectedAnswers[String(question._id)]}
              onSelectAnswer={handleSelectAnswer}
            />
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-card border border-border p-4 shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
            <button
              disabled={currentPage === 1}
              onClick={handlePreviousButton}
              className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IoIosArrowBack /> Previous
            </button>

            <button
              disabled={answeredCount !== questionDetails?.questions.length}
              onClick={handleNextButton}
              className={`w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-white transition-all shadow-md
                ${
                  answeredCount === questionDetails?.questions.length
                    ? "bg-linear-to-r from-neon-cyan to-neon-purple hover:opacity-90"
                    : "bg-muted cursor-not-allowed"
                }`}
            >
              {currentPage === questionDetails?.totalPages ? (
                <>
                  Submit Quiz <GoCheck size={20} />
                </>
              ) : (
                <>
                  Next <IoIosArrowForward />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
