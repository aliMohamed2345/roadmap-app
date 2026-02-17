export interface AuthInputProps{
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export interface AuthSubmitButtonProps {
  text: string;
  onHandleSubmit: () => void;
}

export interface AuthHeaderProps{
    title:string; 
    subtitle:string
}