"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import { roadmapProps, userProgressProps } from "@/app/types/api";
import RoadmapDetailsLoading from "@/app/components/Roadmap/RoadmapDetailsLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Modal from "@/app/components/UI/Modal";
import CongratsWindowModule from "@/app/components/Roadmap/CongratsWindowModal";
import RoadmapContentsList from "@/app/components/Roadmap/RoadmapContentsList";
import ProgressCircle from "@/app/components/Roadmap/ProgressCircle";
import RoadmapDetailsSections from "@/app/components/Roadmap/RoadmapDetailsSections";
import ExportBTN from "@/app/components/UI/ExportBTN";
import { exportHelper } from "@/app/helper";
import { sectionDataProps } from "@/app/types/roadmap";

const Page = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const { roadmapId } = useParams();

  const [roadmapDetails, setRoadmapDetails] = useState<roadmapProps>();
  const [userProgress, setUserProgress] = useState<userProgressProps>();
  const [sectionDetails, setSectionDetails] = useState<sectionDataProps[]>();
  const [loading, setLoading] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (!userProgress || !isAuthenticated) return;

    const { completed = 0, total = 0 } = userProgress;

    // Only show if ALL sections are completed
    const isFullyCompleted = total > 0 && completed === total;

    if (!isFullyCompleted) return;

    const storageKey = `roadmap-completed-${roadmapId}`;
    const hasAlreadyShown = localStorage.getItem(storageKey);

    if (!hasAlreadyShown) {
      setShowCongrats(true);
      localStorage.setItem(storageKey, "true");
    }
  }, [userProgress, roadmapId, isAuthenticated]);

  useEffect(() => {
    const fetchRoadmapDetails = async () => {
      try {
        if (isAuthenticated) {
          const res = await RoadmapApiAxiosInstance.get(
            apiRoutes.Roadmap.getProgress.route(roadmapId?.toString() || "1"),
          );

          if (res.data.success) {
            setUserProgress(res.data);
          }
        } else {
          const [roadmapRes, sectionRes] = await Promise.all([
            RoadmapApiAxiosInstance.get(
              apiRoutes.Roadmap.getRoadmapById.route(
                roadmapId?.toString() || "1",
              ),
            ),
            RoadmapApiAxiosInstance.get(
              apiRoutes.Section.getAllRoadmapSections.route(
                roadmapId?.toString() || "1",
              ),
            ),
          ]);

          if (roadmapRes.data.success)
            setRoadmapDetails(roadmapRes.data.roadmap);
          if (sectionRes.data.success)
            setSectionDetails(sectionRes.data.sections);
        }
      } catch (err: unknown) {
        const axiosError = err as AxiosError<{ message: string }>;
        toast.error(axiosError.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmapDetails();
  }, [roadmapId, isAuthenticated]);

  if (loading) return <RoadmapDetailsLoading />;

  const title = isAuthenticated
    ? userProgress?.roadmap.title
    : roadmapDetails?.title;
  const description = isAuthenticated
    ? userProgress?.roadmap.description
    : roadmapDetails?.description;

  return (
    <>
      <div className="pt-24 pb-10">
        <div
          className={`container mx-auto px-4 grid grid-cols-1 ${
            isAuthenticated ? "sm:grid-cols-4 md:grid-cols-4" : "sm:grid-cols-3"
          } gap-6`}
        >
          <RoadmapContentsList
            isAuthenticated={isAuthenticated}
            sectionDetails={sectionDetails}
            userProgress={userProgress}
          />

          <div className="lg:col-span-2 flex flex-col">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-base sm:text-lg font-bold text-muted-foreground mb-5 text-center sm:text-left">
              {description}
            </p>

            {isAuthenticated && (
              <ExportBTN
                exportToCSV={() =>
                  exportHelper(String(roadmapId), title ?? "", "csv", "roadmap")
                }
                exportToJSON={() =>
                  exportHelper(
                    String(roadmapId),
                    title ?? "",
                    "json",
                    "roadmap",
                  )
                }
                exportToPDF={() =>
                  exportHelper(String(roadmapId), title ?? "", "pdf", "roadmap")
                }
                id={String(roadmapId!)}
                title={title ?? ""}
              />
            )}

            <RoadmapDetailsSections
              userProgress={userProgress}
              isAuthenticated={isAuthenticated}
              setUserProgress={setUserProgress}
              sectionDetails={sectionDetails}
            />
          </div>

          {isAuthenticated && userProgress && (
            <ProgressCircle userProgress={userProgress} />
          )}
        </div>
      </div>

      {showCongrats && (
        <Modal
          title="Congratulations!"
          isOpen={showCongrats}
          onClose={() => setShowCongrats(false)}
        >
          <CongratsWindowModule userProgress={userProgress!} />
        </Modal>
      )}
    </>
  );
};

export default Page;
