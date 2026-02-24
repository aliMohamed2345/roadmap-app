import { difficultySectionProps } from "./roadmap";

export interface FiltersProps {
  q?: string;
  isAdmin?: boolean;
  page?: number;
  limit?: number;
  level?: difficultySectionProps;
}

export interface UserProps {
  id: string;
  isAdmin: boolean;
  username?: string;
  email?: string;
}

export interface UserStateProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
