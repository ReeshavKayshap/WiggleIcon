import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function History({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".time",

      {
        rotate: [0, -360],
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
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`cursor-pointer${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="time" d="M12 8l0 4l2 2" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
      </motion.svg>
    </>
  );
}
