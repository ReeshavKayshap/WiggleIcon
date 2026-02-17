import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Rotate = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        {
          rotate: [0, -360],
          scale: [1, 1.05, 1],
        },
        { duration, ease: "easeInOut" },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
        </motion.svg>
      </>
    );
  },
);
