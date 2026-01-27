import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";

import { useState } from "react";
export function UnorderedList() {
  const stroke = 1.5;
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".one",

      { scale: [1, 1.2, 1], strokeWidth: [stroke, 1.8, stroke] },

      { duration: 0.4, ease: "easeInOut" },
    );

    animate(
      ".two",
      { scale: [1, 1.2, 1], strokeWidth: [stroke, 1.8, stroke] },
      { duration: 0.4, ease: "easeInOut", delay: 0.3 },
    );
    animate(
      ".three",
      { scale: [1, 1.2, 1], strokeWidth: [stroke, 1.8, stroke] },

      { duration: 0.4, ease: "easeInOut", delay: 0.6 },
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
            onMouseEnter={handleHover}
            ref={scope}
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="one" d="M9 6l11 0" />
            <path className="two" d="M9 12l11 0" />
            <path className="three" d="M9 18l11 0" />
            <path className="one" d="M5 6l0 .01" />
            <path className="two" d="M5 12l0 .01" />
            <path className="three" d="M5 18l0 .01" />
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
