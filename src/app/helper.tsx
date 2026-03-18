import { MdOutlineArticle } from "react-icons/md";
import { FiltersProps, QuizGradeProps } from "./types/api";
import {
  difficultySectionProps,
  resourcesTypeSectionProps,
} from "./types/roadmap";
import { FiVideo } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import RoadmapApiAxiosInstance from "./api/axiosInstance";
import { apiRoutes } from "./api/apiRoutes";
export const isValidUrl = (url: string): boolean => {
  if (!url) return false;

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const convertToQueryString = (filters: FiltersProps) => {
  if (!filters) return;
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;

    if (typeof value === "boolean") {
      params.append(key, value.toString());
      return;
    }

    if (typeof value === "number") {
      params.append(key, value.toString());
      return;
    }

    if (typeof value === "string") {
      params.append(key, value);
      return;
    }

    params.append(key, String(value));
  });

  return params.toString();
};

export const convertDateToYear = (dateString: Date) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);

  const formatted = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return formatted;
};

export const iconDependingOnType = (type: resourcesTypeSectionProps) => {
  switch (type) {
    case "article":
      return <MdOutlineArticle size={20} />;
    case "video":
      return <FiVideo size={20} />;
    case "course":
      return <IoBookOutline size={20} />;
  }
};

export const styleDependingOnDifficulty = (
  difficulty: difficultySectionProps,
) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-chart-5";
    case "Intermediate":
      return "bg-chart-2";
    case "Advanced":
      return "bg-chart-4";
    case "Expert":
      return "bg-chart-3";
  }
};

export const downloadFile = (data: Blob, filename: string) => {
  const url = window.URL.createObjectURL(data);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const getGradeColor = (grade: QuizGradeProps) => {
  if (grade === "A+" || grade === "A") return "bg-chart-5";
  if (grade === "B") return "bg-chart-1";
  if (grade === "C") return "bg-chart-4";
  if (grade === "D") return "bg-chart-2";
  return "bg-destructive";
};

export const exportToJSON = async (
  id: string,
  title: string,
  mode: "roadmap" | "quiz" | "project",
) => {
  try {
    const response = await RoadmapApiAxiosInstance.get(
      mode === "roadmap"
        ? apiRoutes.Roadmap.exportRoadmapToJSON.route(id)
        : mode === "quiz"
          ? apiRoutes.Quiz.exportQuizToJSON.route(id)
          : apiRoutes.Project.exportProjectToJSON.route(id),
      {
        responseType: "blob",
      },
    );

    const blob = new Blob([response.data], {
      type: "application/json",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${title}.json`);

    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed", error);
  }
};

export const exportToCSV = async (
  id: string,
  title: string,
  mode: "roadmap" | "quiz" | "project",
) => {
  const res = await RoadmapApiAxiosInstance.get(
    mode === "roadmap"
      ? apiRoutes.Roadmap.exportRoadmapToCSV.route(id)
      : mode === "quiz"
        ? apiRoutes.Quiz.exportQuizToCSV.route(id)
        : apiRoutes.Project.exportProjectToCSV.route(id),

    { responseType: "blob" },
  );

  downloadFile(res.data, `${title}.csv`);
};

export const exportToPDF = async (
  id: string,
  title: string,
  mode: "roadmap" | "quiz" | "project",
) => {
  const res = await RoadmapApiAxiosInstance.get(
    mode === "roadmap"
      ? apiRoutes.Roadmap.exportRoadmapToPDF.route(id)
      : mode === "quiz"
        ? apiRoutes.Quiz.exportQuizToPDF.route(id)
        : apiRoutes.Project.exportProjectToPDF.route(id),
    { responseType: "blob" },
  );

  const contentDisposition = res.headers["content-disposition"];
  const filename =
    contentDisposition?.split("filename=")[1]?.replace(/"/g, "") ||
    `${title}.pdf`;

  downloadFile(res.data, filename);
};

export const exportHelper = async (
  id: string,
  title: string,
  ext: "pdf" | "csv" | "json",
  type: `roadmap` | `quiz` | `project`,
) => {
  if (type === "roadmap") {
    if (ext === "pdf") {
      await exportToPDF(id, title, type);
    } else if (ext === "csv") {
      await exportToCSV(id, title, type);
    } else if (ext === "json") {
      await exportToJSON(id, title, type);
    }
  }
  if (type === "quiz") {
    if (ext === "pdf") {
      await exportToPDF(id, title, type);
    } else if (ext === "csv") {
      await exportToCSV(id, title, type);
    } else if (ext === "json") {
      await exportToJSON(id, title, type);
    }
  }
  if (type === "project") {
    if (ext === "pdf") {
      await exportToPDF(id, title, type);
    } else if (ext === "csv") {
      await exportToCSV(id, title, type);
    } else if (ext === "json") {
      await exportToJSON(id, title, type);
    }
  }
};
