import Link from 'next/link'
import { IoBookOutline } from 'react-icons/io5';
const MainTitle = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-primary">
        <IoBookOutline className="h-4 w-4 text-white" />
      </span>
      <p className="font-bold text-lg sm:text-2xl ">LearnPath</p>
    </Link>
  );
};

export default MainTitle;
