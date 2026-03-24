import { motion, useAnimate, stagger } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Sun = forwardRef<AnimatedIconHandle, IconProps>(
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
        "path",
        { opacity: [0, 1] },
        { duration: duration, delay: stagger(0.1), ease: "easeInOut" },
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
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2" opacity="1"></path>
          <path d="m19.07 4.93-1.41 1.41" opacity="1"></path>
          <path d="M20 12h2" opacity="1"></path>
          <path d="m17.66 17.66 1.41 1.41" opacity="1"></path>
          <path d="M12 20v2" opacity="1"></path>
          <path d="m6.34 17.66-1.41 1.41" opacity="1"></path>
          <path d="M2 12h2" opacity="1"></path>
          <path d="m4.93 4.93 1.41 1.41" opacity="1"></path>
        </motion.svg>
      </>
    );
  },
);
