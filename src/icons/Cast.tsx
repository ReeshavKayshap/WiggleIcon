import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
export function Cast({ size = 70 }) {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".vibrate",

      { x: [-2, 2, -2, 2, 0] },

      { duration: 0.4, ease: "easeInOut" },
    );
    animate(
      ".show",

      { opacity: [1, 0, 1] },

      { duration: 0.6, ease: "easeInOut" },
    );
    animate(
      ".showTwo",

      { opacity: [1, 0, 1] },

      { duration: 0.6, ease: "easeInOut", delay: 0.2 },
    );
    animate(
      ".showThree",

      { opacity: [1, 0, 1] },

      { duration: 0.6, ease: "easeInOut", delay: 0.4 },
    );
  };

  return (
    <>
      <div
        className=" flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300  "
      >
        <span
          onMouseEnter={handleHover}
          ref={scope}
          className="flex cursor-pointer  items-center justify-center gap-2 p-2"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="vibrate"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="show" d="M3 19l.01 0" />
            <path className="showTwo" d="M7 19a4 4 0 0 0 -4 -4" />
            <path className="showThree" d="M11 19a8 8 0 0 0 -8 -8" />
            <path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
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
