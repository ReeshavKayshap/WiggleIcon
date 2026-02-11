import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Menu({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".showTwo",

      { scaleX: [1, 0.25, 1] },

      { duration, ease: "easeInOut" },
    );
    animate(
      ".showOne",

      { scaleX: [1, 0.3, 1] },

      { duration, ease: "easeInOut", delay: 0.1 },
    );
    animate(
      ".showThree",

      { scaleX: [1, 0.3, 1] },

      { duration, ease: "easeInOut", delay: 0.2 },
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
        <path className="showOne" d="M4 6l16 0" />
        <path className="showTwo" d="M4 12l16 0" />
        <path className="showThree" d="M4 18l16 0" />
      </motion.svg>
    </>
  );
}
