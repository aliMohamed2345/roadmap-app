import { difficultySectionProps, resourcesTypeSectionProps } from "./roadmap";

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
  imageURL: string;
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

export interface resourceProps {
  id: string;
  _id?: string;
  url: string;
  type: resourcesTypeSectionProps;
  title: string;
}

export interface sectionProps {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  difficulty?: difficultySectionProps;
  resources: resourceProps[];
}

export interface roadmapProps {
  title: string;
  description: string;
  numberOfSections?: number;
  id: string;
  sections: sectionProps[] | string[];
  _id?: string;
}

export interface userProgressProps {
  total?: number;
  completed?: number;
  progressPercentage?: number;
  roadmap: roadmapProps;
  sections: sectionProps[];
}
