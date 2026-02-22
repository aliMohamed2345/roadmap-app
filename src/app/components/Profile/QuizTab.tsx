import { progressData } from "@/app/data";
const QuizTab = () => {
  return (
    <div className="space-y-4">
      {progressData.quiz.map((quiz, i) => (
        <div
          key={i}
          className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 rounded-2xl border border-border bg-muted/60 p-5 hover:border-primary hover:shadow-md transition-all duration-300"
        >
          <div className="space-y-1">
            <p className="font-semibold">Quiz ID: {quiz.quiz}</p>
            <p className="text-xs text-muted-foreground">
              {quiz.totalQuestions} Questions • {quiz.correctAnswers} Correct •{" "}
              {quiz.wrongAnswers} Wrong
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold">{quiz.percentage}%</span>

            <span
              className={`px-4 py-1.5 text-xs rounded-full font-semibold tracking-wide ${
                quiz.status === "Pass"
                  ? "bg-green-100/80 text-green-600"
                  : "bg-red-100/80 text-red-500"
              }`}
            >
              {quiz.grade}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizTab;
