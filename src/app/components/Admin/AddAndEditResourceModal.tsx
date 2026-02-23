"use client";
import { AddAndEditResourceModalProps } from "@/app/types/admin";
import { resourcesTypeSectionProps } from "@/app/types/roadmap";
import { useState } from "react";
import DropDownMenu from "../UI/DropDownMenu";
import { isValidUrl } from "@/app/helper";
const AddAndEditResourceModal = ({
  mode,
  Type,
  title,
  url,
}: AddAndEditResourceModalProps) => {
  const [currentTitle, setCurrentTitle] = useState<string>(
    mode === "ADD" ? "" : title || "",
  );
  const [currentURL, setCurrentURL] = useState<string>(
    mode === "ADD" ? "" : url || "",
  );

  const [currentType, setCurrentType] = useState<resourcesTypeSectionProps>(
    mode === "ADD" ? "video" : Type || "video",
  );

  const handleSubmitModal = () => {
    isValidUrl(url!);
  };

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
      <p className="text-sm sm:text-lg font-bold">URL</p>
      <input
        value={currentURL}
        onChange={(e) => setCurrentURL(e.target.value)}
        type="text"
        id="description"
        placeholder="Enter description"
        className="border border-border bg-background rounded-lg p-2"
      />
      <p className="text-sm sm:text-lg font-bold">Media</p>
      <DropDownMenu
        option={mode === "ADD" ? `select Media` : `${currentType}`}
        optionList={["video", "article", "course"]}
        onChange={(value) => setCurrentType(value as resourcesTypeSectionProps)}
      />

      <button
        onClick={handleSubmitModal}
        className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer hover:scale-105 transition-all gap-2 my-5 w-full max-w-md mx-auto"
      >
        {mode === "ADD" ? `Create Resource` : `Update Resource`}
      </button>
    </div>
  );
};

export default AddAndEditResourceModal;
