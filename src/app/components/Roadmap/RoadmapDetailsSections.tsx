import { apiRoutes } from "@/app/api/apiRoutes";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { iconDependingOnType, styleDependingOnDifficulty } from "@/app/helper";
import { resourceProps } from "@/app/types/api";
import { RoadmapDetailsSectionsProps } from "@/app/types/UI";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

const RoadmapDetailsSections = ({
  isAuthenticated,
  userProgress,
  setUserProgress,
  sectionDetails,
}: RoadmapDetailsSectionsProps) => {
  const toggleCompletionSection = async (index: number, sectionId: string) => {
    setUserProgress((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        sections: (prev.sections ?? []).map((section, i) =>
          i === index ? { ...section, completed: !section.completed } : section,
        ),
      };
    });
    const res = await RoadmapApiAxiosInstance.post(
      apiRoutes.Section.toggleCompletionSection.route(
        userProgress?.roadmap?._id || "1",
        sectionId,
      ),
    );
    if (res.data.success) {
      toast.success(res.data.message);
      setUserProgress((prev) => {
        if (!prev) return prev;

        const updatedSections = [...prev.sections];
        const wasCompleted = updatedSections[index].completed;

        updatedSections[index].completed = !wasCompleted;

        return {
          ...prev,
          sections: updatedSections,
          completed: wasCompleted ? prev.completed! - 1 : prev.completed! + 1,
        };
      });
    } else {
      toast.error(res.data.message || "couldn't toggle completion status");
    }
  };
  return (
    <div className="flex flex-col gap-6 my-10">
      {isAuthenticated
        ? userProgress?.sections.map((section, index) => (
            <div
              id={`section-${index}`}
              key={index}
              className="scroll-mt-28 bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2 items-center">
                  {isAuthenticated && (
                    <button
                      onClick={() =>
                        toggleCompletionSection(index, section._id)
                      }
                      className="text-primary p-1 cursor-pointer rounded-full hover:bg-muted transition"
                    >
                      {section.completed ? (
                        <MdOutlineRadioButtonChecked size={25} />
                      ) : (
                        <MdOutlineRadioButtonUnchecked size={25} />
                      )}
                    </button>
                  )}

                  <h2 className="sm:text-xl font-semibold text-sm">
                    {section.title}
                  </h2>
                </div>

                <span
                  className={`text-secondary-foreground text-xs px-3 py-1 rounded-full ${styleDependingOnDifficulty(
                    section?.difficulty || "Beginner",
                  )}`}
                >
                  {section.difficulty}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 text-xs sm:text-base">
                {section.description}
              </p>

              <div className="flex flex-col gap-2">
                {section?.resources?.map((resource, i) => (
                  <Link
                    href={resource.url}
                    target="_blank"
                    key={i}
                    className="flex group items-center justify-between text-sm text-muted-foreground hover:text-primary transition hover:bg-muted p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {iconDependingOnType(resource.type)}
                      <div>
                        <span>{resource.title}</span>
                        <p className="text-xs">{resource.type}</p>
                      </div>
                    </div>

                    <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                ))}
              </div>
            </div>
          ))
        : sectionDetails?.map((section, index) => (
            <div
              id={`section-${index}`}
              key={index}
              className="scroll-mt-28 bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2 items-center">
                  <h2 className="sm:text-xl font-semibold text-sm">
                    {section.title}
                  </h2>
                </div>

                <span
                  className={`text-secondary-foreground text-xs px-3 py-1 rounded-full ${styleDependingOnDifficulty(
                    section.difficulty,
                  )}`}
                >
                  {section.difficulty}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 text-xs sm:text-base">
                {section.description}
              </p>

              <div className="flex flex-col gap-2">
                {section?.resources?.map(
                  (resource: resourceProps, i: number) => (
                    <Link
                      href={resource.url}
                      target="_blank"
                      key={i}
                      className="flex group items-center justify-between text-sm text-muted-foreground hover:text-primary transition hover:bg-muted p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {iconDependingOnType(resource.type)}
                        <div>
                          <span>{resource.title}</span>
                          <p className="text-xs">{resource.type}</p>
                        </div>
                      </div>

                      <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
    </div>
  );
};

export default RoadmapDetailsSections;
