import { motion, useAnimate } from "motion/react";
function Search() {
  const [scope, animate] = useAnimate();
  const handleHover = () => {
    animate(
      ".flip",
      { rotateY: [0, 180, 0] },
      { duration: 1, ease: "easeInOut" },
    );
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
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          //   className="size-5 size-70"
          width="70"
          height="70"
        >
          <path
            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flip"
          />
        </motion.svg>
      </div>
    </>
  );
}

export default Search;
