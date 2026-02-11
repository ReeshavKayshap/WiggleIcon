import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function UnorderedList({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.4,
}: IconProps) {
  const stroke = 1.5;
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".one",

      { scale: [1, 1.2, 1], x: [0, 1, 0], strokeWidth: [stroke, 1.8, stroke] },

      { duration, ease: "easeInOut" },
    );

    animate(
      ".two",
      { scale: [1, 1.2, 1], x: [0, 1, 0], strokeWidth: [stroke, 1.8, stroke] },
      { duration, ease: "easeInOut", delay: 0.3 },
    );
    animate(
      ".three",
      { scale: [1, 1.2, 1], x: [0, 1, 0], strokeWidth: [stroke, 1.8, stroke] },

      { duration, ease: "easeInOut", delay: 0.6 },
    );
  };
  const handelleave = () => {
    animate(
      ".one",

      { scale: 1, x: 0, strokeWidth: 2 },

      { duration, ease: "easeInOut" },
    );

    animate(
      ".two",
      { scale: 1, x: 0, strokeWidth: 2 },
      { duration, ease: "easeInOut" },
    );
    animate(
      ".three",
      { scale: 1, x: 0, strokeWidth: 2 },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
        onMouseLeave={handelleave}
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
        <path className="one" d="M9 6l11 0" />
        <path className="two" d="M9 12l11 0" />
        <path className="three" d="M9 18l11 0" />
        <path className="one" d="M5 6l0 .01" />
        <path className="two" d="M5 12l0 .01" />
        <path className="three" d="M5 18l0 .01" />
      </motion.svg>
    </>
  );
}
