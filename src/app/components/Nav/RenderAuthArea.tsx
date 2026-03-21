'use client'
import NavAuthLoading from "./NavAuthLoading";
import Theme from "./Theme";
import ProfileWindow from "./ProfileWindow";
import Link from "next/link";
import { RenderAuthAreaProps } from "@/app/types/UI";
const RenderAuthArea = ({
  loading,
  user,
  isAuthenticated,
  openProfile,
  setOpenProfile,
  dropdownRef,
}: RenderAuthAreaProps) => {
  if (loading) {
    return <NavAuthLoading />;
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-3" ref={dropdownRef}>
        <Theme />
        <ProfileWindow
          setOpenProfile={setOpenProfile}
          openProfile={openProfile}
          user={user}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Theme />
      <Link
        href="/auth"
        className="text-white text-xs sm:text-lg md:text-xl bg-linear-to-br from-neon-cyan to-neon-purple p-2 rounded-lg hover:scale-105 transition-all"
      >
        Get Started
      </Link>
    </div>
  );
};

export default RenderAuthArea;
