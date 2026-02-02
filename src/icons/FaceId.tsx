import { motion, useAnimate } from "motion/react";
export function FaceId({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".face",

      { x: [2, -2, 0] },

      { duration: 0.8, ease: "easeInOut" },
    );
    animate(
      "#blink",

      { scaleY: [1, 0, 1] },

      { duration: 0.4, ease: "easeInOut", delay: 0.6 },
    );
    animate(
      ".scan",

      { opacity: [0, 1, 0, 1, 0], y: [0, 23, 0] },

      { duration: 1.3, ease: "easeInOut", delay: 0.9 },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
        ref={scope}
        width={size}
        height={size}
        viewBox="0 0 22 25"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${className}`}
      >
        <path
          d="M7.4 4H3.13333C1.95513 4 1 4.95513 1 6.13333V10.4M7.4 23.2H3.13333C1.95513 23.2 1 22.2449 1 21.0667V16.8M13.8 4H18.0667C19.2449 4 20.2 4.95513 20.2 6.13333V10.4M20.2 16.8V21.0667C20.2 22.2449 19.2449 23.2 18.0667 23.2H13.8"
          strokeLinecap="round"
        />
        <motion.path
          className="scan"
          initial={{ opacity: 0 }}
          d="M1 1H20.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="face"
          d="M6.5 10.17V9M7.35266 16.6049C8.72082 17.665 11.7889 17.665 13.7007 16.6049M10.1 13.68L10.3485 13.4377C10.5736 13.2183 10.7 12.9207 10.7 12.6104V9.585"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="blink"
          className="face"
          d="M14.9 10.17L14.8999 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </>
  );
}
