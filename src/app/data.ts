import { BiTrophy, BiBrain } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FiTarget, FiUsers, FiZap } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {
  projectDummyDataProps,
  quizDummyDataProps,
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

export const quizDummyData: quizDummyDataProps[] = [
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Beginner",
    id: "10",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Intermediate",
    id: "11",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Advanced",
    id: "12",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Expert",
    id: "13",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Master",
    id: "14",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Beginner",
    id: "15",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Expert",
    id: "16",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Intermediate",
    id: "17",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Master",
    id: "18",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Expert",
    id: "19",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Beginner",
    id: "20",
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    rank: "Master",
    id: "21",
  },
];

export const questionDummyData = [
  {
    questionId: 2332,
    questionNumber: 1,
    question:
      "What is the main purpose of environment variables in an application?",
    answers: [
      "To store sensitive configuration outside the source code",
      "To increase application UI performance",
      "To replace the database",
      "To style the frontend",
    ],
    correctAnswer: "To store sensitive configuration outside the source code",
  },
  {
    questionId: 3314,
    questionNumber: 2,
    question:
      "Which file is commonly used to define environment variables locally?",
    answers: [".gitignore", "package.json", ".env", "README.md"],
    correctAnswer: ".env",
  },
  {
    questionId: 4105,
    questionNumber: 3,
    question: "Why should you avoid committing .env files to GitHub?",
    answers: [
      "It slows down the repository",
      "It exposes sensitive information like API keys",
      "It breaks the build process",
      "It increases bundle size",
    ],
    correctAnswer: "It exposes sensitive information like API keys",
  },
  {
    questionId: 3105,
    questionNumber: 4,
    question:
      "What is a common example of sensitive data stored in environment variables?",
    answers: ["CSS styles", "API keys", "HTML templates", "Component props"],
    correctAnswer: "API keys",
  },
  {
    questionId: 5106,
    questionNumber: 5,
    question:
      "In production, where are environment variables usually configured?",
    answers: [
      "Inside the source code files",
      "In the deployment platform settings (e.g., server or hosting provider)",
      "In the browser console",
      "Inside node_modules",
    ],
    correctAnswer:
      "In the deployment platform settings (e.g., server or hosting provider)",
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
