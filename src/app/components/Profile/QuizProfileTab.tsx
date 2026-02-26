import { quizRoadmapProgressDataProps } from "@/app/types/api";
import EmptyTab from "./EmptyTab";

const QuizProfileTab = ({ quiz }: { quiz: quizRoadmapProgressDataProps[] }) => {
  if (quiz.length === 0)
    return <EmptyTab linkUrl="quiz" message="No quizzes available yet." />;
  return (
    <div className="space-y-4">
      {quiz.map((quizItem, i) => (
        <div
          key={i}
          className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 rounded-2xl border border-border bg-muted/60 p-5 hover:border-primary hover:shadow-md transition-all duration-300"
        >
          <div className="space-y-1">
            <p className="font-semibold">Quiz ID: {quizItem.quiz}</p>
            <p className="text-xs text-muted-foreground">
              {quizItem.totalQuestions} Questions • {quizItem.correctAnswers}{" "}
              Correct • {quizItem.wrongAnswers} Wrong
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold">
              {quizItem.percentage}%
            </span>

            <span
              className={`px-4 py-1.5 text-xs rounded-full font-semibold tracking-wide ${
                quizItem.status === "Pass"
                  ? "bg-chart-5/30 text-chart-5"
                  : "bg-chart-3/30 text-chart-3"
              }`}
            >
              {quizItem.grade}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizProfileTab;
