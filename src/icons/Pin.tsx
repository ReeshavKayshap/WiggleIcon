import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Pin = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.9,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        {
          y: [0, -3, 3, -1, 0.4, 0],
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
          <path className="main" d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
          <path className="main" d="M12 16l0 5" />
          <path className="main" d="M8 4l8 0" />
        </motion.svg>
      </>
    );
  },
);
