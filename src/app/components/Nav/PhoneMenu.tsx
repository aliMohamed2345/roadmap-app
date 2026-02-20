"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiRoadMapFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";

const PhoneMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-30 w-full sm:hidden bg-card/90 backdrop-blur-xl border-t border-border">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        <Link
          href={`/roadmap`}
          className={`group relative flex flex-col items-center gap-1 px-3 py-2 transition-all text-muted-foreground hover:text-neon-cyan ${pathname.startsWith("/roadmap") && "text-neon-cyan"}`}
        >
          <RiRoadMapFill
            size={24}
            className={`transition-all duration-300  ${pathname.startsWith("/roadmap") && `scale-110 drop-shadow-neon-cyan`}`}
          />

          <span
            className={`text-xs font-medium transition-all duration-300 ${pathname.startsWith("/roadmap") && `drop-shadow-neon-cyan`}`}
          >
            Roadmaps
          </span>

          <span
            className={`absolute bottom-0 h-1 rounded-full transition-all duration-300group-hover:bg-neon-cyan text-neon-cyan ${pathname.startsWith("/roadmap") ? "w-6 bg-neon-cyan text-neon-cyan shadow-neon-cyan" : "w-1 opacity-40 bg-muted-foreground"}`}
          />
        </Link>

        <Link
          href={`/quiz`}
          className={`group relative flex flex-col items-center gap-1 px-3 py-2 transition-all text-muted-foreground hover:text-neon-purple ${pathname.startsWith("/quiz") && "text-neon-purple"}`}
        >
          <MdQuiz
            size={24}
            className={`transition-all duration-300 ${pathname.startsWith("/quiz") && `scale-110 drop-shadow-neon-purple`}`}
          />
          <span
            className={`text-xs font-medium transition-all duration-300 ${pathname.startsWith("/quiz") && `drop-shadow-neon-purple`}`}
          >
            Quizzes
          </span>

          <span
            className={`absolute bottom-0 h-1 rounded-full transition-all duration-300group-hover:bg-neon-purple ${pathname.startsWith("/quiz") ? "w-6 bg-neon-purple shadow-neon-purple" : "w-1 opacity-40 bg-muted-foreground"} `}
          />
        </Link>
      </div>
    </nav>
  );
};

export default PhoneMenu;
