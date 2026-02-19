import { BiTrophy, BiBrain } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FiTarget, FiZap } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { roadmapDummyDataProps, sectionDummyDataProps } from "./types/roadmap";
export const features = [
  {
    icon: IoBookOutline,
    title: "Curated Learning Paths",
    description:
      "Structured roadmaps with hand-picked resources from industry experts",
  },
  {
    icon: BiTrophy,
    title: "Track Your Progress",
    description:
      "Visual progress tracking, achievements, and milestones to keep you motivated",
  },
  {
    icon: BiBrain,
    title: "Comprehensive Quizzes",
    description:
      "Test your knowledge with quizzes and detailed mistake reviews",
  },
  {
    icon: FiTarget,
    title: "Real Resources",
    description: "Access curated articles, videos, and documentation",
  },
  {
    icon: FiZap,
    title: "AI Assistant",
    description:
      "Get personalized help and suggestions from our intelligent chatbot",
  },
  {
    icon: BiUser,
    title: "Join the Community",
    description: "Compete on leaderboards and share your achievements",
  },
];

export const roadmapDummyData: roadmapDummyDataProps[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: 3,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: 4,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: 5,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: 6,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: 7,
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
];

export const sectionDummyData: sectionDummyDataProps[] = [
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Beginner",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    difficulty: "Intermediate",
    description: `Learn the fundamentals of web structure and styling`,
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Expert",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Beginner",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    id: 10,
    difficulty: "Advanced",
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: 10,
    resources: [
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        title: `HTML Carsh Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
];
