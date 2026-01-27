import { motion, useAnimate } from "motion/react";

export function Camera() {
  const [scope, animate] = useAnimate();
  const handleHover = () => {
    animate(
      ".flip",
      { rotateY: [0, 180, 0] },
      { duration: 1, ease: "easeInOut" },
    );
  };

  return (
    <>
      <div
        className="flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 "
      >
        <span className="flex cursor-pointer  items-center justify-center gap-2 p-2">
          <motion.svg
            onMouseEnter={handleHover}
            ref={scope}
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M8 21l8 0" />
            <path d="M12 17l0 4" />
          </motion.svg>
        </span>
      </div>
    </>
  );
}
