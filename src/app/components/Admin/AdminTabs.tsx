import { adminTabs } from "@/app/data";
import { adminTypeProps } from "@/app/types/admin";
import { motion } from "framer-motion";
import { AdminTabsProps } from "@/app/types/UI";
const AdminTabs = ({ currentTab, setCurrentTab }: AdminTabsProps) => {
  return (
    <div
      className="relative w-full max-w-xl mx-auto mt-10 bg-card border border-border rounded-2xl p-1.5 shadow-sm grid"
      style={{ gridTemplateColumns: `repeat(${adminTabs.length}, 1fr)` }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1.5 bottom-1.5 rounded-xl bg-muted shadow-sm"
        style={{
          width: `calc((100% - 12px) / ${adminTabs.length})`,
          left: `calc(6px + ${adminTabs.findIndex((t) => t.id === currentTab)} * ((100% - 12px) / ${adminTabs.length}))`,
        }}
      />

      {adminTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id as adminTypeProps)}
            className={`relative z-10 flex flex-col font-bold sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-1 sm:px-3 rounded-xl cursor-pointer transition-colors duration-200 ${
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon
              size={16}
              className={`shrink-0 transition-colors duration-200 ${isActive ? "text-primary" : ""}`}
            />
            <span className="text-[10px] sm:text-sm leading-tight whitespace-nowrap">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default AdminTabs;
