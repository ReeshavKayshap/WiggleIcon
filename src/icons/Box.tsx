import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Box = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.8,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".box",

        { rotate: [0, 90, 0] },

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
          <path
            className="box"
            d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"
          />
          <path className="box" d="M12 12l8 -4.5" />
          <path className="box" d="M12 12l0 9" />
          <path className="box" d="M12 12l-8 -4.5" />
        </motion.svg>
      </>
    );
  },
);
