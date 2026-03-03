"use client";

import RoadmapItem from "@/app/components/Roadmap/RoadmapItem";
import { CiMap } from "react-icons/ci";
import { useEffect, useState } from "react";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import { roadmapProps } from "@/app/types/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import RoadmapItemSkeletonLoading from "@/app/components/Roadmap/RoadmapItemLoading";

const Page = () => {
  const [roadmaps, setRoadmaps] = useState<roadmapProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const res = await RoadmapApiAxiosInstance.get(
          apiRoutes.Roadmap.getAllRoadmaps.route,
        );
        if (res.data.success) {
          if (res.data.success) {
            const formatted = res.data?.roadmap?.map(
              (roadmapItem: roadmapProps) => ({
                ...roadmapItem,
                numberOfSections: roadmapItem.sections?.length || [],
                id: roadmapItem._id,
              }),
            );
            setRoadmaps(formatted);
          }
        }
      } catch (err: unknown) {
        const axiosError = err as AxiosError<{ message: string }>;
        toast.error(
          axiosError.response?.data?.message || "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchRoadmaps();
  }, []);
  return (
    <div className="container mx-auto px-2 pt-20">
      <div className="text-center">
        <CiMap
          size={70}
          className=" mx-auto rounded-xl text-white bg-linear-to-br from-neon-cyan to-neon-purple "
        />
        <h1 className="text-lg sm:text-3xl md:text-5xl font-bold my-5">
          Learning Roadmaps
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl">
          Follow structured learning paths to master new skills. Each roadmap
          contains sections with curated resources to guide your journey.
        </p>
      </div>
      {loading ? (
        <RoadmapItemSkeletonLoading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-5 pb-20">
          {roadmaps?.map((roadmap) => (
            <RoadmapItem
              mode="roadmap"
              title={roadmap.title}
              description={roadmap.description}
              numberOfSections={roadmap.numberOfSections}
              id={roadmap.id}
              key={roadmap.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
