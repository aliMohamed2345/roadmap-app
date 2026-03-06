import { BiTrophy, BiBrain } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FiTarget, FiUsers, FiZap } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {  User } from "./types/roadmap";
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
