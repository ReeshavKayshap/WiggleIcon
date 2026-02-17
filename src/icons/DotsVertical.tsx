import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const DotsVertical = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 1.5,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".show",

        { x: [0, -2, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showTwo",

        { x: [0, -2, 0] },

        { duration, ease: "easeInOut", delay: duration * 0.4 },
      );
      animate(
        ".showThree",

        { x: [0, -2, 0] },

        { duration, ease: "easeInOut", delay: duration * 0.8 },
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
          className={`cursor-pointer ${className}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="showTwo" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="showThree" d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="show" d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </motion.svg>
      </>
    );
  },
);
