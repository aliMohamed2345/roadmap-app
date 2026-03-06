import { userProgressProps } from "@/app/types/api";
import { sectionDataProps } from "@/app/types/roadmap";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const handleScrollToSection = (index: number) => {
  const element = document.getElementById(`section-${index}`);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const RoadmapContentsList = ({
  isAuthenticated,
  userProgress,
  sectionDetails,
}: {
  isAuthenticated: boolean;
  userProgress?: userProgressProps;
  sectionDetails?: sectionDataProps[];
}) => {
  return (
    <div className="lg:col-span-1 bg-card border border-border rounded-xl p-5 h-fit ">
      <div className="flex items-center gap-1 mb-6">
        <Link
          href="/roadmap"
          className="p-2 rounded-lg hover:bg-muted transition"
        >
          <FaArrowLeft size={18} />
        </Link>
        <h3 className="font-semibold text-lg">Contents</h3>
      </div>

      <div className="flex flex-col gap-3">
        {isAuthenticated
          ? userProgress?.sections.map((section, index) => (
              <button
                key={index}
                onClick={() => handleScrollToSection(index)}
                className="text-left cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-lg transition"
              >
                {section.title}
              </button>
            ))
          : sectionDetails?.map((section, index) => (
              <button
                key={index}
                onClick={() => handleScrollToSection(index)}
                className="text-left cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-lg transition"
              >
                {section.title}
              </button>
            ))}
      </div>
    </div>
  );
};

export default RoadmapContentsList;
