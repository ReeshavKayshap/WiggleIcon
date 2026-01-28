import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
import { useState } from "react";

function Phone() {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    animate(
      ".phone",
      {
        scale: [1, 0.8, 0.8, 0.8, 1],
        rotate: [10, 0],
        y: [-2, 2, -2, 2, -2, 2, 0],
      },
      { duration: 0.9, ease: "easeInOut" },
    );
    animate(
      ".glow",
      {
        opacity: [1, 0, 1],
        rotate: [10, 0],
        scale: [1, 0.8, 0.8, 0.8, 1],
      },
      { duration: 0.7, ease: "easeInOut" },
    );
    animate(
      ".glowTwo",
      {
        opacity: [1, 0, 1, 0, 1],
        rotate: [10, 0],
        scale: [1, 0.8, 0.8, 0.8, 1],
      },
      { duration: 0.8, ease: "easeInOut" },
    );
  };
  return (
    <>
      <div
        className="flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 "
      >
        <span className="flex cursor-pointer  items-center justify-center gap-2 p-2">
          {" "}
          <motion.svg
            ref={scope}
            onMouseEnter={handleHover}
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              className="phone"
              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
            />
            <path className="glow" d="M15 7a2 2 0 0 1 2 2" />
            <path className="glowTwo" d="M15 3a6 6 0 0 1 6 6" />
          </motion.svg>
        </span>

        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="  cursor-pointer"
        >
          {hover && (
            <div className="bg-neutral-200 z-20 text-black flex flex-col justify-center items-center absolute -bottom-10 right-2 px-2.5 py-1  rounded-lg ">
              <h3 className="font-text">Click to copy</h3>
            </div>
          )}
          <IconCopy className="size-4 text-neutral-700" />
        </span>
      </div>
    </>
  );
}

export default Phone;
