import { difficultySectionProps } from "./roadmap";

export interface FiltersProps {
  q?: string;
  isAdmin?: boolean;
  page?: number;
  limit?: number;
  level?: difficultySectionProps;
}
