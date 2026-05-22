"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import {motion} from "motion/react"
import { Sun, Moon } from "../lib";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = async () => {
    const nextTheme = isDark ? "light" : "dark";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!document.startViewTransition || reduceMotion) {
      setTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
      },
      {
        duration: 650,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <motion.button
      initial={{ scale:1 }} 
     
      whileHover={{ scale:0.95 }}
      transition={{ type:"spring", stiffness:260, damping:20 }}
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="size-12 cursor-pointer flex items-center justify-center rounded-full 
       border border-foreground/10 bg-neutral-100 dark:bg-neutral-900 shadow-sm 
       "
    >
    
        <div className="dark:hidden  ">
          <Moon  size={22} />
        </div>
        <div className="hidden dark:block ">
        <Sun  size={22} />
        </div>
    </motion.button>
  );
}
