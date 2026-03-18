import { ReactNode, SetStateAction, Dispatch } from "react";
import { userProgressProps, UserProps, UsersProps } from "./api";
import { sectionDataProps } from "./roadmap";
export interface AuthInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export interface AuthSubmitButtonProps {
  text: string;
  loading: boolean;
  onHandleSubmit: () => void;
}

export interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string;
}

export interface ProfileWindowProps {
  openProfile: boolean;
  user: UserProps;
  setOpenProfile: Dispatch<SetStateAction<boolean>>;
}

export interface UserActionsProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  handleDelete: () => void;
  handleEditProfile: () => void;
  handleToggleRole: () => void;
  handleViewProfile: () => void;
}

export interface WindowProps {
  open: boolean;
  userId?: string;
}

export interface UsersNotFoundProps {
  searchQuery?: string;
  onReset?: () => void;
}

export interface DropDownMenuProps {
  option: string;
  onChange: (value: string) => void;
  optionList: string[];
}

export interface EditProfileModalProps {
  profile: UserProps;
  setEditProfile: Dispatch<SetStateAction<boolean>>;
  setUsersData?: Dispatch<SetStateAction<UsersProps>>;
}

export interface ExportBTNProps {
  id: string;
  title: string;
  exportToJSON: (roadmapId: string, roadmapTitle: string) => void;
  exportToCSV: (roadmapId: string, roadmapTitle: string) => void;
  exportToPDF: (roadmapId: string, roadmapTitle: string) => void;
}

export interface RoadmapDetailsSectionsProps {
  sectionDetails?: sectionDataProps[];
  isAuthenticated: boolean;
  userProgress?: userProgressProps;
  setUserProgress: React.Dispatch<
    React.SetStateAction<userProgressProps | undefined>
  >;
}

export interface NotFoundQuestionsProps {
  onAddQuestion: () => void;
}

export interface EmptyTabProps {
  message: string;
  linkUrl?: string;
}

export interface ProfileImageUploaderProps {
  alt?: string;
  initialImage?: string;
  setOpenImage: Dispatch<SetStateAction<boolean>>;
  setProfile: Dispatch<SetStateAction<UserProps | null>>;
}

export interface NotFoundProjectProps {
  message?: string;
  clearFilters?: () => void;
}

export interface RoadmapContentsListProps {
  isAuthenticated: boolean;
  userProgress?: userProgressProps;
  sectionDetails?: sectionDataProps[];
}
