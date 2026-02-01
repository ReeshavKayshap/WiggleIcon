import { motion, useAnimate } from "motion/react";

type UserProps = {
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
};
export function User({
  size = 60,
  width,
  height,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}: UserProps) {
  const [scope, animate] = useAnimate();
  const finalWidth = width ?? size;
  const finalHeight = height ?? size;

  const handleHover = () => {
    animate(
      ".top",
      {
        y: [0, -1.5, 1.5, -1.5, 0],
      },
      { duration: 0.9, ease: "easeInOut" },
    );
  };
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
        xmlns="http://www.w3.org/2000/svg"
        width={finalWidth}
        height={finalHeight}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path className="top" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path
          className="bottom"
          d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
        />
      </motion.svg>
    </>
  );
}
