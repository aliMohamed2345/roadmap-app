"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

import { roadmapDummyData, sectionDummyData } from "@/app/data";
import {
  difficultySectionProps,
  resourcesTypeSectionProps,
} from "@/app/types/roadmap";

const Page = () => {
  const { roadmapId } = useParams();

  const roadmap =
    roadmapDummyData.find((r) => r.id === +roadmapId!) || roadmapDummyData[0];

  const totalSections = roadmap.numberOfSections;
  
  const [isSectionComplete, setIsSectionComplete] = useState<boolean[]>(
    Array.from({ length: totalSections! }).map(() => false),
  );

  const toggleCompletionSection = (index: number) => {
    setIsSectionComplete((prev) =>
      prev.map((item, i) => (i === index ? !item : item)),
    );
  };

  const completedSections = useMemo(() => {
    return isSectionComplete.filter(Boolean).length;
  }, [isSectionComplete]);

  const percentage = useMemo(() => {
    if (!totalSections) return 0;
    return Math.round((completedSections / totalSections) * 100);
  }, [completedSections, totalSections]);

  const progress = useMotionValue(0);

  const progressNumber = useTransform(progress, (v) => Math.round(v));

  animate(progress, percentage, {
    type: "spring",
    stiffness: 120,
    damping: 20,
  });

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

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

  return (
    <div className="pt-24 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-card border border-border rounded-xl p-5 h-fit hidden sm:block">
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
            {sectionDummyData.slice(0, totalSections).map((section, index) => (
              <button
                key={index}
                className="text-left cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-lg transition"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6 my-10">
          <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-md">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="transform -rotate-90" width="128" height="128">
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  strokeWidth="10"
                  className="stroke-muted"
                  fill="transparent"
                />

                <motion.circle
                  cx="64"
                  cy="64"
                  r={radius}
                  strokeWidth="10"
                  fill="transparent"
                  stroke="url(#gradient)"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={useTransform(
                    progress,
                    (v) => circumference - (v / 100) * circumference,
                  )}
                />

                <defs>
                  <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                <motion.span>{progressNumber}</motion.span>%
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              Overall Progress
            </p>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                Sections Completed: {completedSections} / {totalSections}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            {roadmap.title}
          </h1>

          <div className="flex flex-col gap-6">
            {sectionDummyData.slice(0, totalSections).map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => toggleCompletionSection(index)}
                      className="text-primary p-1 cursor-pointer rounded-full hover:bg-muted transition"
                    >
                      {isSectionComplete[index] ? (
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
                    className={`text-secondary-foreground text-xs px-3 py-1 rounded-full ${styleDependingOnDifficulty(
                      section.difficulty,
                    )}`}
                  >
                    {section.difficulty}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 text-xs sm:text-base">
                  {section.description}
                </p>

                <div className="flex flex-col gap-2">
                  {section.resources.map((resource, i) => (
                    <Link
                      href={resource.url}
                      target="_blank"
                      key={i}
                      className="flex group items-center justify-between text-sm text-muted-foreground hover:text-primary transition hover:bg-muted p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {iconDependingOnType(resource.type)}

                        <div>
                          <span>{resource.title}</span>
                          <p className="text-xs">{resource.type}</p>
                        </div>
                      </div>

                      <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
