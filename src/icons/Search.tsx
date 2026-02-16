import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Search = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".flip",
        { y: [0, -2, 0], x: [0, 1, 0, -1, 0] },
        { duration: duration * 2, ease: "easeInOut", repeat: Infinity },
      );
    };
    const stop = () => {
      animate(
        ".flip",
        { y: 0, x: 0 },
        { duration: duration, ease: "easeInOut" },
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
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          stroke={color}
          strokeWidth={strokeWidth}
          className={`cursor-pointer${className}`}
        >
          <path
            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flip"
          />
        </motion.svg>
      </>
    );
  },
);
