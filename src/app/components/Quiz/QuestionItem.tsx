"use client";

import { QuestionItemProps } from "@/app/types/quiz";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

const QuestionItem = ({
  question,
  _id,
  answers, 
  questionNumber,
  selectedAnswer,
  onSelectAnswer,
}: QuestionItemProps) => {
  return (
    <div className="relative group rounded-2xl p-px bg-linear-to-br from-neon-cyan/40 to-neon-purple/40">
      <div className="rounded-2xl bg-card p-6 transition-all duration-300 group-hover:shadow-lg">
        <div className="flex items-center gap-4 mb-6 flex-col sm:flex-row">
          <div className="w-10 h-10 flex items-center justify-center rounded-full font-bold bg-linear-to-br from-neon-cyan to-neon-purple text-white">
            {questionNumber}
          </div>

          <h4 className="text-base sm:text-xl font-semibold text-center sm:text-left">
            {question}
          </h4>
        </div>

        <div className="flex flex-col gap-3">
          {answers?.map((answer) => {
            const isSelected = selectedAnswer === answer;

            return (
              <button
                key={answer} // Better key
                onClick={() => onSelectAnswer(_id!, answer)}
                className={`flex items-center gap-4 rounded-xl cursor-pointer px-4 py-3 text-left transition-all duration-200 border
                ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-muted/40 hover:border-primary/50"
                }`}
              >
                {isSelected ? (
                  <MdOutlineRadioButtonChecked
                    size={24}
                    className="text-primary"
                  />
                ) : (
                  <MdOutlineRadioButtonUnchecked size={24} />
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
