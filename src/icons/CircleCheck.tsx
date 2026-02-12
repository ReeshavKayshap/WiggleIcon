import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function CircleCheck({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".circle",

      { pathLength: [0, 1], pathOffset: [1, 0] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".check",

      { pathLength: [0, 1], opacity: [0, 1] },

      { duration: duration * 0.75, ease: "easeInOut", delay: duration * 0.75 },
    );
  };

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleHover}
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
        <path className="circle" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path className="check" d="M9 12l2 2l4 -4" />
      </motion.svg>
    </>
  );
}
