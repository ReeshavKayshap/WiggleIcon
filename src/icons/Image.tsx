import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function Image({
  size = 50,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.4,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".show",
      {
        pathLength: [0, 1],
      },
      { duration: duration * 2, ease: "easeInOut" },
    );
    animate(
      ".showTwo",
      {
        opacity: [0, 1],
      },
      { duration, ease: "easeInOut", delay: duration * 1.5 },
    );
  };
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
        width={size}
        height={size}
        viewBox="0 0 22 20"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer${className}`}
      >
        <path d="M1 4.375C1 2.51104 2.51104 1 4.375 1H15.625C17.489 1 19 2.51104 19 4.375V15.625C19 17.489 17.489 19 15.625 19H4.375C2.51104 19 1 17.489 1 15.625V4.375Z" />
        <path
          className="show"
          d="M2 17.3125L6.5 12.8125L8.75 15.0625L13.8125 10L18.3125 14.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="showTwo"
          d="M6 6.09023V6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </>
  );
}
