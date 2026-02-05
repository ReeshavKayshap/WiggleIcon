import { motion, useAnimate } from "motion/react";

export function Coffee({
  size = 60,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".cup",
      {
        rotate: [0, 8, -8, 0],
        y: [0, -1, 0],
      },
      { duration: 0.6, ease: "easeInOut" },
    );
    animate(
      ".steam",
      {
        y: [0, -2, 0],
        opacity: [1, 0.5, 0, 1],
      },
      { duration: 0.8, ease: "easeInOut", delay: 0.3 },
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
        <path className="steam" d="M6 2v3" />
        <path className="steam" d="M10 2v3" />
        <path className="steam" d="M14 2v3" />

        <path
          className="cup"
          d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
        />
      </motion.svg>
    </>
  );
}
