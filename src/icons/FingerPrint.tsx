import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";

import { useState } from "react";
export function FingerPrint({ size = 70 }) {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const [name, setName] = useState(false);
  const handleHover = async () => {
    animate(
      ".main",
      { pathLength: [1, 0] },

      { duration: 0.8, ease: "easeInOut" },
    );
  };

  return (
    <>
      <div
        className="flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 "
      >
        <span
          onMouseEnter={() => setName(true)}
          onMouseLeave={() => setName(false)}
          className="flex cursor-pointer  items-center justify-center gap-2 p-2 "
        >
          {name && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-neutral-200 text-black flex flex-col justify-center items-center absolute -top-4 right-15.5 px-2.5 py-0.5  rounded-lg "
            >
              <h3 className="font-text text-sm">home-icon</h3>
              <span className=" absolute -bottom-2.5  left-10 ">
                <svg
                  className="bg-neutral-200 block fill-neutral-200 z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs"
                  width="10"
                  height="5"
                  viewBox="0 0 30 10"
                  preserveAspectRatio="none"
                ></svg>
              </span>
            </motion.div>
          )}
          <motion.svg
            ref={scope}
            onMouseEnter={handleHover}
            width={size}
            height={size}
            viewBox="0 0 19 22"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6002 9.80302C13.5958 7.99316 12.4002 5.85889 9.91878 5.85889C7.43736 5.85889 5.98467 7.89489 5.98027 9.70048V10.7932C5.98027 13.3928 5.68108 15.8814 4.07227 17.9602"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-neutral-400"
            />
            <path
              className="main"
              d="M13.6002 9.80302C13.5958 7.99316 12.4002 5.85889 9.91878 5.85889C7.43736 5.85889 5.98467 7.89489 5.98027 9.70048V10.7932C5.98027 13.3928 5.68108 15.8814 4.07227 17.9602"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <path
              d="M3.12335 5C2.38048 6.19519 1.99366 7.55686 1.99366 8.94413C1.99366 9.22159 2.05081 10.9973 2.05081 10.9973C2.05081 12.3334 1.69036 13.6481 1.00024 14.8091"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6902 19.7851C12.4023 19 13.6002 15.4 13.6002 13"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.8399 17.0839C17.4905 14.9624 17.807 10.8518 17.807 8.6407C17.807 4.43191 14.2993 1.01281 9.96073 1H9.93876C8.55852 1 7.20026 1.35429 6.00024 2.02445"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.93018 20.5379C8.89064 17.7975 10.0112 14.5406 10.0112 11.2026V9"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-neutral-200 text-black flex flex-col justify-center items-center absolute -bottom-6 right-11.5 px-2.5 py-0.5  rounded-lg "
            >
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
            </motion.div>
          )}
          <IconCopy className="size-4 text-neutral-700" />
        </span>
      </div>
    </>
  );
}
