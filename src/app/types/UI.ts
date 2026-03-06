import { ReactNode, SetStateAction, Dispatch } from "react";
import { UserProps, UsersProps } from "./api";
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
