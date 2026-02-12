import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function Volume({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.7,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".main",

      { x: [0, -1.1, 0] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".one",

      { x: [0, -3, 0] },

      { duration, ease: "easeInOut" },
    );
    animate(
      "#one",

      { scale: [1, 1.2, 1], opacity: [1, 0.4, 1] },

      {
        duration: duration * 0.857,
        ease: "easeInOut",
        delay: duration * 0.571,
      },
    );
    animate(
      "#two",

      { scale: [1, 1.2, 1], opacity: [1, 0.4, 1] },

      {
        duration: duration * 0.857,
        ease: "easeInOut",
        delay: duration * 0.857,
      },
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
        <path id="one" className="one" d="M15 8a5 5 0 0 1 0 8" />
        <path id="two" className="one" d="M17.7 5a9 9 0 0 1 0 14" />
        <path
          className="main"
          d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
        />
      </motion.svg>
    </>
  );
}
