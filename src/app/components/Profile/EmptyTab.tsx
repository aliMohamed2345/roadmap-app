import { EmptyTabProps } from "@/app/types/UI";
import Link from "next/link";
import { FaInbox } from "react-icons/fa";

const EmptyTab = ({
  message,
  linkUrl,
}: EmptyTabProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-10 shadow-sm">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted/50">
        <FaInbox className="text-muted-foreground text-2xl" />
      </div>

      <p className="text-muted-foreground text-sm font-medium max-w-sm">
        {message}
      </p>

      {linkUrl && (
        <Link
          href={`/${linkUrl}`}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground hover:bg-primary transition-all shadow-sm hover:text-white w-full max-w-xs justify-center"
        >
          Go to {linkUrl[0].toUpperCase() + linkUrl.slice(1)} Page
        </Link>
      )}
    </div>
  );
};

export default EmptyTab;
