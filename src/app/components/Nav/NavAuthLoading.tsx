import { FaUserCircle } from "react-icons/fa";

const NavAuthLoading = () => (
  <div className="flex items-center gap-3 animate-pulse">
    {/* Simulates the Theme toggle button width */}
    <div className="w-8 h-8 rounded-full bg-border" />
    {/* Profile avatar skeleton */}
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-border overflow-hidden">
      <FaUserCircle
        className="text-muted-foreground opacity-30 absolute"
        size={40}
        strokeWidth={1.2}
      />
    </div>
  </div>
);

export default NavAuthLoading