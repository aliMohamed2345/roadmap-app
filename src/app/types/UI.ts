import { ReactNode, SetStateAction, Dispatch } from "react";
import { UserProps } from "./api";
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
