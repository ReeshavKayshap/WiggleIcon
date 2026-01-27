import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";

import { useState } from "react";
function Home() {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".house",
      { scale: [1.12, 1, 1.12, 1] },

      { duration: 0.8, ease: "easeInOut" },
    );

    animate(
      ".door",
      { pathLength: [0.05, 1], opacity: [0, 1] },
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
            <path className="house" d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path
              className="house"
              d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
            />
            <path
              className="door"
              d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
            />
          </motion.svg>
        </span>

        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="  cursor-pointer"
        >
          {hover && (
            <div className="bg-neutral-200 text-black flex flex-col justify-center items-center absolute -bottom-10 right-2 px-2.5 py-1  rounded-lg ">
              <h3 className="font-text">Click to copy</h3>
            </div>
          )}
          <IconCopy className="size-4 text-neutral-700" />
        </span>
      </div>
    </>
  );
}

export default Home;
<span className=" absolute bottom-0 translate-y-full left-[56.5px]">
  <svg
    className=" block bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs"
    width="10"
    height="5"
    viewBox="0 0 30 10"
    preserveAspectRatio="none"
  ></svg>
</span>;
