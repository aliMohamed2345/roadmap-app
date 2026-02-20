"use client";

import { QuestionItemProps } from "@/app/types/quiz";
import { useState } from "react";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

const QuestionItem = ({
  question,
  questionId,
  answers,
  questionNumber,
}: QuestionItemProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  console.log(questionId);
  return (
    <div className="relative group rounded-2xl p-px bg-linear-to-br from-neon-cyan/40 to-neon-purple/40">
      <div className="rounded-2xl bg-card p-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
        <div className="flex items-center gap-4 mb-6 flex-col sm:flex-row">
          <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold text-xs sm:text-sm bg-linear-to-br from-neon-cyan to-neon-purple text-white">
            {questionNumber}
          </div>

          <h4 className="text-base text-center sm:text-xl font-semibold leading-snug">
            {question}
          </h4>
        </div>

        <div className="flex flex-col gap-3">
          {answers.map((answer, index) => {
            const isSelected = selectedAnswer === answer;

            return (
              <button
                key={index}
                onClick={() => setSelectedAnswer(answer)}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 text-left cursor-pointer transition-all duration-200 border
                ${
                  isSelected
                    ? "border-primary bg-primary/10 text-foreground shadow-md shadow-primary/20"
                    : "border-border bg-muted/40 hover:border-primary/50 hover:bg-muted"
                }`}
              >
                {isSelected ? (
                  <div className="shrink-0">
                    <MdOutlineRadioButtonChecked
                      size={24}
                      className="text-primary transition-all"
                    />
                  </div>
                ) : (
                  <div className="shrink-0">
                    <MdOutlineRadioButtonUnchecked
                      size={24}
                      className="text-muted-foreground transition-all"
                    />
                  </div>
                )}

                <span className="font-medium text-sm sm:text-lg">{answer}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
