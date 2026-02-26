"use client";
import { projectProgressDataProps } from "@/app/types/api";
import EmptyTab from "./EmptyTab";
const ProjectProfileTab = ({
  project,
}: {
  project: projectProgressDataProps[];
}) => {
  if (project.length === 0)
    return <EmptyTab linkUrl="project" message="No projects available yet." />;
  return (
    <div className="space-y-4">
      {project.map((projectItem) => (
        <div
          key={projectItem.project}
          className="rounded-2xl border border-border bg-muted/60 p-5 hover:border-primary transition"
        >
          <p className="font-semibold mb-2">Project: {projectItem.project}</p>

          <p className="text-sm text-muted-foreground">
            Completed Steps: {projectItem.completedCount} /{" "}
            {projectItem.totalSteps}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectProfileTab;
