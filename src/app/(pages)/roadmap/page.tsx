import RoadmapItem from "@/app/components/Roadmap/RoadmapItem";
// import RoadmapItemSkeletonLoading from "@/app/components/Roadmap/RoadmapItemSkeletonLoading";
import { roadmapDummyData } from "@/app/data";
import { CiMap } from "react-icons/ci";

const page = () => {
  return (
    <div className="container mx-auto px-2 pt-20">
      <div className="text-center">
        <CiMap
          size={70}
          className=" mx-auto rounded-lg text-white bg-linear-to-br from-neon-cyan to-neon-purple "
        />
        <h1 className="text-lg sm:text-3xl md:text-5xl font-bold my-5">
          Learning Roadmaps
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl">
          Follow structured learning paths to master new skills. Each roadmap
          contains sections with curated resources to guide your journey.
        </p>
      </div>
        {/* <RoadmapItemSkeletonLoading/> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center my-5">
        {roadmapDummyData.map((roadmap) => (
          <RoadmapItem
            title={roadmap.title}
            description={roadmap.description}
            numberOfSections={roadmap.numberOfSections}
            id={roadmap.id}
            key={roadmap.id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
