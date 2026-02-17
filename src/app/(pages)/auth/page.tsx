import { IoBookOutline } from "react-icons/io5";
import Link from "next/link";
import AuthWindow from "@/app/components/Auth/AuthWindow";
const Auth = () => {
  return (
    <div className="container mx-auto px-2 ">
      <div className="absolute inset-1/2 -translate-1/2 w-125 h-fit flex items-center flex-col gap-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-primary">
            <IoBookOutline className="h-4 w-4 text-white" />
          </span>
          <p className="font-bold text-lg sm:text-2xl ">LearnPath</p>
        </Link>
        <AuthWindow />
      </div>
    </div>
  );
};

export default Auth;
