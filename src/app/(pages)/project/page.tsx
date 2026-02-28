"use client";
import DropDownMenu from "@/app/components/UI/DropDownMenu";
import { IoClose, IoSearch } from "react-icons/io5";
import RoadmapItem from "@/app/components/Roadmap/RoadmapItem";
import {
  difficultySectionProps,
  projectDummyDataProps,
} from "@/app/types/roadmap";
import { useEffect, useState } from "react";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import RoadmapItemSkeletonLoading from "@/app/components/Roadmap/RoadmapItemLoading";
import { AxiosError } from "axios";
import NotFoundProject from "@/app/components/Project/NotFoundProject";
import { useDebounce } from "@/app/hooks/useDebounce";

const ProjectPageLayout = () => {
  const [projects, setProjects] = useState<projectDummyDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<
    difficultySectionProps | "Select Level"
  >();
  const debouncedQuery = useDebounce(query, 1000);
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await RoadmapApiAxiosInstance.get(
          apiRoutes.Project.getAllProjects.route({
            q: debouncedQuery,
            level: selectedLevel === "Select Level" ? undefined : selectedLevel,
          }),
        );

        if (res.data.success) {
          setProjects(res.data.projects);
        }
      } catch (err: unknown) {
        setProjects([]);
        const axiosError = err as AxiosError<{ message: string }>;
        toast.error(
          axiosError.response?.data?.message || "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [debouncedQuery, selectedLevel]);

  const clearFilters = () => {
    setQuery("");
    setSelectedLevel(undefined);
    setProjects([])
  };

  return (
    <div className="pt-20 container mx-auto px-4 py-8 md:px-10">
      <div className="flex flex-col gap-3 my-5">
        <h1 className="text-lg sm:text-3xl font-bold">Projects Ideas</h1>
        <p className="text-muted-foreground text-base sm:text-xl">
          Practice your skills with real-world projects. Each project includes
          detailed steps, requirements, and expected deliverables.
        </p>
      </div>

      <div className="mb-8 flex items-center gap-3 flex-col sm:flex-row">
        <div className="relative flex-1 w-full">
          <IoSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-sm outline-none focus:border-primary"
          />
          {query && (
            <IoClose
              className="absolute right-3 top-1/2 h-6 w-6 text-muted-foreground -translate-y-1/2 cursor-pointer p-1 hover:bg-primary hover:text-white transition-all rounded-full"
              onClick={() => setQuery("")}
            />
          )}
        </div>

        <DropDownMenu
          onChange={(value) =>
            setSelectedLevel(value as difficultySectionProps)
          }
          option={selectedLevel || "Select Level"}
          optionList={["Beginner", "Intermediate", "Advanced"]}
        />

        {(query || selectedLevel) && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-white font-bold transition cursor-pointer"
          >
            Clear Filters
          </button>
        )}
      </div>

      {loading ? (
        <RoadmapItemSkeletonLoading length={12} />
      ) : projects.length === 0 ? (
        <NotFoundProject
          message="No projects found matching your criteria. Try adjusting your search or filters."
          clearFilters={clearFilters}
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RoadmapItem
              key={project._id}
              description={project.description}
              id={project._id!}
              title={project.title}
              difficulty={project.level as difficultySectionProps}
              tags={project.tags}
              mode="project"
              steps={project.steps}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectPageLayout;
