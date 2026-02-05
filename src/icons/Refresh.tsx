import { motion, useAnimate } from "motion/react";
export function Refresh({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      "#one",
      {
        rotate: [0, -360],
        scale: [1, 1.05, 1],
      },
      { duration: 1, ease: "easeInOut" },
    );
  };

  return (
    <>
      <span onMouseEnter={handleHover} ref={scope}>
        {" "}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          id="one"
          className={`cursor-pointer${className}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
        </motion.svg>
      </span>
    </>
  );
}
