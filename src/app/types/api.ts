import { QuestionItemProps } from "./quiz";
import { difficultySectionProps, resourcesTypeSectionProps } from "./roadmap";
export interface FiltersProps {
  q?: string;
  isAdmin?: boolean;
  page?: number;
  limit?: number;
  level?: difficultySectionProps;
}
export interface QuestionsFilterProps {
  q?: string;
  page?: number;
  limit?: number;
  random?: boolean;
}

export interface UserProps {
  id?: string;
  _id?: string;
  isAdmin: boolean;
  username?: string;
  email?: string;
  imageURL: string;
  createdAt?: Date;
  updatedAt?:Date
  bio?: string;
  progressData: {
    project: projectProgressDataProps[];
    roadmap: roadmapProgressDataProps[];
    quiz: quizRoadmapProgressDataProps[];
  };
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
  _id:string
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

export interface QuestionProps {
  totalQuestions: number;
  questions: QuestionItemProps[];
  totalPages: number;
  page: number;
}
export type QuizGradeProps = "A+" | "A" | "B" | "C" | "D" | "F";
export type StatusGradeProps = "Failed" | "Passed";

export interface answerDetailsProps {
  correctAnswer: string;
  isCorrect: boolean;
  question: string;
  questionId: string;
  userAnswer: string;
}
export interface quizResultsProps {
  quizId?: string;
  quizTitle: string;
  status: StatusGradeProps;
  grade: QuizGradeProps;
  percentage: number;
  totalQuestions: number;
  wrongAnswers: number;
  correctAnswers: number;
  answerDetails: answerDetailsProps[];
}

export interface UsersProps {
  totalPages: number;
  page?:number
  totalUsers: number;
  users: UserProps[];
}

