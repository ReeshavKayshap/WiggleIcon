import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Wifi = forwardRef<AnimatedIconHandle, IconProps>(
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

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".two",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut", delay: 0.2 },
      );
      animate(
        ".three",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut", delay: 0.4 },
      );
      animate(
        ".four",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut", delay: 0.6 },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`cursor-pointer ${className}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="one" d="M12 18l.01 0" />
          <path className="two" d="M9.172 15.172a4 4 0 0 1 5.656 0" />
          <path className="three" d="M6.343 12.343a8 8 0 0 1 11.314 0" />
          <path
            className="four"
            d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
          />
        </motion.svg>
      </>
    );
  },
);
