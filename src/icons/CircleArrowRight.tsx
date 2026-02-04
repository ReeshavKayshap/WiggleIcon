import { motion, useAnimate } from "motion/react";
export function CircleArrowRight({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".main",

      { x: [0, -2, 2, 0] },

      { duration: 0.7, ease: "easeInOut" },
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
        <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
        <path className="main" d="M16 12l-4 -4" />
        <path className="main" d="M16 12h-8" />
        <path className="main" d="M12 16l4 -4" />
      </motion.svg>
    </>
  );
}
