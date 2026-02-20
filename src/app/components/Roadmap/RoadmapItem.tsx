import { roadmapDummyDataProps } from "@/app/types/roadmap";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { difficultySectionProps } from "@/app/types/roadmap";
const RoadmapOrQuizItem = ({
  title,
  description,
  id,
  numberOfSections,
  difficulty,
  mode = "roadmap",
}: roadmapDummyDataProps) => {
  const quizDifficultyStyle = (difficulty: difficultySectionProps) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-chart-5";
      case "Intermediate":
        return "bg-chart-2";
      case "Advanced":
        return "bg-chart-4";
      case "Expert":
        return "bg-chart-3";
      case "Master":
        return "bg-chart-1";
    }
  };
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card text-card-foreground p-5 transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 group">
      <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between gap-4 mb-3 items-center">
        <h5 className="text-base sm:text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
          {title}
        </h5>

        <span
          className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full  shadow-sm ${mode === "roadmap" ? `bg-secondary/90 text-secondary-foreground` : quizDifficultyStyle(difficulty!)}`}
        >
          {mode === "roadmap" ? `${numberOfSections} Sections` : difficulty}
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>

      <div className="h-px w-full bg-border my-5" />

      <Link
        href={`/${mode === "roadmap" ? "roadmap" : "quiz"}/${id}`}
        className="block"
      >
        <button className="w-full -fit flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-linear-to-br from-neon-cyan to-neon-purple shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/40 active:scale-100 text-white cursor-pointer">
          {mode === "roadmap" ? `Start Learning` : `Start Quiz`}
          <BsArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1.5 " />
        </button>
      </Link>
    </div>
  );
};

export default RoadmapOrQuizItem;
