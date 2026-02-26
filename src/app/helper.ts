import { FiltersProps } from "./types/api";

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
