"use client";

import DropDownMenu from "@/app/components/UI/DropDownMenu";
import { IoClose, IoSearch } from "react-icons/io5";
import RoadmapItem from "@/app/components/Roadmap/RoadmapItem";
import {
  difficultySectionProps,
  projectDummyDataProps,
} from "@/app/types/roadmap";
import { useEffect, useRef, useState, useCallback } from "react";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import toast from "react-hot-toast";
import RoadmapItemSkeletonLoading from "@/app/components/Roadmap/RoadmapItemLoading";
import { AxiosError } from "axios";
import NotFoundProject from "@/app/components/Project/NotFoundProject";
import { useDebounce } from "@/app/hooks/useDebounce";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProjectPageLayout = () => {
  const [projects, setProjects] = useState<projectDummyDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [query, setQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<
    difficultySectionProps | "Select Level"
  >("Select Level");

  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 1000);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPage(1);
    setProjects([]);
    setHasMore(true);
  }, [debouncedQuery, selectedLevel]);

  const fetchProjects = useCallback(
    async (currentPage: number) => {
      if (currentPage === 1) {
        setLoading(true);
      } else {
        setFetchingMore(true);
      }

      try {
        const res = await RoadmapApiAxiosInstance.get(
          apiRoutes.Project.getAllProjects.route({
            page: currentPage,
            q: debouncedQuery,
            level: selectedLevel === "Select Level" ? undefined : selectedLevel,
          }),
        );

        if (res.data.success) {
          const newProjects = res.data.projects || [];

          setProjects((prev) =>
            currentPage === 1 ? newProjects : [...prev, ...newProjects],
          );

          setHasMore(newProjects.length > 0);
        }
      } catch (err: unknown) {
        const axiosError = err as AxiosError<{ message: string }>;
        toast.error(axiosError.message || "Something went wrong");
        setHasMore(false); 
      } finally {
        setLoading(false);
        setFetchingMore(false);
      }
    },
    [debouncedQuery, selectedLevel],
  );

  useEffect(() => {
    fetchProjects(page);
  }, [fetchProjects, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && hasMore && !fetchingMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "400px", 
        threshold: 0.1,
      },
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, fetchingMore, loading]);

  const clearFilters = () => {
    setQuery("");
    setSelectedLevel("Select Level");
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
          option={selectedLevel}
          optionList={["Beginner", "Intermediate", "Advanced"]}
        />

        {(query || selectedLevel !== "Select Level") && (
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
        <>
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

          <div
            ref={observerRef}
            className="h-20 flex items-center justify-center mt-8"
          >
            {fetchingMore && (
              <AiOutlineLoading3Quarters
                className="w-6 h-6 animate-spin text-primary"
                size={25}
              />
            )}
            {!hasMore && !fetchingMore && (
              <p className="text-muted-foreground text-sm">
                You&apos;ve reached the end 🎉
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectPageLayout;
