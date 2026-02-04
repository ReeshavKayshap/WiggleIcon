import { motion, useAnimate } from "motion/react";
export function Rotate({
  size = 60,
  strokeWidth = 1.5,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".main",
      {
        rotate: [0, -360],
        scale: [1, 1.05, 1],
      },
      { duration: 1, ease: "easeInOut" },
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
        className={`cursor-pointer${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="main" d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
      </motion.svg>
    </>
  );
}
