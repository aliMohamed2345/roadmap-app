"use client";

import { apiRoutes } from "@/app/api/apiRoutes";
import RoadmapOrQuizItem from "@/app/components/Roadmap/RoadmapItem";
import { useEffect, useState } from "react";
import { MdOutlineQuiz } from "react-icons/md";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import RoadmapItemSkeletonLoading from "@/app/components/Roadmap/RoadmapItemLoading";
import { quizProps } from "@/app/types/roadmap";

const Page = () => {
  const [quizzes, setQuizzes] = useState<quizProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await RoadmapApiAxiosInstance.get(
          apiRoutes.Quiz.getAllQuizzes.route,
        );

        if (res.data.success) {
          setQuizzes(res.data.quizData);
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
    fetchQuizzes();
  }, []);
  return (
    <div className="container mx-auto px-2 pt-20">
      <div className="text-center">
        <MdOutlineQuiz
          size={70}
          className=" mx-auto rounded-xl text-white bg-linear-to-br from-neon-cyan to-neon-purple p-2"
        />
        <h1 className="text-lg sm:text-3xl md:text-5xl font-bold my-5">
          Available Quizzes
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl">
          Test your knowledge with our collection of quizzes. Each quiz contains
          multiple-choice questions to help you assess your understanding.
        </p>
      </div>

      {loading ? (
        <RoadmapItemSkeletonLoading length={12} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center my-5">
          {quizzes.map((quiz, i) => (
            <RoadmapOrQuizItem
              title={quiz.title}
              description={quiz.description}
              id={quiz._id!}
              mode="quiz"
              difficulty={quiz.rank}
              key={i}
              quizTitle={quiz.title}
              quizDescription={quiz.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
