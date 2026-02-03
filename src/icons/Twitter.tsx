import { motion, useAnimate } from "motion/react";
export function Twitter({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".up",

      { scale: [1, 1.1, 1], rotate: [0, -3, 3, -3, 3, -3, 0] },

      { duration: 0.98, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
        ref={scope}
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
        <path className="up" d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
        <path className="up" d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </motion.svg>
    </>
  );
}
