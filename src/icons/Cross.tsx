import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Cross = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.3,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".one",
        {
          // scale: [1, 0.85, 1],

          rotate: [0, 90],
        },
        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".one",
        {
          // scale: 1,
          rotate: 0,
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
          ref={scope}
          onMouseEnter={start}
          onMouseLeave={stop}
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
          <path className="one" d="M18 6l-12 12" />
          <path className="one" d="M6 6l12 12" />
        </motion.svg>
      </>
    );
  },
);
