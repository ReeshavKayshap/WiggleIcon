import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function Filter({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".show",

      { scaleX: [1, 0.5, 1] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".showTwo",

      { scaleX: [1, 0.6, 1] },

      { duration, ease: "easeInOut", delay: duration * 0.4 },
    );
    animate(
      ".showThree",

      { scaleX: [1, 0.6, 1] },

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
        <path className="show" d="M4 6h16" />
        <path className="showTwo" d="M6 12h12" />
        <path className="showThree" d="M9 18h6" />
      </motion.svg>
    </>
  );
}
