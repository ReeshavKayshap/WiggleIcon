"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedIconHandle, IconProps } from "@/types/Type";
import { CopyButton } from "./Copy-button";
import { IconTerminal } from "../icons";

interface IconCardProps {
  name: string;
  IconComponent: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<AnimatedIconHandle>
  >;
  size?: number;
  strokeWidth?: number;
  duration?: number | null;
}

export function IconCard({
  name,
  IconComponent,
  size = 35,
  strokeWidth = 2,
  duration = null,
}: IconCardProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-100 px-5 py-1.5 bg-neutral-900 dark:bg-neutral-100
             rounded-full shadow-2xl pointer-events-none whitespace-nowrap flex
              items-center justify-center"
          >
            <span className="text-[13px] font-mono text-white dark:text-black  tracking-tight">
              {name.toLowerCase()}
            </span>

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full flex flex-col justify-center items-center gap-4 rounded-xl py-7 bg-neutral-900
       border border-neutral-800 transition-colors duration-300 hover:bg-neutral-800/50 group"
      >
        <div className="flex flex-col items-center justify-center">
          <IconComponent
            ref={iconRef}
            size={size}
            strokeWidth={strokeWidth}
            {...(duration !== null ? { duration } : {})}
          />
        </div>

        <div className="flex items-center gap-3 text-neutral-300">
          <CopyButton size={14} textToCopy="" />
          <IconTerminal size={20} />
        </div>
      </motion.div>
    </div>
  );
}
