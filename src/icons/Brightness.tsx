import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Brightness = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",

        { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".maintwo",

        { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1] },

        { duration, ease: "easeInOut", delay: 0.3 },
      );
      animate(
        ".mainThree",

        { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1] },

        { duration, ease: "easeInOut", delay: 0.6 },
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
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 3l0 18" />
          <path className="main" d="M12 9l4.65 -4.65" />
          <path className="maintwo" d="M12 14.3l7.37 -7.37" />
          <path className="mainThree" d="M12 19.6l8.85 -8.85" />
        </motion.svg>
      </>
    );
  },
);
