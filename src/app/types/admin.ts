import { difficultySectionProps, resourcesTypeSectionProps } from "./roadmap";
import { Dispatch, SetStateAction } from "react";
import { WindowProps } from "./UI";
import { UsersProps } from "./api";

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

export interface DeleteModalProps {
  onCancel: Dispatch<SetStateAction<boolean>>;
  mode: `roadmap` | `section` | `resource` | `quiz` | `question`;
}

export type roleTypeProps = "User" | "Admin" | "select a role";

export interface ActiveModalProps {
  modal: ActiveModalStateProps;
  onClose: () => void;
}

export interface ActiveQuizModalProps {
  modal: ActiveQuizModalStateProps;
  onClose: () => void;
}

export interface AddAndEditQuizModalProps {
  mode: "ADD" | "EDIT";
  title?: string;
  description?: string;
  rank?: difficultySectionProps;
}

export interface DeleteUserModalProps {
  onCancel: Dispatch<SetStateAction<WindowProps>>;
  setUserData: Dispatch<SetStateAction<UsersProps>>;
  userId: string;
}
