import { IoSparkles } from "react-icons/io5";
import Link from 'next/link'
const CongratsProjectMessageModal = () => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink animate-pulse shadow-lg">
          <IoSparkles className="text-white w-10 h-10 animate-bounce" />
        </div>
      </div>

      <h3 className="text-2xl font-bold bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
        🎉 Congratulations!
      </h3>

      <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
        You’ve completed all steps of this project! Great job putting your skills
        into practice. Keep building, keep exploring, and let your creativity shine.
      </p>

      <Link
      href={"/project"}
        className="mt-4 px-6 py-2 rounded-xl font-semibold bg-linear-to-r from-neon-cyan to-neon-purple text-white shadow-md hover:scale-105 transition-transform"
      >
        Start a New Project 🚀
      </Link>
    </div>
  );
};

export default CongratsProjectMessageModal;