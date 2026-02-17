import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Coffee = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.6,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".cup",
        {
          rotate: [0, 8, -8, 0],
          y: [0, -1, 0],
        },
        { duration, ease: "easeInOut" },
      );
      animate(
        ".steam",
        {
          y: [0, -2, 0],
          opacity: [1, 0.5, 0, 1],
        },
        {
          duration: duration * 1.333,
          ease: "easeInOut",
          delay: duration * 0.5,
        },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`cursor-pointer${className}`}
        >
          <path className="steam" d="M6 2v3" />
          <path className="steam" d="M10 2v3" />
          <path className="steam" d="M14 2v3" />

          <path
            className="cup"
            d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
          />
        </motion.svg>
      </>
    );
  },
);
