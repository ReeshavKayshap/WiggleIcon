import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const EyeOff = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.4,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".line",

        { pathLength: [0, 1] },

        { duration: duration * 1.5, ease: "easeInOut" },
      );

      animate(
        ".eye",
        {
          scale: [1, 0.96],
          x: [0, -1, 1, -1, 0],
          opacity: 0.6,
        },
        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".eye",
        {
          scale: [0.96, 1],
          opacity: 1,
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
          onMouseEnter={start}
          onMouseLeave={stop}
          ref={scope}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 22 22"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`cursor-pointer${className}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="eye" d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
          <path
            className="eye"
            d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
          />
          <path className="line" d="M3 3l18 18" />
        </motion.svg>
      </>
    );
  },
);
