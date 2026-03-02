"use client";

import { useState, useRef, useEffect } from "react";
import { TiExportOutline } from "react-icons/ti";
import { BsFiletypeJson, BsFiletypePdf, BsFiletypeDoc } from "react-icons/bs";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { apiRoutes } from "@/app/api/apiRoutes";
import { downloadFile } from "@/app/helper";
const ExportDropdown = ({
  roadmapId,
  roadmapTitle,
}: {
  roadmapId: string;
  roadmapTitle: string;
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const exportToJSON = async () => {
    try {
      const response = await RoadmapApiAxiosInstance.get(
        apiRoutes.Roadmap.exportRoadmapToJSON.route(roadmapId),
        {
          responseType: "blob",
        },
      );

      const blob = new Blob([response.data], {
        type: "application/json",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${roadmapTitle}.json`);

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    }
  };
  const exportToPDF = async () => {
    const res = await RoadmapApiAxiosInstance.get(
      apiRoutes.Roadmap.exportRoadmapToPDF.route(roadmapId),
      { responseType: "blob" },
    );

    const contentDisposition = res.headers["content-disposition"];
    const filename =
      contentDisposition?.split("filename=")[1]?.replace(/"/g, "") ||
      `${roadmapTitle}.pdf`;

    downloadFile(res.data, filename);
  };

  const exportToCSV = async () => {
    const res = await RoadmapApiAxiosInstance.get(
      apiRoutes.Roadmap.exportRoadmapToCSV.route(roadmapId),
      { responseType: "blob" },
    );

    downloadFile(res.data, `${roadmapTitle}.csv`);
  };

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
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-neon-cyan to-neon-purple font-medium shadow-md hover:opacity-90 transition-all duration-300 mx-auto text-white cursor-pointer my-5"
      >
        Export
        <TiExportOutline size={18} />
      </button>

      <div
        className={`absolute top-12.5 right-43.75 mt-3 w-44 rounded-2xl bg-popover border border-border shadow-xl backdrop-blur-xl transition-all duration-200 origin-top-right ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
      >
        <button
          onClick={() => {
            exportToJSON();
            setOpen(false);
          }}
          className="flex items-center gap-2 w-full px-4 py-3 cursor-pointer hover:bg-muted transition-colors rounded-t-2xl"
        >
          <BsFiletypeJson size={18} className="text-neon-cyan" />
          JSON
        </button>

        <button
          onClick={() => {
            exportToCSV();
            setOpen(false);
          }}
          className="flex items-center gap-2 w-full px-4 py-3 cursor-pointer hover:bg-muted transition-colors"
        >
          <BsFiletypeDoc size={18} className="text-neon-purple" />
          CSV
        </button>

        <button
          onClick={() => {
            exportToPDF();
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

export default ExportDropdown;
