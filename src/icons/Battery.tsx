import { motion, useAnimate } from "motion/react";
export function Battery({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".show",

      { opacity: [0, 1, 0, 1, 0, 1, 0] },

      { duration: 1.2, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
        ref={scope}
        width={size}
        height={size}
        viewBox="0 0 22 14"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${className}`}
      >
        <path
          d="M15.4 1H3.39999C2.07451 1 1 2.07454 1 3.40002V10.6C1 11.9255 2.07451 13 3.39999 13H15.4C16.7255 13 17.8 11.9255 17.8 10.6V3.40002C17.8 2.07454 16.7255 1 15.4 1Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M21 8.59998V5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          className="show"
          d="M9 6V4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="show"
          d="M9 9V9.03955"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </>
  );
}
