import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function Bluetooth({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".show",

      { pathLength: [0, 1] },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="show" d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
      </motion.svg>
    </>
  );
}
