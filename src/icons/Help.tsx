import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Help({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.6,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".show",

      {
        pathLength: [0, 1],
        pathOffset: [1, 0],
        opacity: [0, 1],
      },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".showTwo",

      {
        opacity: [0, 1],
      },

      { duration, ease: "easeInOut", delay: 0.5 },
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
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`cursor-pointer${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path className="showTwo" d="M12 17l0 .01" />
        <path
          className="show"
          d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
        />
      </motion.svg>
    </>
  );
}
