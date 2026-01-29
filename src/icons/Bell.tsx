import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
export function Bel80() {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".show",

      { pathLength: [0, 1] },

      { duration: 0.8, ease: "easeInOut" },
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
            width="80"
            height="80"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99976 18C6.70743 18.5653 7.64195 18.9091 8.66642 18.9091C9.69089 18.9091 10.6254 18.5653 11.3331 18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.50739 15.1818H16.4931C16.9095 15.1818 17.1456 14.5379 16.9004 14.169C16.3327 13.3147 15.7812 12.0555 15.7812 10.537L15.8056 8.45995C15.8056 4.33993 12.7585 1 8.99976 1C5.29556 1 2.29272 4.29145 2.29272 8.35166L2.26831 10.537C2.26831 12.0451 1.69712 13.2975 1.10533 14.1514C0.850296 14.5194 1.08578 15.1818 1.50739 15.1818Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
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
