import { motion, useAnimate } from "motion/react";

export const File = ({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) => {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".bell",
      { rotate: [0, 12, 0, -12, 0, 12, 0] },
      { duration: 0.9, ease: "easeInOut" },
    );

    animate(
      ".clapper",
      { x: [0, 3, 0, -3, 0, 3, 0] },
      { duration: 0.9, ease: "easeInOut" },
    );
  };

  return (
    <>
      <svg
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
        <path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" />
      </svg>
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
          className="bell"
          d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
        />
        <path className="clapper" d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </motion.svg>
    </>
  );
};
