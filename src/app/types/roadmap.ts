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
  mode?: "roadmap" | "quiz";
  id: number;
  difficulty?:difficultySectionProps
}
export interface quizDummyDataProps {
  title: string;
  description: string;
  id: number;
  difficulty?:difficultySectionProps
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
