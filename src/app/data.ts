import { BiTrophy, BiBrain } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FiTarget, FiUsers, FiZap } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {
  quizProps,
  roadmapDummyDataProps,
  sectionDummyDataProps,
  User,
} from "./types/roadmap";
import { FaRegMap } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
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
    id: "234324",
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: "234",
    title: "Frontend Development",
    description: `Master modern frontend technologies from HTML/CSS to React, TypeScript and state management`,
    numberOfSections: 4,
  },
  {
    id: "234",
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
    id: "10",
    resources: [
      {
        id: "23",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "64",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    difficulty: "Intermediate",
    description: `Learn the fundamentals of web structure and styling`,
    id: "11",
    resources: [
      {
        id: "21",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "15",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "24",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: "12",
    resources: [
      {
        id: "24",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "63",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "52",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Expert",
    id: "13",
    resources: [
      {
        id: "92",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "84",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "30",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Beginner",
    id: "14",
    resources: [
      {
        id: "25",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "26",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: "15",
    resources: [
      {
        id: "34",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "34",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "34",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: "16",
    resources: [
      {
        id: "34",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "34",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "34",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    id: "17",
    difficulty: "Advanced",
    resources: [
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: "18",
    resources: [
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "53",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
  {
    title: `HTML&CSS Basics`,
    description: `Learn the fundamentals of web structure and styling`,
    difficulty: "Advanced",
    id: "19",
    resources: [
      {
        id: "21",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "course",
      },
      {
        id: "22",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "video",
      },
      {
        id: "23",
        title: `HTML Crash Course`,
        url: `https://example.com`,
        type: "article",
      },
    ],
  },
];


export const adminTabs = [
  {
    id: "roadmaps",
    label: "Roadmaps",
    icon: FaRegMap,
  },
  {
    id: "quizzes",
    label: "Quizzes",
    icon: IoMdHelpCircleOutline,
  },
  {
    id: "users",
    label: "Users",
    icon: FiUsers,
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "admin_sarah",
    email: "sarah@example.com",
    role: "admin",
    status: "active",
    joined: "8/15/2025",
  },
  {
    id: 2,
    name: "john_dev",
    email: "john@example.com",
    role: "user",
    status: "active",
    joined: "9/1/2025",
  },
  {
    id: 3,
    name: "maria_learns",
    email: "maria@example.com",
    role: "user",
    status: "banned",
    joined: "10/12/2025",
  },
  {
    id: 4,
    name: "alex_code",
    email: "alex@example.com",
    role: "user",
    status: "active",
    joined: "11/3/2025",
  },
  {
    id: 5,
    name: "mod_james",
    email: "james@example.com",
    role: "admin",
    status: "active",
    joined: "7/20/2025",
  },
];
