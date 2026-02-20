"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { IoCopyOutline } from "react-icons/io5";

import { roadmapDummyData, sectionDummyData } from "@/app/data";
import {
  difficultySectionProps,
  resourcesTypeSectionProps,
} from "@/app/types/roadmap";
import { useState } from "react";

const Page = () => {
  const { roadmapId } = useParams();
  const [isSectionComplete, setIsSectionComplete] = useState<boolean[]>(
    Array.from(sectionDummyData).map(() => false),
  );
  const roadmap =
    roadmapDummyData.find((r) => r.id === +roadmapId!) || roadmapDummyData[0];

  const iconDependingOnType = (type: resourcesTypeSectionProps) => {
    switch (type) {
      case "article":
        return <MdOutlineArticle size={20} />;
      case "video":
        return <FiVideo size={20} />;
      case "course":
        return <IoBookOutline size={20} />;
    }
  };
  const styleDependingOnDifficulty = (difficulty: difficultySectionProps) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-chart-5";
      case "Intermediate":
        return "bg-chart-2";
      case "Advanced":
        return "bg-chart-4";
      case "Expert":
        return "bg-chart-3";
    }
  };

  const toggleCompletionSection = (index: number) => {
    const newIsSectionComplete = [...isSectionComplete];
    newIsSectionComplete[index] = !newIsSectionComplete[index];
    setIsSectionComplete(newIsSectionComplete);
  };
  return (
    <div className="min-h-screen bg-background pt-24 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-card border border-border transition-all hover:border-primary rounded-xl p-5 h-fit hidden sm:block">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/roadmap"
              className="p-2 rounded-lg hover:bg-muted transition"
            >
              <FaArrowLeft size={18} />
            </Link>
            <h3 className="font-semibold text-lg">Contents</h3>
          </div>

          <div className="flex flex-col gap-3">
            {sectionDummyData
              .slice(0, roadmap.numberOfSections)
              .map((section, index) => (
                <button
                  key={index}
                  className="text-left text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-lg transition cursor-pointer"
                >
                  {section.title}
                </button>
              ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col">
          <Link
            href={`/roadmap`}
            className="p-2 rounded-lg hover:bg-muted flex items-center gap-1 w-fit my-4 sm:hidden"
          >
            <FaArrowLeft />
            Back To Roadmap
          </Link>
          <h1 className="text-lg sm:text-4xl font-bold text-foreground text-center sm:text-left">
            {roadmap.title}
          </h1>

          <p className="text-muted-foreground text-sm sm:text-lg mt-3 mb-6 max-w-2xl text-center sm:text-left">
            {roadmap.description}
          </p>
          <div className="flex justify-center my-4">
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-2 shadow-sm">
              <button className="group flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg bg-muted hover:bg-secondary text-foreground hover:text-secondary-foreground transition-all duration-300 hover:scale-105 active:scale-95">
                <PiExportBold className="text-lg group-hover:rotate-6 transition-transform duration-300" />
                <span className="font-medium text-sm">Export</span>
              </button>

              <button
                onClick={() => navigator.clipboard.writeText(document.URL)}
                className="group flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg bg-linear-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <IoCopyOutline className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                <span className="font-medium text-sm">Copy Link</span>
              </button>
            </div>
          </div>

          <div className="h-px w-full bg-border mb-6" />

          <div className="flex flex-col gap-6">
            {sectionDummyData.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-3 sm:p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1 items-center">
                    <button
                      className={`text-primary p-1 rounded-full hover:bg-muted transition-all cursor-pointer`}
                      onClick={() => toggleCompletionSection(index)}
                    >
                      {isSectionComplete.at(index) ? (
                        <MdOutlineRadioButtonChecked size={25} />
                      ) : (
                        <MdOutlineRadioButtonUnchecked size={25} />
                      )}
                    </button>
                    <h2 className="sm:text-xl font-semibold text-sm">
                      {section.title}
                    </h2>
                  </div>

                  <span
                    className={`text-secondary-foreground text-xs px-3 py-1 rounded-full ${styleDependingOnDifficulty(section.difficulty)}`}
                  >
                    {section.difficulty}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 text-xs sm:text-base text-center sm:text-left">
                  {section.description}
                </p>

                <div className="flex flex-col gap-2">
                  {section.resources.map((resource, i) => (
                    <Link
                      href={resource.url}
                      target={"_blank"}
                      key={i}
                      className="flex group items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all hover:bg-muted p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {iconDependingOnType(resource.type)}
                        <div className="flex-col gap-1">
                          <span className="transition cursor-pointer">
                            {resource.title}
                          </span>
                          <p className="text-xs">{resource.type}</p>
                        </div>
                      </div>
                      <FaExternalLinkAlt className="hidden group-hover:block" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6 my-10">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-8 border-muted" />
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                0%
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              Overall Progress
            </p>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Resources: 0 / 7 Complete</p>
              <p>Sections: {roadmap.numberOfSections}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
