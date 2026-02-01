import { motion, useAnimate } from "motion/react";

export function Menu({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".showTwo",

      { scaleX: [1, 0.25, 1] },

      { duration: 0.5, ease: "easeInOut" },
    );
    animate(
      ".showOne",

      { scaleX: [1, 0.3, 1] },

      { duration: 0.5, ease: "easeInOut", delay: 0.1 },
    );
    animate(
      ".showThree",

      { scaleX: [1, 0.3, 1] },

      { duration: 0.5, ease: "easeInOut", delay: 0.2 },
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
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`cursor-pointer${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="showOne" d="M4 6l16 0" />
        <path className="showTwo" d="M4 12l16 0" />
        <path className="showThree" d="M4 18l16 0" />
      </motion.svg>
    </>
  );
}
