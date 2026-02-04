import { motion, useAnimate } from "motion/react";
export function VolumeOff({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".line",

      { pathLength: [0, 1] },

      { duration: 0.6, ease: "easeInOut" },
    );
    animate(
      ".sound",
      {
        scale: [1, 0.96],
        x: [0, -1, 1, -1, 0],
        opacity: 0.6,
      },
      { duration: 0.4, ease: "easeInOut" },
    );
  };
  const handleHoverEnd = () => {
    animate(
      ".sound",
      {
        scale: [0.96, 1],
        opacity: 1,
      },
      { duration: 0.4, ease: "easeInOut" },
    );
  };
  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
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
        <path
          className="sound"
          d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464"
        />
        <path
          className="sound"
          d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615"
        />
        <path
          className="sound"
          d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664"
        />
        <path className="line" d="M3 3l18 18" />
      </motion.svg>
    </>
  );
}
