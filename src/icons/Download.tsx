import { motion, useAnimate } from "motion/react";

type UserProps = {
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
};
export function Download({
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
      ".down",
      {
        y: [0, -1.5, 1.5, -1.5, 0],
      },
      { duration: 0.9, ease: "easeInOut" },
    );
    animate(
      ".downTwo",
      {
        y: [0, -1.5, 1.5, -1.5, 0],
        scaleY: [1, 0.7, 1],
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
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`cursor-pointer${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <path className="down" d="M7 11l5 5l5 -5" />
        <path className="downTwo" d="M12 4l0 12" />
      </motion.svg>
    </>
  );
}
