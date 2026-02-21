"use client";

import { projectDummyData } from "@/app/data";
import { difficultyStyle } from "@/app/components/Roadmap/RoadmapItem";
import { IoCodeSlashOutline } from "react-icons/io5";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
import { useState, useMemo } from "react";
// import ProjectDetailsLoading from "@/app/components/Project/ProjectDetailsLoading";

const Page = () => {
  const project = projectDummyData[0];

  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    project.steps.map(() => false),
  );

  const progress = useMemo(() => {
    const completed = completedSteps.filter(Boolean).length;
    return (completed / project.steps.length) * 100;
  }, [completedSteps, project.steps.length]);

  const toggleIsCompleted = (index: number) => {
    const updated = [...completedSteps];
    updated[index] = !updated[index];
    setCompletedSteps(updated);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-5xl">
      {/* <ProjectDetailsLoading /> */}
      <div className="group relative rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl overflow-hidden mb-10">
        <div className="absolute -inset-1 bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-20 blur-2xl transition duration-500" />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-bold leading-tight wrap-break-words">
                {project.title}
              </h1>

              <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <span
              className={`shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full shadow-md ${difficultyStyle(
                project.level,
              )}`}
            >
              {project.level}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border hover:bg-neon-purple hover:text-white transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}

            <span className="text-xs text-muted-foreground flex items-center gap-2 ml-auto">
              <IoCodeSlashOutline className="opacity-70" />
              {project.steps.length} steps
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 shadow-lg mb-12">
        <div className="flex justify-between mb-4 text-sm font-medium">
          <span className="text-muted-foreground">Progress</span>
          <span>
            {completedSteps.filter(Boolean).length} / {project.steps.length}{" "}
            steps
          </span>
        </div>

        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-linear-to-r from-neon-cyan to-neon-purple transition-all duration-500"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Project Steps</h2>

        <div className="flex flex-col gap-5">
          {project.steps.map((step, i) => (
            <button
              key={i}
              onClick={() => toggleIsCompleted(i)}
              className={`group cursor-pointer relative rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                completedSteps[i] ? "border-primary/60 shadow-primary/20" : ""
              }`}
            >
              <div className="flex gap-5 items-start">
                <div>
                  {completedSteps[i] ? (
                    <MdOutlineRadioButtonChecked
                      size={28}
                      className="text-primary"
                    />
                  ) : (
                    <MdOutlineRadioButtonUnchecked
                      size={28}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <h5 className="text-base sm:text-lg font-semibold leading-snug wrap-break-words">
                    Step {i + 1}: {step.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
