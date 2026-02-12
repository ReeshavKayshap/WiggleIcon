import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";

export function IncomingPhoneCall({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.6,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const MouseEnter = () => {
    animate(
      ".arrow",
      { opacity: [0, 1], x: [2, 0], y: [-2, 0] },
      { duration, ease: "easeInOut" },
    );

    animate(
      ".show",
      { rotate: [0, -15, 15, -10, 10, 0] },
      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={MouseEnter}
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
        <path
          className="show"
          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
        />
        <path className="arrow" d="M15 9l5 -5" />
        <path className="arrow" d="M15 5l0 4l4 0" />
      </motion.svg>
    </>
  );
}
