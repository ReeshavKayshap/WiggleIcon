import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Trash({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.98,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".up",

      { y: [0, -5, -3, -1.2, 0], rotate: [0, -3, 3, -3, 0] },

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
        <path className="up" d="M4 7l16 0" />
        <path className="down" d="M10 11l0 6" />
        <path className="down" d="M14 11l0 6" />
        <path
          className="down"
          d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
        />
        <path className="up" d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </motion.svg>
    </>
  );
}
