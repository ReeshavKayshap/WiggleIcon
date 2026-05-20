"use client";

import { useState, useEffect } from "react";
import {  IconCommand } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { SearchTwo } from "../icons/SearchTwo";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onSearch?.(query);
  }, [query, onSearch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.getElementById("search-input");
        input?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    
      <div
        className={`
        px-4 py-3.5 overflow-x-auto dark:bg-[#0A0A0A] bg-[#ffffff] flex items-center  transition-all ease-in duration-200
        gap-3 rounded-4xl ring shadow-[0_4px_8px_rgba(0,0,0,0.05)] 
          ${
            isFocused 
              ? "ring-neutral-400/60 dark:ring-neutral-800/90"
              : "ring-neutral-200 dark:ring-neutral-900"
          }
        `}
      >
        <div className="relative">
          <SearchTwo
            size={20}
            className={`${
              isFocused
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-400"
            } transition-colors ease-in duration-200`}
          />
          {isFocused && (
            <motion.div
              layoutId="search-glow"
              className="absolute inset-0 bg-neutral-900/10 dark:bg-white/10 rounded-full -z-10"
            />
          )}
        </div>

        <input
          id="search-input"
          type="text"
          placeholder="Search Icons..."
          className="flex-1 bg-transparent outline-none text-neutral-900 dark:text-neutral-100
           placeholder:text-neutral-500 font-sans text-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />

        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait" initial={false}>
            {!query && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-200/50
                 dark:bg-neutral-800/50 border border-neutral-300/50 dark:border-neutral-700/50"
              >
                <IconCommand size={14} className="text-neutral-500" />
                <span className="text-xs font-bold text-neutral-500">K</span>
              </motion.div>
            )}
          </AnimatePresence>

          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
 
  );
}
