import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Heart = forwardRef<AnimatedIconHandle, IconProps>(
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
    const stroke = 1.5;
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".heart",

        {
          scale: [1, 0.8, 1, 0.8, 1],
          strokeWidth: [stroke, 2.3, stroke, 2.3, stroke],
        },

        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".heart",

        {
          scale: 1,
          strokeWidth: 2,
        },

        { duration: 0.2, ease: "easeInOut" },
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
            className="heart"
            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
          />
        </motion.svg>
      </>
    );
  },
);
