import { IconList } from "@/lib/lib/IconList";
import { useState } from "react";
import { motion } from "motion/react";
import { IconCopy } from "@tabler/icons-react";

const PAGE_SIZE = 18;

function Icon() {
  const [hover, setHover] = useState<number | null>(null);
  const [name, setName] = useState<number | null>(null);
  const [current, setCurrent] = useState(1);
  const totalIcons = IconList.length;
  const NoOfPage = Math.ceil(totalIcons / PAGE_SIZE);
  const Start = (current - 1) * PAGE_SIZE;
  const End = Start + PAGE_SIZE;
  const handleClick = (page: number) => {
    setCurrent(page);
  };
  const variants = {
    initial: { opacity: 0, filter: "blur(10px)", y: 10 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <>
      <div className="pb-10">
        <div className=" border-r border-l max-w-7xl mx-auto flex flex-col gap-10  dark:border-neutral-800 border-neutral-200">
          <span className="flex items-center relative  px-15 py-10">
            <span className=" absolute pl-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search 50 Icons..."
              className="bg-neutral-800 w-130 py-3 rounded-xl pl-13 ring-2 ring-neutral-700 font-main outline-none"
            />
          </span>
        </div>
        <span className=" relative ">
          <div className=" h-px w-full   border-t dark:border-neutral-800 border-neutral-200" />
          <div className=" h-px w-full absolute bottom-0  border-t dark:border-neutral-800 border-neutral-200" />

          <span className="max-w-7xl mx-auto   flex flex-col  border-r border-l dark:border-neutral-800 border-neutral-200 px-15 pt-7">
            <motion.div
              key={current}
              variants={variants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6  gap-8 "
            >
              {IconList.slice(Start, End).map(({ id, Component, titel }) => (
                <span key={id}>
                  <span
                    className=" text-gray-300 flex flex-col   items-center justify-center  gap-4 rounded-lg p-4  shadow-sm relative
        
                  dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 "
                  >
                    <span
                      onMouseEnter={() => setName(id)}
                      onMouseLeave={() => setName(null)}
                    >
                      {name === id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="bg-neutral-200 text-black flex flex-col w-full justify-center items-center absolute -top-4 right-15.5 px-3.5   rounded-lg "
                        >
                          <h3 className="font-text text-sm ">{titel}</h3>
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
                      <Component />
                    </span>

                    <span
                      onMouseEnter={() => setHover(id)}
                      onMouseLeave={() => setHover(null)}
                      className="  cursor-pointer"
                    >
                      {hover === id && (
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
                  </span>
                </span>
              ))}
            </motion.div>
            <div className="flex justify-end gap-3 py-5 ">
              {Array.from({ length: NoOfPage }, (_, index) => {
                const page = index + 1;
                return (
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg 
                  border border-white/15  ring-1 ring-edge ring-offset-1 ring-offset-background"
                  >
                    {" "}
                    <motion.span
                      whileTap={{ scale: 0.9 }}
                      className=" font-text flex justify-center items-center bg-neutral-800 size-7 cursor-pointer rounded-lg border border-neutral-600"
                      key={page}
                      onClick={() => handleClick(page)}
                    >
                      {page}
                    </motion.span>
                  </div>
                );
              })}
            </div>
          </span>
        </span>
      </div>
    </>
  );
}

export default Icon;
