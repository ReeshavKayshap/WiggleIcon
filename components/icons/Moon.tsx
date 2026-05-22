"use client";

import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Moon = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1.1,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        { rotate: [0, 12, -12, 10, -10, 0] },
        { duration, ease: "easeInOut" },
      );
    };

    const stop = () => {
      animate(".main", { rotate: 0 }, { duration: 0.1, ease: "easeInOut" });
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <>
      <motion.svg xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          onMouseLeave={stop}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color} 
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`cursor-pointer ${className}`} >
      <path className="main" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </motion.svg> 

      
      </>
    );
  },
);

Moon.displayName = "Moon";
