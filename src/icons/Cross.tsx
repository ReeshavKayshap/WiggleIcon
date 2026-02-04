import { motion, useAnimate } from "motion/react";

export function Cross({
  size = 60,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".one",
      {
        scale: [1, 0.85, 1],
      },
      { duration: 0.6, ease: "easeInOut" },
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
        <path className="one" d="M18 6l-12 12" />
        <path className="one" d="M6 6l12 12" />
      </motion.svg>
    </>
  );
}
