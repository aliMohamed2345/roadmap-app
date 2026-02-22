export type difficultySectionProps =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert"
  | "Master";

export type resourcesTypeSectionProps = "video" | "article" | "course";

export interface roadmapDummyDataProps {
  title: string;
  description: string;
  numberOfSections?: number;
  mode?: "roadmap" | "quiz" | "project";
  id: number;
  difficulty?: difficultySectionProps;
  tags?: string[];
  steps?: { title: string; description: string }[];
}

export interface quizDummyDataProps {
  title: string;
  description: string;
  id: number;
  difficulty?: difficultySectionProps;
}

export interface sectionDummyDataProps {
  title: string;
  description: string;
  id: number;
  difficulty: difficultySectionProps;
  resources: {
    url: string;
    type: resourcesTypeSectionProps;
    title: string;
  }[];
}

export interface projectDummyDataProps {
  title: string;
  description: string;
  tags: string[];
  id: number;
  steps: { title: string; description: string }[];
  level: `Beginner` | `Intermediate` | `Advanced`;
}

export interface updateProfileProps {
  username: string;
  bio: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    website: string;
  };
}
