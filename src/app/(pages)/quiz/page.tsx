import RoadmapOrQuizItem from "@/app/components/Roadmap/RoadmapItem";
import { quizDummyData } from "@/app/data";
import { MdOutlineQuiz } from "react-icons/md";

const page = () => {
  return (
    <div className="container mx-auto px-2 pt-20">
      <div className="text-center">
        <MdOutlineQuiz
          size={70}
          className=" mx-auto rounded-xl text-white bg-linear-to-br from-neon-cyan to-neon-purple p-2"
        />
        <h1 className="text-lg sm:text-3xl md:text-5xl font-bold my-5">
          Available Quizzes
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl">
          Test your knowledge with our collection of quizzes. Each quiz contains
          multiple-choice questions to help you assess your understanding.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center my-5">
        {quizDummyData.map((quiz, i) => (
          <RoadmapOrQuizItem
            title={quiz.title}
            description={quiz.description}
            id={quiz.id}
            mode="quiz"
            difficulty={quiz.difficulty}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
