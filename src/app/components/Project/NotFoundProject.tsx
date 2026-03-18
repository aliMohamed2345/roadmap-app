import { NotFoundProjectProps } from "@/app/types/UI";
import { IoSearch } from "react-icons/io5";

const NotFoundProject = ({
  message = "not found",
  clearFilters,
}: NotFoundProjectProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent text-accent-foreground mb-6">
        <IoSearch className="w-10 h-10" />
      </div>
      <h2 className="text-xl font-bold text-foreground mb-2">
        No Projects Found
      </h2>
      <p className="text-muted-foreground max-w-md">
        {message ||
          "We couldn’t find any projects matching your search or selected level. Try adjusting your filters or explore other categories."}
      </p>
      <button
        onClick={clearFilters}
        className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default NotFoundProject;
