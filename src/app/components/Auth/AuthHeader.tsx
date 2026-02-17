import { AuthHeaderProps } from "@/app/types/UI";
const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => (
  <div className="text-center space-y-1">
    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

export default AuthHeader;
