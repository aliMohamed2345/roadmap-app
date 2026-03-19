"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import QuizTabLoading from "./QuizTabLoading";
import { difficultyStyle } from "../Roadmap/RoadmapItem";
import {
  ActiveProjectModalState,
  ModalPayload,
  ProjectModalType,
  ProjectProps,
  StepProps,
} from "@/app/types/admin";
import ProjectActiveModal from "./ProjectActiveModal";
import ProjectNotFound from "./ProjectNotFound";

const ProjectsTab = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [loadingSteps, setLoadingSteps] = useState(false);

  const [stepsMap, setStepsMap] = useState<Record<string, StepProps[]>>({});

  const [activeModal, setActiveModal] = useState<ActiveProjectModalState>({
    type: null,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await RoadmapApiAxiosInstance.get(
          apiRoutes.Project.getAllProjects.route({}),
        );
        if (res.data.success) setProjects(res.data.projects);
      } catch (err) {
        const axiosError = err as AxiosError<{ message: string }>;
        toast.error(
          axiosError.response?.data?.message ?? "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleOpenProject = async (isOpen: boolean, project: ProjectProps) => {
    setOpenProject(isOpen ? null : (project._id ?? ""));
    if (isOpen || !project._id) return;

    setLoadingSteps(true);
    try {
      const res = await RoadmapApiAxiosInstance.get(
        apiRoutes.Steps.getAllSteps.route(project._id),
      );
      if (res.data.success) {
        setStepsMap((prev) => ({
          ...prev,
          [project._id!]: res.data.steps,
        }));
      }
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      if (axiosError.response?.status === 404) {
        setStepsMap((prev) => ({ ...prev, [project._id!]: [] }));
      } else {
        toast.error(
          axiosError.response?.data?.message ?? "Something went wrong",
        );
      }
    } finally {
      setLoadingSteps(false);
    }
  };

  const toggleModal = (
    e: React.MouseEvent,
    payload?: ModalPayload,
    type?: ProjectModalType,
  ) => {
    e.stopPropagation();
    setActiveModal({ type: type ?? null, payload });
  };

  if (loading) return <QuizTabLoading />;

  return (
    <>
      <div className="space-y-6 my-10">
        <div className="flex justify-between items-center">
          <h4 className="sm:text-xl text-lg font-bold">
            Projects ({projects.length})
          </h4>
          <button
            onClick={(e) => toggleModal(e, undefined, "ADD_PROJECT")}
            className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer hover:scale-105 transition-all flex items-center gap-2"
          >
            <FaPlus /> New Project
          </button>
        </div>

        {projects.map((project) => {
          const isOpen = openProject === project._id;
          const steps = stepsMap[project._id ?? ""] ?? [];

          return (
            <motion.div
              key={project._id}
              layout
              className="rounded-2xl transition-all border bg-card text-card-foreground shadow-sm border-border"
            >
              <div
                className="flex sm:items-center justify-between p-5 cursor-pointer flex-col sm:flex-row items-end gap-4"
                onClick={() => handleOpenProject(isOpen, project)}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronRight size={25} />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-base sm:text-xl hover:text-primary transition">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${difficultyStyle(project.difficulty)}`}
                      >
                        {project.difficulty}
                      </span>
                      {(project.tags?.length ?? 0) > 0 && (
                        <span className="text-xs text-muted-foreground">
                          {project.tags?.length} tag
                          {project.tags!.length !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <FiEdit2
                    size={27}
                    onClick={(e) => toggleModal(e, project, "EDIT_PROJECT")}
                    className="hover:text-primary cursor-pointer rounded-lg hover:bg-primary/20 p-1 transition-all"
                  />
                  <FiTrash2
                    size={27}
                    onClick={(e) => toggleModal(e, project, "DELETE_PROJECT")}
                    className="hover:text-destructive cursor-pointer rounded-lg hover:bg-destructive/20 p-1 transition-all"
                  />
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`project-content-${project._id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="px-5 pb-5 space-y-5">
                      {project.description && (
                        <p className="text-sm text-muted-foreground pt-4">
                          {project.description}
                        </p>
                      )}

                      {(project.tags?.length ?? 0) > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="bg-primary/10 text-primary border border-primary/30 rounded-full px-3 py-1 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {loadingSteps ? (
                        <AiOutlineLoading3Quarters
                          className="w-6 h-6 animate-spin mx-auto my-5 text-primary font-bold"
                          size={25}
                        />
                      ) : (
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">
                            Steps ({steps.length})
                          </h4>
                          <button
                            onClick={(e) =>
                              toggleModal(e, { ...project }, "ADD_STEP")
                            }
                            className="flex items-center gap-2 cursor-pointer border-border text-sm px-3 py-1.5 rounded-lg border hover:bg-muted transition"
                          >
                            <FiPlus size={14} /> Add Step
                          </button>
                        </div>
                      )}

                      <div className="space-y-2">
                        {steps.map((step) => (
                          <motion.div
                            key={step._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex justify-between items-start p-3 rounded-lg bg-card border border-border flex-col sm:flex-row gap-3"
                          >
                            <div className="flex items-start gap-3 text-sm flex-1 min-w-0">
                              <FaRegFileAlt className="text-primary mt-0.5 shrink-0" />
                              <div className="min-w-0">
                                <p className="font-medium">{step.title}</p>
                                {step.description && (
                                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                    {step.description}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-muted-foreground shrink-0">
                              <FiEdit2
                                size={22}
                                onClick={(e) =>
                                  toggleModal(
                                    e,
                                    {
                                      ...project,
                                      stepId: step._id,
                                      stepTitle: step.title,
                                      stepDescription: step.description,
                                    },
                                    "EDIT_STEP",
                                  )
                                }
                                className="hover:text-primary cursor-pointer rounded-lg hover:bg-primary/20 p-1 transition-all"
                              />
                              <FiTrash2
                                size={22}
                                onClick={(e) =>
                                  toggleModal(
                                    e,
                                    { ...project, stepId: step._id },
                                    "DELETE_STEP",
                                  )
                                }
                                className="hover:text-destructive cursor-pointer rounded-lg hover:bg-destructive/20 p-1 transition-all"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {projects.length === 0 && <ProjectNotFound toggleModal={toggleModal} />}
      </div>

      <ProjectActiveModal
        modal={activeModal}
        onClose={() => setActiveModal({ type: null })}
        setProjects={setProjects}
        setStepsMap={setStepsMap}
      />
    </>
  );
};

export default ProjectsTab;
