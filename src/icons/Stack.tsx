import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function Stack({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.6,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".one",

      { y: [0, -1.8, 0] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".three",

      { y: [0, 1.8, 0] },

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
        <path className="one" d="M12 4l-8 4l8 4l8 -4l-8 -4" />
        <path d="M4 12l8 4l8 -4" />
        <path className="three" d="M4 16l8 4l8 -4" />
      </motion.svg>
    </>
  );
}
