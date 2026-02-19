export type difficultySectionProps =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";
export type resourcesTypeSectionProps = "video" | "article" | "course";
export interface roadmapDummyDataProps {
  title: string;
  description: string;
  numberOfSections: number;
  id: number;
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
