import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Heart({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.9,
}: IconProps) {
  const stroke = 1.5;
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".heart",

      {
        scale: [1, 0.8, 1, 0.8, 1],
        strokeWidth: [stroke, 2.3, stroke, 2.3, stroke],
      },

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
        <path
          className="heart"
          d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        />
      </motion.svg>
    </>
  );
}
