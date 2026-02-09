import { motion, useAnimate } from "motion/react";

interface HomeProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  duration?: number;
}

function Home({
  size = 60,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: HomeProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(".house", { scale: [1.1, 1] }, { duration, ease: "easeInOut" });

    animate(
      ".door",
      { pathLength: [0, 1], opacity: [0, 1] },
      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
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
        <path className="house" d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path
          className="house"
          d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
        />
        <path className="door" d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </motion.svg>
    </>
  );
}

export default Home;
