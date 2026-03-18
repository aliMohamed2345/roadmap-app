"use client";

import { useState, useRef, useEffect } from "react";
import { TiExportOutline } from "react-icons/ti";
import { BsFiletypeJson, BsFiletypePdf, BsFiletypeDoc } from "react-icons/bs";
import { ExportBTNProps } from "@/app/types/UI";
const ExportBTN = ({
  id,
  title,
  exportToJSON,
  exportToPDF,
  exportToCSV,
}: ExportBTNProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-neon-cyan to-neon-purple font-medium shadow-md hover:opacity-90 transition-all duration-300 mx-auto text-white cursor-pointer "
      >
        Export
        <TiExportOutline size={18} />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-44 rounded-2xl bg-popover border border-border shadow-xl backdrop-blur-xl z-30 transition-all duration-200 origin-top-center ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            exportToJSON(id, title);
            setOpen(false);
          }}
          className="flex items-center gap-2 w-full px-4 py-3 cursor-pointer hover:bg-muted transition-colors rounded-t-2xl"
        >
          <BsFiletypeJson size={18} className="text-neon-cyan" />
          JSON
        </button>

        <button
          onClick={() => {
            exportToCSV(id, title);
            setOpen(false);
          }}
          className="flex items-center gap-2 w-full px-4 py-3 cursor-pointer hover:bg-muted transition-colors"
        >
          <BsFiletypeDoc size={18} className="text-neon-purple" />
          CSV
        </button>

        <button
          onClick={() => {
            exportToPDF(id, title);
            setOpen(false);
          }}
          className="flex items-center gap-2 w-full px-4 py-3 cursor-pointer hover:bg-muted transition-colors rounded-b-2xl"
        >
          <BsFiletypePdf size={18} className="text-neon-pink" />
          PDF
        </button>
      </div>
    </div>
  );
};

export default ExportBTN;
