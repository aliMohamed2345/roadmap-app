"use client";

import QuestionItem from "@/app/components/Quiz/QuestionItem";
import { questionDummyData, quizDummyData } from "@/app/data";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoCheck } from "react-icons/go";

const Page = () => {
  const { quizId } = useParams();
  console.log(quizId);
  const quiz = quizDummyData[0];

  const [answeredCount, setAnsweredCount] = useState(0);
  console.log(setAnsweredCount);

  const progress = useMemo(() => {
    return (answeredCount / questionDummyData.length) * 100;
  }, [answeredCount]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">{quiz.title}</h1>

          <p className="text-muted-foreground max-w-2xl text-sm sm:text-lg">
            {quiz.description}
          </p>

          <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-linear-to-br from-neon-cyan to-neon-purple text-white">
            {questionDummyData.length} Questions
          </div>
        </div>

        <div className="mb-10 rounded-2xl bg-card/80 backdrop-blur-md border border-border hover:border-primary transition-all p-6 shadow-lg">
          <div className="flex justify-between mb-3 text-sm sm:text-base font-medium">
            <span className="text-muted-foreground">Progress</span>
            <span>
              {answeredCount} / {questionDummyData.length} answered
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
          {questionDummyData.map((question) => (
            <QuestionItem
              key={question.questionId}
              answers={question.answers}
              correctAnswer={question.correctAnswer}
              question={question.question}
              questionId={question.questionId}
              questionNumber={question.questionNumber}
            />
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-card border border-border p-4 shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all cursor-pointer">
              <IoIosArrowBack /> Previous
            </button>

            <div className="flex justify-center order-first sm:order-0">
              <button className="rounded-full font-bold cursor-pointer w-10 h-10 flex items-center justify-center bg-linear-to-r from-neon-cyan to-neon-purple text-white shadow-md">
                1
              </button>
            </div>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-white bg-linear-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all shadow-md cursor-pointer">
              Submit Quiz <GoCheck size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
