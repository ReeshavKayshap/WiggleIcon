import { motion, useAnimate } from "motion/react";

export function Mail({
  size = 60,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".open",
      {
        y: [0, -8, 0],
        scaleY: [1, -1.3, 1],
      },
      { duration: 0.9, ease: "easeInOut" },
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
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path className="open" d="M3 7l9 6l9 -6" />
      </motion.svg>
    </>
  );
}
