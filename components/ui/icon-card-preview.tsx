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
      className="h-full w-full p-1 ring ring-neutral-200 dark:ring-neutral-800/70 rounded-2xl
     bg-[#FAFAFA]  dark:bg-neutral-900/40  shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
    >
      <div
        onClick={onClick}
        className="w-full flex flex-col justify-center items-center gap-3 rounded-xl py-7 dark:bg-[#0A0A0A] bg-[#ffffff] hover:shadow-sm hover:shadow-black/9
       ring ring-neutral-200/40 hover:ring-neutral-200/40 dark:ring-neutral-900/60 hover:dark:ring-neutral-800/50 transition-all duration-150 ease-out
        hover:dark:bg-neutral-900/50  hover:bg-gray-50/30  
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
