import { motion, useAnimate } from "motion/react";

export const Notification = () => {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".bell",
      { rotate: [0, 12, 0, -12, 0, 12, 0] },
      { duration: 0.7, ease: "easeInOut" },
    );

    animate(
      ".clapper",
      { x: [0, 3, 0, -3, 0] },
      { duration: 0.7, ease: "easeInOut" },
    );
  };

  const handleHoverEnd = () => {
    animate(".bell", { rotate: 0 }, { duration: 0.2 });
    animate(".clapper", { x: 0 }, { duration: 0.2 });
  };

  return (
    <>
      <div
        className=" flex justify-center items-center shadow-sm cursor-pointer
     dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 size-40 w-60 rounded-2xl"
      >
        {" "}
        <motion.svg
          ref={scope}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
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
      </div>
    </>
  );
};
