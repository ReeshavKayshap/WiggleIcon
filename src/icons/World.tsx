import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function World({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.98,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      "#roted",

      { rotate: [0, -180] },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <span onMouseEnter={handleHover} ref={scope}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          id="roted"
          className={`cursor-pointer${className}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </motion.svg>
      </span>
    </>
  );
}
