import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
export function Edit() {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".main",

      {
        x: [-2, 2, -2, 2, 0],
        rotate: [0, -16, -10, -8, 3, 0],
      },

      { duration: 0.9, ease: "easeInOut" },
    );
  };

  return (
    <>
      <div
        className=" flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300  "
      >
        <span className="flex cursor-pointer z-30 items-center justify-center gap-2 p-2">
          <motion.svg
            onMouseEnter={handleHover}
            ref={scope}
            width="80"
            height="80"
            viewBox="0 0 18 18"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="main"
              d="M9.99994 3.50319L13.5999 7.10319M1 16.1032L5.36598 15.2235C5.59776 15.1768 5.81058 15.0626 5.97772 14.8954L15.7514 5.11637C16.22 4.64752 16.2197 3.88753 15.7507 3.41907L13.6803 1.35099C13.2115 0.882725 12.4519 0.883044 11.9835 1.3517L2.20876 11.1318C2.04195 11.2987 1.92805 11.511 1.8813 11.7423L1 16.1032Z"
              stroke-width="1.5"
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
