import { useState } from "react";
import DropDownMenu from "../UI/DropDownMenu";
import { difficultySectionProps } from "@/app/types/roadmap";
import { AddAndEditSectionModalProps } from "@/app/types/admin";

const AddAndEditSectionModal = ({
  mode,
  title,
  description,
  difficulty,
}: AddAndEditSectionModalProps) => {
  const [currentTitle, setCurrentTitle] = useState<string>(
    mode === "ADD" ? "" : title || "",
  );
  const [currentDescription, setCurrentDescription] = useState<string>(
    mode === "ADD" ? "" : description || "",
  );
  const [currentDifficulty, setCurrentDifficulty] =
    useState<difficultySectionProps>(
      mode === "ADD" ? "Beginner" : difficulty || "Beginner",
    );
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm sm:text-lg font-bold">Title</p>
      <input
        onChange={(e) => setCurrentTitle(e.target.value)}
        value={currentTitle}
        type="text"
        id="title"
        placeholder="Enter title"
        className="border border-border bg-background rounded-lg p-2"
      />
      <p className="text-sm sm:text-lg font-bold">Description</p>
      <input
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
        type="text"
        id="description"
        placeholder="Enter description"
        className="border border-border bg-background rounded-lg p-2"
      />
      <p className="text-sm sm:text-lg font-bold">Difficulty</p>
      <DropDownMenu
        option={mode === "ADD" ? `select Difficulty` : `${currentDifficulty}`}
        optionList={["Beginner", "Intermediate", "Advanced", "Expert"]}
        onChange={(value) =>
          setCurrentDifficulty(value as difficultySectionProps)
        }
      />

      <button className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer hover:scale-105 transition-all gap-2 my-5 w-full max-w-md mx-auto">
        {mode === "ADD" ? `Create Section` : `Update Section`}
      </button>
    </div>
  );
};

export default AddAndEditSectionModal;
