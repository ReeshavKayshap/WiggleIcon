import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Stack = forwardRef<AnimatedIconHandle, IconProps>(
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

        { y: [0, -1.8, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".three",

        { y: [0, 1.8, 0] },

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
          <path className="one" d="M12 4l-8 4l8 4l8 -4l-8 -4" />
          <path d="M4 12l8 4l8 -4" />
          <path className="three" d="M4 16l8 4l8 -4" />
        </motion.svg>
      </>
    );
  },
);
