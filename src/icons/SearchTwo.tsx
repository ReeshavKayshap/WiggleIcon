import { motion, useAnimate } from "motion/react";

export function SearchTwo({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const MouseEnter = () => {
    animate(
      ".flip",
      { rotateY: [0, 180, 0] },
      { duration: 0.8, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={MouseEnter}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        stroke={color}
        strokeWidth={strokeWidth}
        className={`cursor-pointer${className}`}
      >
        <path
          d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flip"
        />
      </motion.svg>
    </>
  );
}
