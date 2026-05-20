"use client";

import React, { useState, useRef, useEffect } from "react";
import { CopyButton } from "@/components/ui/Copy-button";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

interface InstallCommandProps {
  componentName?: string;
}

type Runner = "npm" | "pnpm" | "bun" | "yarn";

export function InstallCommand({ componentName }: InstallCommandProps) {
  const [activeRunner, setActiveRunner] = useState<Runner>("npm");
  const [isOpen, setIsOpen] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

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
    const iconName = componentName || "icon";
    const registryUrl = `${baseUrl}/r/${iconName}.json`;

    switch (activeRunner) {
      case "pnpm":
        return `pnpm dlx shadcn@latest add ${registryUrl}`;
      case "bun":
        return `bunx --bun shadcn@latest add ${registryUrl}`;
      case "yarn":
        return `yarn dlx shadcn@latest add ${registryUrl}`;
      case "npm":
      default:
        return `npx shadcn@latest add ${registryUrl}`;
    }
  }, [activeRunner, baseUrl, componentName]);

  const runners: Runner[] = ["npm", "pnpm", "bun", "yarn"];

  return (
    <div
      ref={dropdownRef}
      className="relative w-full p-1 ring ring-neutral-200 dark:ring-neutral-800/70 rounded-xl
       bg-[#FAFAFA]  dark:bg-neutral-900/40  shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
    >
      <div
        className="px-3 py-2 overflow-x-auto custom-scrollbar dark:bg-[#0A0A0A] bg-[#ffffff] flex items-center justify-between 
      gap-4 rounded-lg ring ring-neutral-200/30 dark:ring-neutral-900/30"
      >
        <code className="text-[14px] font-mono font-medium text-neutral-900 dark:text-zinc-300 ">
          <span className="text-green-600 mr-2">{"$"}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={`${componentName}-${activeRunner}`}
              initial={{ opacity: 0, scale: 0.95, filter: `blur(3px)` }}
              animate={{ opacity: 1, scale: 0.97, filter: `blur(0px)` }}
              exit={{ opacity: 0, scale: 0.95, filter: `blur(3px)` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline break-all"
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
          transition={{ duration: 0.23, ease: "easeOut" }}
          className="absolute right-0 top-full mt-3 w-40 overflow-hidden rounded-xl border dark:border-neutral-800/60
         border-neutral-200 bg-white dark:bg-neutral-900 shadow-md shadow-black/10 z-20"
        >
          <div className="flex flex-col py-1.5 px-1.5 gap-1">
            {runners.map((runner) => (
              <button
                key={runner}
                onClick={() => {
                  setActiveRunner(runner);
                  setIsOpen(false);
                }}
                className={`px-2 py-1.5 text-sm text-left rounded-[7.5px] transition-colors font-mono font-medium ${
                  activeRunner === runner
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
                }`}
              >
                {runner}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
