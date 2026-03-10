import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Target = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".one",

        { opacity: [0, 1] },

        { duration, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".two",

        { opacity: [0, 1] },

        { duration, ease: "easeInOut", delay: 0.2 },
      );
      animate(
        ".three",

        { opacity: [0, 1] },

        { duration, ease: "easeInOut", delay: 0.4 },
      );
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          onMouseEnter={start}
          ref={scope}
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="one" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="two" d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path className="three" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        </motion.svg>
      </>
    );
  },
);
