"use client";

import React, { useState, useRef, useEffect } from "react";
import { CopyButton } from "@/components/ui/Copy-button";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

interface InstallCommandProps {
  componentName?: string;
}

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export function InstallCommand({ componentName }: InstallCommandProps) {
  const [activeManager, setActiveManager] = useState<PackageManager>("npm");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const commandText = React.useMemo(() => {
    const packageName = componentName || "@wiggle/icons-react";

    switch (activeManager) {
      case "pnpm":
        return `pnpm add ${packageName}`;
      case "bun":
        return `bun add ${packageName}`;
      case "yarn":
        return `yarn add ${packageName}`;
      case "npm":
      default:
        return `npm install ${packageName}`;
    }
  }, [activeManager, componentName]);

  const managers: PackageManager[] = ["pnpm", "npm", "yarn", "bun"];

  return (
    <div
      ref={dropdownRef}
      className="relative  w-full p-1 ring ring-neutral-200/80 dark:ring-neutral-800/60 rounded-lg bg-neutral-100
       dark:bg-neutral-900/40 shadow-sm shadow-black/10"
    >
      <div
        className="px-3 py-4 overflow-x-auto dark:bg-background bg-[#FAFAFA] flex items-center justify-between 
      gap-4 rounded-md"
      >
        <code
          className="text-[15px] font-mono text-neutral-900 dark:text-zinc-300 flex items-center 
        whitespace-nowrap"
        >
          <span className="text-emerald-500 mr-2">{">_"}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={commandText}
              initial={{ opacity: 0, scale: 0.95, filter: `blur(3px)` }}
              animate={{ opacity: 1, scale: 0.97, filter: `blur(0px)` }}
              exit={{ opacity: 0, scale: 0.95, filter: `blur(3px)` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-block"
            >
              {commandText}
            </motion.span>
          </AnimatePresence>
        </code>

        <div className="flex divide-x dark:divide-neutral-700 divide-neutral-300 ml-4">
          <span className="flex justify-center items-center pr-2.5">
            <CopyButton textToCopy={commandText} />
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pl-1.5 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
          >
            <IconChevronDown
              size={20}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: `blur(2px)` }}
          animate={{ opacity: 1, scale: 0.97, filter: `blur(0px)` }}
          exit={{ opacity: 0, scale: 0.95, filter: `blur(2px)` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute right-0 top-full mt-3 w-28 overflow-hidden rounded-xl border dark:border-neutral-700
         border-neutral-200 bg-white dark:bg-neutral-900 shadow-sm shadow-black/10  "
        >
          <div className="flex flex-col p-1">
            {managers.map((manager) => (
              <button
                key={manager}
                onClick={() => {
                  setActiveManager(manager);
                  setIsOpen(false);
                }}
                className={`px-3 py-1.5 text-sm text-left rounded-sm transition-colors font-mono font-medium ${
                  activeManager === manager
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
                }`}
              >
                {manager}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
