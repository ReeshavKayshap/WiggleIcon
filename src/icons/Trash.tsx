import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
export function Trash({ size = 70 }) {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".up",

      { y: [0, -5, -3, -1.2, 0], rotate: [0, -3, 3, -3, 0] },

      { duration: 0.98, ease: "easeInOut" },
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
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="up" d="M4 7l16 0" />
            <path className="down" d="M10 11l0 6" />
            <path className="down" d="M14 11l0 6" />
            <path
              className="down"
              d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
            />
            <path className="up" d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
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
