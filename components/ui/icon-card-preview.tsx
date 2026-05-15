"use client";

import React, { useRef } from "react";

import { AnimatedIconHandle, IconProps } from "@/types/Type";

interface IconCardProps {
  name: string;
  IconComponent: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<AnimatedIconHandle>
  >;
  size?: number;
  strokeWidth?: number;
  duration?: number | null;
  color?: string;
  onClick?: () => void;
}

export function IconCard({
  name,
  IconComponent,
  size = 32,
  strokeWidth = 2,
  duration = null,
  color = "currentColor",
  onClick,
}: IconCardProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <div
      className="h-full w-full p-1.5 ring ring-neutral-200/80 dark:ring-neutral-800/60 rounded-2xl
     bg-neutral-50 dark:bg-neutral-900/40 shadow-sm shadow-black/10"
    >
      <div
        onClick={onClick}
        className="w-full flex flex-col justify-center items-center gap-3 rounded-xl py-6 dark:bg-[#0A0A0A] bg-[#FAFAFA] 
       ring ring-neutral-200/30 dark:ring-neutral-900/30 transition-colors duration-300 hover:dark:bg-[#121212] hover:bg-neutral-100
       "
      >
        <div className="flex flex-col items-center justify-center">
          <IconComponent
            ref={iconRef}
            size={size}
            strokeWidth={strokeWidth}
            color={color}
            {...(duration !== null ? { duration } : {})}
          />
        </div>

        <div className=" dark:text-neutral-300 text-neutral-800 font-mono text-[12px] ">
          {name.toLowerCase()}
        </div>
      </div>
    </div>
  );
}
