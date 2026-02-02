import { motion, useAnimate } from "motion/react";
export function Dots({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".show",

      { y: [0, -2, 0] },

      { duration: 0.6, ease: "easeInOut" },
    );
    animate(
      ".showTwo",

      { y: [0, -2, 0] },

      { duration: 0.6, ease: "easeInOut", delay: 0.2 },
    );
    animate(
      ".showThree",

      { y: [0, -2, 0] },

      { duration: 0.6, ease: "easeInOut", delay: 0.4 },
    );
  };

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleHover}
        ref={scope}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="show" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path className="showTwo" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path className="showThree" d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </motion.svg>
    </>
  );
}
