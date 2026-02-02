import { motion, useAnimate } from "motion/react";

export function ArrowBack({
  size = 60,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".main",
      { x: [0, 1, -1, 1, 0] },
      { duration: 0.6, ease: "easeOut" },
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
        <path className="main" d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
      </motion.svg>
    </>
  );
}
