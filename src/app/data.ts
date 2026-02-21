import { BiTrophy, BiBrain } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FiTarget, FiZap } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {
  projectDummyDataProps,
  quizDummyDataProps,
  roadmapDummyDataProps,
  sectionDummyDataProps,
} from "./types/roadmap";
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

export const quizDummyData: quizDummyDataProps[] = [
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Beginner",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Intermediate",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Advanced",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Expert",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Master",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Beginner",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Expert",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Intermediate",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Master",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Expert",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Beginner",
    id: 10,
  },
  {
    title: `JavaScript Fundamentals`,
    description: `Test your knowledge of JavaScript basics including variables, functions, closures, and ES6+ features.`,
    difficulty: "Master",
    id: 10,
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

export const projectDummyData: projectDummyDataProps[] = [
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Intermediate`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Advanced`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Intermediate`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Advanced`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
  {
    title: `Personal Portfolio Website`,
    description: `Build a modern, responsive portfolio website showcasing your work and skills. Learn HTML, CSS, and JavaScript fundamentals.`,
    level: `Beginner`,
    tags: ["JavaScript", "HTML", "CSS"],
    id: 593,
    steps: [
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
      {
        title: `Step 1: Project Setup & Planning`,
        description: `Set up your development environment, create the project structure, and plan your portfolio layout.`,
      },
    ],
  },
];
