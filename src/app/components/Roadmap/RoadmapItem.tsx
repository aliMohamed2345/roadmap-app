import { roadmapDummyDataProps } from "@/app/types/roadmap";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { difficultySectionProps } from "@/app/types/roadmap";
import { IoCodeSlashOutline } from "react-icons/io5";
export const difficultyStyle = (difficulty: difficultySectionProps) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-chart-5 text-white";
    case "Intermediate":
      return "bg-chart-1 text-black";
    case "Advanced":
      return "bg-chart-2 text-white";
    case "Expert":
      return "bg-chart-3 text-white";
    case "Master":
      return "bg-chart-4 text-black";
    default:
      return "bg-muted text-muted-foreground";
  }
};
const RoadmapItem = ({
  title,
  description,
  id,
  numberOfSections,
  difficulty,
  mode = "roadmap",
  tags,
  steps,
}: roadmapDummyDataProps) => {
  return (
    <div className="group relative rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
      <div className="absolute -inset-1 bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-20 blur-2xl transition duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4 gap-3 flex-col sm:flex-row sm">
          <h5 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2 wrap-break-words hyphens-auto">
            {title}
          </h5>

          {mode !== "quiz" && (
            <span
              className={`shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full text-white shadow-md
              ${
                mode === "roadmap"
                  ? "bg-secondary text-secondary-foreground"
                  : `bg-linear-to-r ${difficultyStyle(difficulty!)}`
              }`}
            >
              {mode === "roadmap" ? `${numberOfSections} Sections` : difficulty}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {mode === "project" && (
          <>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags?.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border hover:bg-neon-purple transition-all hover:text-white cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
              <IoCodeSlashOutline className="opacity-70" />
              {steps?.length ?? 0} steps
            </div>
          </>
        )}

        <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent my-6" />

        <Link
          href={`/${
            mode === "roadmap"
              ? "roadmap"
              : mode === "quiz"
                ? "quiz"
                : "project"
          }/${id}`}
          className="block"
        >
          <div className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm text-white bg-linear-to-r from-neon-cyan to-neon-purple shadow-lg transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.04] active:scale-100">
            {mode === "roadmap"
              ? "Start Learning"
              : mode === "quiz"
                ? "Start Quiz"
                : "Start Project"}
            <BsArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoadmapItem;
