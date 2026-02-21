"use client";
import DropDownMenu from "@/app/components/UI/DropDownMenu";
import { IoSearch } from "react-icons/io5";
import RoadmapItem from "@/app/components/Roadmap/RoadmapItem";
import { projectDummyData } from "@/app/data";
import { difficultySectionProps } from "@/app/types/roadmap";
const ProjectPageLayout = () => {
  return (
    <div className="pt-20 container mx-auto px-4 py-8 md:px-10">
      <div className="flex flex-col gap-3 my-5">
        <h1 className="text-lg sm:text-3xl font-bold ">Projects Ideas</h1>
        <p className="text-muted-foreground text-base sm:text-xl">
          Practice your skills with real-world projects. Each project includes
          detailed steps, requirements, and expected deliverables.
        </p>
      </div>
      <div className="mb-8 flex items-center gap-3 flex-col sm:flex-row ">
        <div className="relative flex-1 w-full">
          <IoSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search projects..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-sm outline-none focus:border-primary"
          />
        </div>

        <DropDownMenu
          onChange={(value) => console.log(value)}
          option="Select Level"
          optionList={["Beginner", "Intermediate", "Advanced"]}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectDummyData.map((project, i) => (
          <RoadmapItem
            description={project.description}
            id={project.id}
            title={project.title}
            difficulty={project.level as difficultySectionProps}
            key={i}
            tags={project.tags}
            mode="project"
            steps={project.steps}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPageLayout;
