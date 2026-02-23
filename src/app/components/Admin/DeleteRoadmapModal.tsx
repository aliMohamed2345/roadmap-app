import { DeleteModalProps } from "@/app/types/admin";
const DeleteModal = ({ onCancel, mode }: DeleteModalProps) => {
  return (
    <div>
      <p className="text-lg sm:text-xl font-bold text-center">
        Are you sure you want to delete{" "}
        {mode === "roadmap"
          ? "Roadmap"
          : mode === "section"
            ? "Section"
            : mode === "resource"
              ? "Resource"
              : mode === "question"
                ? "Question"
                : "Quiz"}
      </p>
      <div className="flex justify-end items-center gap-4 mt-5">
        <button
          onClick={() => onCancel(false)}
          className="px-5 py-2.5 cursor-pointer rounded-xl border border-border bg-card text-foreground font-medium transition-all duration-200 hover:bg-border active:scale-95"
        >
          Cancel
        </button>

        <button className="px-5 py-2.5 cursor-pointer rounded-xl bg-destructive text-destructive-foreground font-semibold shadow-md transition-all duration-200 hover:bg-destructive/90 hover:shadow-lg active:scale-95">
          Delete{" "}
          {mode === "roadmap"
            ? "Roadmap"
            : mode === "section"
              ? "Section"
              : mode === "resource"
                ? "Resource"
                : mode === "question"
                  ? "Question"
                  : "Quiz"}
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
