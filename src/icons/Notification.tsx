import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
import { useState } from "react";

export const Notification = ({ size = 70 }) => {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".bell",
      { rotate: [0, 12, 0, -12, 0, 12, 0] },
      { duration: 0.9, ease: "easeInOut" },
    );

    animate(
      ".clapper",
      { x: [0, 3, 0, -3, 0, 3, 0] },
      { duration: 0.9, ease: "easeInOut" },
    );
  };

  return (
    <>
      <div>
        <div
          className=" flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300  "
        >
          <span className="flex cursor-pointer  items-center justify-center gap-2 p-2">
            {" "}
            <motion.svg
              ref={scope}
              onMouseEnter={handleHover}
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
              <path
                className="bell"
                d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              />
              <path className="clapper" d="M9 17v1a3 3 0 0 0 6 0v-1" />
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
      </div>
    </>
  );
};
