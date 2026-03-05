import {
  difficultySectionProps,
  quizProps,
  resourcesTypeSectionProps,
} from "./roadmap";
import { Dispatch, SetStateAction } from "react";
import { WindowProps } from "./UI";
import { QuestionProps, UsersProps } from "./api";
import { QuestionItemProps } from "./quiz";

export interface AddAndEditResourceModalProps {
  mode: "ADD" | "EDIT";
  url?: string;
  Type?: resourcesTypeSectionProps;
  title?: string;
}

export interface AddAndEditRoadmapModalProps {
  mode: "ADD" | "EDIT";
  title?: string;
  description?: string;
}

export interface AddAndEditSectionModalProps {
  mode: "ADD" | "EDIT";
  title?: string;
  description?: string;
  difficulty?: difficultySectionProps;
}

export interface AddAndEditQuestionModalProps {
  mode: `ADD` | `EDIT`;
  question?: string;
  answers?: string[];
  correctAnswer?: string;
  setQuestions: Dispatch<SetStateAction<QuestionProps>>;
  id: string;
  quizId: string;
  onClose: () => void;
}

export type adminTypeProps = "roadmaps" | "quizzes" | "users";

export type ModalTypeProps =
  | "ADD_ROADMAP"
  | "EDIT_ROADMAP"
  | "DELETE_ROADMAP"
  | "ADD_SECTION"
  | "EDIT_SECTION"
  | "DELETE_SECTION"
  | "ADD_RESOURCE"
  | "EDIT_RESOURCE"
  | "DELETE_RESOURCE"
  | null;

export type ModalQuizTypeProps =
  | "ADD_QUIZ"
  | "EDIT_QUIZ"
  | "DELETE_QUIZ"
  | "ADD_QUESTION"
  | "EDIT_QUESTION"
  | "DELETE_QUESTION"
  | null;

export interface ActiveModalStateProps {
  type: ModalTypeProps;
  payload?: ActiveModalPayloadDataProps;
}

export interface ActiveModalPayloadQuizDataProps {
  title?: string;
  description?: string;
  rank?: difficultySectionProps;
  question?: string;
  answers?: string[];
  correctAnswer?: string;
  _id?: string;
  id?: string;
}

export interface ActiveModalPayloadDataProps {
  title?: string;
  description?: string;
  difficulty?: difficultySectionProps;
  type?: resourcesTypeSectionProps;
  url?: string;
}

export interface ActiveQuizModalStateProps {
  type: ModalQuizTypeProps;
  payload?: ActiveModalPayloadQuizDataProps;
}
export interface ActiveQuestionModalStateProps {
  type: ModalQuizTypeProps;
  payload?: QuestionItemProps;
}

export interface DeleteModalProps {
  onCancel: Dispatch<SetStateAction<boolean>>;
  mode: `roadmap` | `section` | `resource` | `quiz` | `question`;
  questionId?: string;
  setQuizzes: Dispatch<SetStateAction<quizProps[]>>;
  setQuestions: Dispatch<SetStateAction<QuestionProps>>;
  quizId:string
}

export type roleTypeProps = "User" | "Admin" | "select a role";

export interface ActiveModalProps {
  modal: ActiveModalStateProps;
  onClose: () => void;
}

export interface ActiveQuizModalProps {
  modal: ActiveQuizModalStateProps | ActiveQuestionModalStateProps;
  onClose: () => void;
  setQuizzes: Dispatch<SetStateAction<quizProps[]>>;
  setQuestions: Dispatch<SetStateAction<QuestionProps>>;
}

export interface AddAndEditQuizModalProps {
  mode: "ADD" | "EDIT";
  title?: string;
  description?: string;
  rank?: difficultySectionProps;
  onClose: () => void;
  setQuizzes: Dispatch<SetStateAction<quizProps[]>>;
  id?: string;
}

export interface DeleteUserModalProps {
  onCancel: Dispatch<SetStateAction<WindowProps>>;
  setUserData: Dispatch<SetStateAction<UsersProps>>;
  userId: string;
}
