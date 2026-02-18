import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Docs = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".one",

        { scale: [1, 0.6, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".two",

        { scale: [1, 0.6, 1] },

        { duration, ease: "easeInOut", delay: 0.2 },
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
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
          <path className="two" d="M9 17h6" />
          <path className="one" d="M9 13h6" />
        </motion.svg>
      </>
    );
  },
);
