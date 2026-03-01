import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimate } from "motion/react";

export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
export interface AnimatedIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}

export const IconTerminal = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        ".main",

        {
          rotate: [0, -360],
        },

        { duration, ease: "easeInOut" },
      );
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
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
        className={`cursor-pointer ${className}`}
        onHoverStart={start}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="main" d="M5 7l5 5l-5 5" />
        <path className="main" d="M12 19l7 0" />
      </motion.svg>
    );
  },
);
