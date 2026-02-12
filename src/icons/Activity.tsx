import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function Activity({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".show",

      { pathLength: [0, 1] },

      { duration, ease: "easeInOut" },
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
        <path className="show" d="M3 12h4l3 8l4 -16l3 8h4" />
      </motion.svg>
    </>
  );
}
