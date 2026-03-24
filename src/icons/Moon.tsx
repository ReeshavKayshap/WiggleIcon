import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Moon = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1.1,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        { rotate: [0, 12, -12, 10, -10, 0] },
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
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinejoin="round"
          className={`cursor-pointer${className}`}
        >
          <path
            className="main"
            d="M20.1999 13.2394C19.2976 13.5131 18.3403 13.6602 17.3487 13.6602C11.9307 13.6602 7.53854 9.26803 7.53854 3.85003C7.53854 2.85881 7.68554 1.90193 7.95894 1C3.93151 2.22138 1 5.96304 1 10.3894C1 15.8074 5.39216 20.1996 10.8102 20.1996C15.2369 20.1996 18.9789 17.2675 20.1999 13.2394Z"
          />
        </motion.svg>
      </>
    );
  },
);
