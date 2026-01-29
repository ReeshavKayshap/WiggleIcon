import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
export function InfoCircle() {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".show",

      { pathLength: [0, 1] },

      { duration: 0.5, ease: "easeInOut" },
    );
    animate(
      ".visible",

      { opacity: [0, 1] },

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
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path className="visible" d="M12 9h.01" />
            <path className="show" d="M11 12h1v4h1" />
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
