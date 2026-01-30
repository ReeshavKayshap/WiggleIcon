import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";

import { useState } from "react";
export function EyeOff({ size = 70 }) {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".line",

      { pathLength: [0, 1] },

      { duration: 0.6, ease: "easeInOut" },
    );

    animate(
      ".eye",
      {
        scale: [1, 0.96],
        x: [0, -1, 1, -1, 0],
        opacity: 0.6,
      },
      { duration: 0.4, ease: "easeInOut" },
    );
  };
  const handleHoverEnd = () => {
    animate(
      ".eye",
      {
        scale: [0.96, 1],
        opacity: 1,
      },
      { duration: 0.4, ease: "easeInOut" },
    );
  };

  return (
    <>
      <div
        className=" flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300  "
      >
        <span className="flex cursor-pointer  items-center justify-center gap-2 p-2">
          <motion.svg
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
            ref={scope}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="eye" d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
            <path
              className="eye"
              d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
            />
            <path className="line" d="M3 3l18 18" />
          </motion.svg>
        </span>

        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="  cursor-pointer"
        >
          {hover && (
            <div className="bg-neutral-200 text-black flex flex-col justify-center items-center absolute -bottom-6 right-11.5 px-2.5 py-0.5  rounded-lg ">
              <h3 className="font-text text-sm">Click to copy</h3>
              <span className=" absolute top-1  left-10 ">
                <svg
                  className="bg-neutral-200 block fill-neutral-200 z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs"
                  width="10"
                  height="5"
                  viewBox="0 0 30 10"
                  preserveAspectRatio="none"
                ></svg>
              </span>
            </div>
          )}
          <IconCopy className="size-4 text-neutral-700" />
        </span>
      </div>
    </>
  );
}
