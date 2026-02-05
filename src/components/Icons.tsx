import { IconList } from "@/lib/lib/IconList";
import { useState } from "react";
import { motion } from "motion/react";

import { Copy } from "@/icons/Copy";
import Search from "@/icons/Search";

const PAGE_SIZE = 18;

function Icon() {
  const [search, setSearch] = useState("");

  const filteredIcons = IconList.filter((icon) =>
    icon.titel.toLowerCase().includes(search.toLowerCase()),
  );
  const [hover, setHover] = useState<number | null>(null);
  const [name, setName] = useState<number | null>(null);
  const [current, setCurrent] = useState(1);
  const totalIcons = filteredIcons.length;
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
          <div className="px-15 py-10 pt-20 flex flex-col gap-10">
            <span className="flex flex-col gap-3">
              <h1 className="text-5xl font-text ">Designed with intention </h1>
              <p className="text-lg font-text  dark:text-gray-400 text-gray-600">
                {" "}
                animated components that bring your UI to life.Ready to copy,
                customize, and deploy.
              </p>
              {/* <h4 className="font-text pt-5 dark:text-gray-400 text-gray-600">
                Install{" "}
                <span
                  className=" cursor-pointer dark:text-sky-400 text-sky-500
               "
                >
                  motion
                </span>{" "}
                for animation.
              </h4> */}
            </span>
            <span className="flex items-center relative  ">
              <span className=" absolute pl-4">
                <Search size={19} />
              </span>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrent(1);
                }}
                type="text"
                placeholder="Search 50 Icons ..."
                className="dark:bg-neutral-800 bg-neutral-100 w-150 py-3 rounded-xl pl-13 shadow-sm 
         dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-700 ring-neutral-200 
         font-main outline-none focus:ring-1 focus:ring-neutral-500 focus:transition-all focus:duration-300 focus:ease-in-out not-focus:duration-300"
              />
            </span>
          </div>
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
              {filteredIcons
                .slice(Start, End)
                .map(({ id, Component, titel }) => (
                  <span key={id}>
                    <span
                      className=" dark:text-gray-300 text-neutral-800 flex flex-col   items-center justify-center  gap-4 rounded-lg p-4  shadow-sm relative
        
                  dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 "
                    >
                      <span
                        onMouseEnter={() => setName(id)}
                        onMouseLeave={() => setName(null)}
                        className="w-full flex justify-center"
                      >
                        {name === id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200 
                          flex flex-col  justify-center items-center absolute -top-6  px-3.5 py-0.5  rounded-xl "
                          >
                            <h3 className="font-text text-sm ">{titel}</h3>
                            <span className=" absolute -bottom-2.5  -z-10 ">
                              <svg
                                className="dark:bg-neutral-200 bg-black dark:fill-neutral-200 fill-black z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs"
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
                        className="w-fit flex justify-center"
                      >
                        {hover === id && (
                          <div className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200  flex flex-col justify-center items-center absolute -bottom-6  px-2.5 py-0.5  rounded-xl ">
                            <h3 className="font-text text-sm">Click to copy</h3>
                            <span className=" absolute top-1  ">
                              <svg
                                className="dark:bg-neutral-200 bg-black dark:fill-neutral-200 fill-black z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs"
                                width="10"
                                height="5"
                                viewBox="0 0 30 10"
                                preserveAspectRatio="none"
                              ></svg>
                            </span>
                          </div>
                        )}
                        <Copy
                          size={16}
                          className=" dark:text-neutral-700 text-neutral-500"
                        />
                      </span>
                    </span>
                  </span>
                ))}
            </motion.div>
            <div className="flex justify-end gap-3 py-5 ">
              {Array.from({ length: NoOfPage }, (_, index) => {
                const page = index + 1;
                return (
                  <div>
                    {" "}
                    <motion.span
                      whileTap={{ scale: 0.9 }}
                      className=" font-text flex justify-center items-center bg-neutral-800 size-7 cursor-pointer rounded-sm border border-neutral-600"
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
