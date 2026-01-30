import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { motion, useAnimate } from "motion/react";
export function FaceId({ size = 70 }) {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const handleHover = async () => {
    animate(
      ".face",

      { x: [2, -2, 0] },

      { duration: 0.8, ease: "easeInOut" },
    );
    animate(
      "#blink",

      { scaleY: [1, 0, 1] },

      { duration: 0.4, ease: "easeInOut", delay: 0.6 },
    );
    animate(
      ".scan",

      { opacity: [0, 1, 0, 1, 0], y: [0, 23, 0] },

      { duration: 1.3, ease: "easeInOut", delay: 0.9 },
    );
  };

  return (
    <>
      <div
        className=" flex  flex-1 flex-col items-center justify-center gap-4 rounded-lg p-4  shadow-sm relative
        
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300  "
      >
        <span className="flex cursor-pointer z-30 items-center justify-center gap-2 p-2">
          {/* <motion.svg
            onMouseEnter={handleHover}
            ref={scope}
            width="80"
            height="80"
            viewBox="0 0 22 25"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.4 4H3.13333C1.95513 4 1 4.95513 1 6.13333V10.4M7.4 23.2H3.13333C1.95513 23.2 1 22.2449 1 21.0667V16.8M13.8 4H18.0667C19.2449 4 20.2 4.95513 20.2 6.13333V10.4M20.2 16.8V21.0667C20.2 22.2449 19.2449 23.2 18.0667 23.2H13.8"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M1 1H20.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.5 10.17V9M7.35266 16.6049C8.72082 17.665 11.7889 17.665 13.7007 16.6049M10.1 13.68L10.3485 13.4377C10.5736 13.2183 10.7 12.9207 10.7 12.6104V9.585M14.8999 10.17V9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </motion.svg> */}
          <motion.svg
            onMouseEnter={handleHover}
            ref={scope}
            width={size}
            height={size}
            viewBox="0 0 22 25"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.4 4H3.13333C1.95513 4 1 4.95513 1 6.13333V10.4M7.4 23.2H3.13333C1.95513 23.2 1 22.2449 1 21.0667V16.8M13.8 4H18.0667C19.2449 4 20.2 4.95513 20.2 6.13333V10.4M20.2 16.8V21.0667C20.2 22.2449 19.2449 23.2 18.0667 23.2H13.8"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              className="scan"
              d="M1 1H20.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="face"
              d="M6.5 10.17V9M7.35266 16.6049C8.72082 17.665 11.7889 17.665 13.7007 16.6049M10.1 13.68L10.3485 13.4377C10.5736 13.2183 10.7 12.9207 10.7 12.6104V9.585"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="blink"
              className="face"
              d="M14.9 10.17L14.8999 9"
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
