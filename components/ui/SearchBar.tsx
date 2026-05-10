"use client";

import { useState, useEffect } from "react";
import { IconSearch, IconCommand } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

import { IconList } from "@/lib/IconList";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onSearch?.(query);
  }, [query, onSearch]);

  // Keyboard shortcut listener
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
    <div className="w-full max-w-2xl mx-auto mt-16 relative">
      <div
        className={`
          relative flex items-center gap-3 px-5 py-4 rounded-2xl
          bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-xl
          border transition-all duration-500 ease-in-out
          ${
            isFocused
              ? "border-neutral-400 dark:border-neutral-700 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.2)] bg-white dark:bg-neutral-950"
              : "border-neutral-200 dark:border-neutral-800 shadow-sm"
          }
        `}
      >
        <div className="relative">
          <IconSearch
            size={22}
            className={`${
              isFocused
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-400"
            } transition-colors duration-300`}
          />
          {isFocused && (
            <motion.div
              layoutId="search-glow"
              className="absolute inset-0 bg-neutral-900/10 dark:bg-white/10 blur-xl rounded-full -z-10"
            />
          )}
        </div>

        <input
          id="search-input"
          type="text"
          placeholder="Search components..."
          className="flex-1 bg-transparent outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 font-sans text-xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />

        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            {!query && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300/50 dark:border-neutral-700/50"
              >
                <IconCommand size={14} className="text-neutral-500" />
                <span className="text-xs font-bold text-neutral-500 tracking-tighter">
                  K
                </span>
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
    </div>
  );
}
