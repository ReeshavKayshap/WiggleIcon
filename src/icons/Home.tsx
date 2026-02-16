import { forwardRef, useImperativeHandle, useCallback } from "react";
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

export const Home = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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

    const start = useCallback(() => {
      animate(".house", { scale: [1.08, 1] }, { duration, ease: "easeInOut" });
      animate(
        ".door",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration, ease: "easeInOut" },
      );
    }, [animate, duration]);

    const stop = useCallback(() => {
      animate(".house", { scale: 1 }, { duration: 0.3 });
      animate(".door", { pathLength: 1, opacity: 1 }, { duration: 0.3 });
    }, [animate]);

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
        onHoverEnd={stop}
      >
        <path className="house" d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path
          className="house"
          style={{ transformOrigin: "center" }}
          d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
        />
        <path className="door" d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </motion.svg>
    );
  },
);
