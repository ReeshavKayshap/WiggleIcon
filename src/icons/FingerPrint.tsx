import { motion, useAnimate } from "motion/react";

export function FingerPrint({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".main",
      { pathLength: [1, 0] },

      { duration: 0.8, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
        width={size}
        height={size}
        viewBox="0 0 19 22"
        stroke={color}
        strokeWidth={strokeWidth}
        className={`cursor-pointer${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.6002 9.80302C13.5958 7.99316 12.4002 5.85889 9.91878 5.85889C7.43736 5.85889 5.98467 7.89489 5.98027 9.70048V10.7932C5.98027 13.3928 5.68108 15.8814 4.07227 17.9602"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-neutral-400"
        />
        <path
          className="main"
          d="M13.6002 9.80302C13.5958 7.99316 12.4002 5.85889 9.91878 5.85889C7.43736 5.85889 5.98467 7.89489 5.98027 9.70048V10.7932C5.98027 13.3928 5.68108 15.8814 4.07227 17.9602"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M3.12335 5C2.38048 6.19519 1.99366 7.55686 1.99366 8.94413C1.99366 9.22159 2.05081 10.9973 2.05081 10.9973C2.05081 12.3334 1.69036 13.6481 1.00024 14.8091"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6902 19.7851C12.4023 19 13.6002 15.4 13.6002 13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8399 17.0839C17.4905 14.9624 17.807 10.8518 17.807 8.6407C17.807 4.43191 14.2993 1.01281 9.96073 1H9.93876C8.55852 1 7.20026 1.35429 6.00024 2.02445"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.93018 20.5379C8.89064 17.7975 10.0112 14.5406 10.0112 11.2026V9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </>
  );
}
