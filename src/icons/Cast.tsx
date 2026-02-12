import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Cast({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.4,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      "#vibrate",

      { x: [-2, 2, -2, 2, 0] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".show",

      { opacity: [1, 0, 1] },

      { duration: duration * 1.5, ease: "easeInOut" },
    );
    animate(
      ".showTwo",

      { opacity: [1, 0, 1] },

      { duration: duration * 1.5, ease: "easeInOut", delay: duration * 0.5 },
    );
    animate(
      ".showThree",

      { opacity: [1, 0, 1] },

      { duration: duration * 1.5, ease: "easeInOut", delay: duration * 1 },
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
          id="vibrate"
          className={`cursor-pointer${className}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="show" d="M3 19l.01 0" />
          <path className="showTwo" d="M7 19a4 4 0 0 0 -4 -4" />
          <path className="showThree" d="M11 19a8 8 0 0 0 -8 -8" />
          <path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
        </motion.svg>
      </span>
    </>
  );
}
