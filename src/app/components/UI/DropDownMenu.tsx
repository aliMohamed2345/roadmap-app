"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

const DropDownMenu = ({
  option,
  onChange,
  optionList,
}: {
  option: string;
  onChange: (value: string) => void;
  optionList: string[];
}) => {
  const [selected, setSelected] = useState(option);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(option);
  }, [option]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-48 text-sm">
      {/* Toggle dropdown */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex cursor-pointer items-center justify-between px-4 py-2 rounded-xl border border-border bg-card text-card-foreground hover:bg-muted transition-all"
      >
        {selected}
        <IoIosArrowDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-full rounded-xl border border-border bg-popover shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 z-20">
          {optionList.map((item) => {
            const isActive = selected === item;

            return (
              <button
                key={item}
                onClick={() => {
                  setSelected(item);
                  onChange(item);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between cursor-pointer px-4 py-2 transition-all ${
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-popover-foreground hover:bg-muted"
                }`}
              >
                {item}
                {isActive && <IoIosCheckmark size={18} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
