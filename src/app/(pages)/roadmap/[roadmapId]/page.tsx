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
import { sectionDataProps } from "@/app/types/roadmap";
import {
  exportHelper,
} from "@/app/helper";

const Page = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const { roadmapId } = useParams();

  const [roadmapDetails, setRoadmapDetails] = useState<roadmapProps>();
  const [userProgress, setUserProgress] = useState<userProgressProps>();
  const [sectionDetails, setSectionDetails] = useState<sectionDataProps[]>();
  const [loading, setLoading] = useState(true);
  const [openCongratsModal, setOpenCongratsModal] = useState(false);
  useEffect(() => {
    const isCompleted =
      userProgress?.total ||
      (0 > 0 && userProgress?.completed === userProgress?.total);

    const storageKey = `roadmap-${roadmapId}-completed`;
    const alreadyShown = localStorage.getItem(storageKey);

    if (isCompleted && !alreadyShown) {
      setOpenCongratsModal(true);
      localStorage.setItem(storageKey, "true");
    }
  }, [userProgress?.completed, userProgress?.total, roadmapId]);

  useEffect(() => {
    const fetchRoadmapDetails = async () => {
      try {
        if (isAuthenticated) {
          const roadmapRes = await RoadmapApiAxiosInstance.get(
            apiRoutes.Roadmap.getProgress.route(roadmapId?.toString() || "1"),
          );
          if (roadmapRes.data.success) {
            setUserProgress(roadmapRes.data);
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

          if (roadmapRes.data.success) {
            setRoadmapDetails(roadmapRes.data.roadmap);
          }
          if (sectionRes.data.success) {
            setSectionDetails(sectionRes.data.sections);
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

      {openCongratsModal && (
        <Modal
          title="Congratulations"
          isOpen={openCongratsModal}
          onClose={() => setOpenCongratsModal(false)}
        >
          <CongratsWindowModule userProgress={userProgress!} />
        </Modal>
      )}
    </>
  );
};

export default Page;
