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

export interface roadmapProgressDataProps {
  roadmap: string;
  completedSections: string[];
  numberOfAllSections: number[];
}

export interface quizRoadmapProgressDataProps {
  quiz: string;
  percentage: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  grade: string;
  status: string;
  createdAt: Date;
}

export interface projectProgressDataProps {
  project: string;
  completedSteps: string[];
  totalSteps: number;
  completedCount: number;
  createdAt: Date;
}

export interface profileProps {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  bio: string;
  isAdmin: boolean;
  imageURL: string;
  progressData: {
    roadmap: roadmapProgressDataProps[];
    quiz: quizRoadmapProgressDataProps[];
    project: projectProgressDataProps[];
  };
}

export interface changePasswordProps {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}
