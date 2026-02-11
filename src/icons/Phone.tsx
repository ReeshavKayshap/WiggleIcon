import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
function Phone({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.9,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".phone",
      {
        scale: [1, 0.8, 0.8, 0.8, 1],
        rotate: [10, 0],
        y: [-2, 2, -2, 2, -2, 2, 0],
      },
      { duration: duration * 1, ease: "easeInOut" },
    );
    animate(
      ".glow",
      {
        opacity: [1, 0, 1],
        rotate: [10, 0],
        scale: [1, 0.8, 0.8, 0.8, 1],
      },
      { duration: duration * 0.78, ease: "easeInOut" },
    );
    animate(
      ".glowTwo",
      {
        opacity: [1, 0, 1, 0, 1],
        rotate: [10, 0],
        scale: [1, 0.8, 0.8, 0.8, 1],
      },
      { duration: duration * 0.89, ease: "easeInOut" },
    );
  };
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
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
          className="phone"
          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
        />
        <path className="glow" d="M15 7a2 2 0 0 1 2 2" />
        <path className="glowTwo" d="M15 3a6 6 0 0 1 6 6" />
      </motion.svg>
    </>
  );
}

export default Phone;
