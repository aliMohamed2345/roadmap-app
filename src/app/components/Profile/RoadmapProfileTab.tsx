import { roadmapProgressDataProps } from "@/app/types/api";
import EmptyTab from "./EmptyTab";

const RoadmapProfileTab = ({
  roadmap,
}: {
  roadmap: roadmapProgressDataProps[];
}) => {
  if(roadmap.length === 0) return <EmptyTab linkUrl="roadmap" message="No roadmaps available yet."/>
  return (
    <div className="space-y-4">
      {roadmap.map((roadmapItem, i) => (
        <div
          key={i}
          className="rounded-2xl border border-border bg-muted/60 p-5 hover:border-primary transition"
        >
          <p className="font-semibold mb-2">Roadmap: {roadmapItem.roadmap}</p>

          <p className="text-sm text-muted-foreground">
            Completed Sections: {roadmapItem.completedSections.length} /{" "}
            {roadmapItem.numberOfAllSections}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RoadmapProfileTab;
