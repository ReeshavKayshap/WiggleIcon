import { motion, useAnimate } from "motion/react";

export function Upload({
  size = 60,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".down",
      {
        y: [0, -3.5, 0],
      },
      { duration: 0.5, ease: "easeInOut" },
    );
    animate(
      ".downThree",
      {
        y: [0, -1.1, 0],
      },
      { duration: 0.5, ease: "easeInOut" },
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
          className="downThree"
          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
        />
        <path className="down" d="M7 9l5 -5l5 5" />
        <path className="down" d="M12 4l0 12" />
      </motion.svg>
    </>
  );
}
