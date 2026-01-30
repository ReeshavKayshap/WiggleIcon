import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";

import { useState } from "react";
function Home({ size = 70, stroke = 1.5 }) {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const [name, setName] = useState(false);
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
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
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

export default Home;
