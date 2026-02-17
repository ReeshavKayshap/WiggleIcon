import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Upload = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 50,
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
        ".down",
        {
          y: [0, -3.5, 0],
        },
        { duration, ease: "easeInOut" },
      );
      animate(
        ".downThree",
        {
          y: [0, -1.1, 0],
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
          <path
            className="downThree"
            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
          />
          <path className="down" d="M7 9l5 -5l5 5" />
          <path className="down" d="M12 4l0 12" />
        </motion.svg>
      </>
    );
  },
);
