import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function DotsVertical({
  size = 50,
  strokeWidth = 1.5,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".show",

      { x: [0, -2, 0] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".showTwo",

      { x: [0, -2, 0] },

      { duration, ease: "easeInOut", delay: duration * 0.4 },
    );
    animate(
      ".showThree",

      { x: [0, -2, 0] },

      { duration, ease: "easeInOut", delay: duration * 0.8 },
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
        <path className="showTwo" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path className="showThree" d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path className="show" d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </motion.svg>
    </>
  );
}
