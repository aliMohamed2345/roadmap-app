import { MdOutlineArticle } from "react-icons/md";
import { FiltersProps } from "./types/api";
import {
  difficultySectionProps,
  resourcesTypeSectionProps,
} from "./types/roadmap";
import { FiVideo } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
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