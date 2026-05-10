"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed right-5 top-5 z-50 h-11 w-11" aria-hidden="true" />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="size-10 cursor-pointer items-center justify-center rounded-full border 
      border-foreground/10 bg-neutral-100 dark:bg-neutral-900 shadow-sm"
    >
      {resolvedTheme === "dark" ? <h1>light</h1> : <h1>dark</h1>}
    </button>
  );
}
