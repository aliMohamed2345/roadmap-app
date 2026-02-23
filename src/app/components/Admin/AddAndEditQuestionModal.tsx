import { AddAndEditQuestionModalProps } from "@/app/types/admin";
import { useState } from "react";

const AddAndEditQuestionModal = ({
  mode,
  question,
  answers,
  correctAnswer,
}: AddAndEditQuestionModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    mode === "ADD" ? "" : question || "",
  );
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState<string>(
    mode === "ADD" ? "" : correctAnswer || "",
  );
  const [currentAnswers, setCurrentAnswers] = useState<string[]>(
    mode === "ADD" ? [] : answers || [],
  );

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm sm:text-lg font-bold">Question</p>
      <input
        onChange={(e) => setCurrentQuestion(e.target.value)}
        value={currentQuestion}
        type="text"
        id="question"
        placeholder="Enter Question"
        className="border border-border bg-background rounded-lg p-2"
      />
      <p className="text-sm sm:text-lg font-bold">Answers</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        {Array.from({ length: 4 }, (_, index) => (
          <input
            key={index}
            value={currentAnswers[index] || ""}
            onChange={(e) =>
              setCurrentAnswers((prev) => [
                ...prev,
                (prev[index] = e.target.value),
              ])
            }
            type="text"
            id={`answer-${index + 1}`}
            placeholder="Enter Answer"
            className="border border-border bg-background rounded-lg p-2 w-full"
          />
        ))}
      </div>

      <p className="text-sm sm:text-lg font-bold">Correct Answer</p>
      <input
        value={currentCorrectAnswer}
        onChange={(e) => setCurrentCorrectAnswer(e.target.value)}
        type="text"
        id="correctAnswer"
        placeholder="Enter Correct Answer"
        className="border border-border bg-background rounded-lg p-2"
      />

      <button className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer hover:scale-105 transition-all gap-2 my-5 w-full max-w-md mx-auto">
        {mode === "ADD" ? `Create Question` : `Update Question`}
      </button>
    </div>
  );
};

export default AddAndEditQuestionModal;
