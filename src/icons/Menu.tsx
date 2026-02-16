import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Menu = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".showTwo",

        { scaleX: [1, 0.25, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showOne",

        { scaleX: [1, 0.3, 1] },

        { duration, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".showThree",

        { scaleX: [1, 0.3, 1] },

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
          <path className="showOne" d="M4 6l16 0" />
          <path className="showTwo" d="M4 12l16 0" />
          <path className="showThree" d="M4 18l16 0" />
        </motion.svg>
      </>
    );
  },
);
