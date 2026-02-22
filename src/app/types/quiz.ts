export interface QuestionItemProps {
  question: string;
  questionId: string;
  answers: string[];
  questionNumber: number;
  selectedAnswer?: string;
  onSelectAnswer: (questionId: string, answer: string) => void;
}

export type tabsTypesProps = "Quizzes" | "Learning" | "Projects";
