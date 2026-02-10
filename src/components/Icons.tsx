import { IconList } from "@/lib/lib/IconList";
import { useState } from "react";
import { motion } from "motion/react";

import { Copy } from "@/icons/Copy";
import Search from "@/icons/Search";
import { ArrowRight } from "@/icons/ArrowRight";

import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/lib/utils";
import { Rotate } from "@/icons/Rotate";

const PAGE_SIZE = 24;

function Icon() {
  const [copied, setCopied] = useState<number | null>(null);

  const copyToClipboard = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);

    setTimeout(() => setCopied(null), 1500);
  };
  const [search, setSearch] = useState("");

  const filteredIcons = IconList.filter((icon) =>
    icon.title.toLowerCase().includes(search.toLowerCase()),
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

  const [size, setSize] = useState(60);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [durationOverride, setDurationOverride] = useState<number | null>(null);

  const resetToDefault = () => {
    setSize(60);
    setStrokeWidth(2);
    setDurationOverride(null);
  };
  return (
    <>
      <div className="max-w-336 mx-auto">
        <div className="  flex justify-between items-center">
          <div className=" py-10 pt-20 flex flex-col gap-10">
            <span className="flex flex-col gap-3">
              <h1 className="text-5xl font-text text-forground dark:text-background">
                Designed with intention{" "}
              </h1>
              <p className="text-lg font-text  dark:text-gray-400 text-gray-600">
                {" "}
                animated components that bring your UI to life.Ready to copy,
                customize, and deploy.
              </p>
              <div className="font-text pt-5 dark:text-gray-400 text-gray-600 flex items-center gap-2">
                <h4> To enable animations, install </h4>
                <span className=" flex items-center gap-1 cursor-pointer bg-neutral-800 px-3.5 py-1 rounded-lg dark:text-neutral-100 text-neutral-950">
                  <h4>motion</h4>
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </span>
              </div>
            </span>
            <span className="flex items-center relative  ">
              <span className=" absolute pl-4 dark:text-white">
                <Search size={19} />
              </span>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrent(1);
                }}
                type="text"
                placeholder="Search 50 Icons ..."
                className="dark:bg-neutral-800 bg-neutral-100 dark:text-white w-150 py-3 rounded-xl pl-13 shadow-sm 
         dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-700 ring-neutral-200 
         font-main outline-none focus:ring-1 focus:ring-neutral-500 focus:transition-all focus:duration-300 focus:ease-in-out not-focus:duration-300"
              />
            </span>
          </div>
          <div
            className="w-full max-w-sm space-y-4 font-text dark:bg-neutral-800 bg-neutral-100
           ring-1 dark:ring-neutral-700 ring-neutral-200  px-4 py-3 rounded-xl"
          >
            <span className="">
              {" "}
              <button
                onClick={resetToDefault}
                className="
                mt-3 text-sm font-text
                      text-neutral-500 hover:text-neutral-800
                        dark:hover:text-neutral-200
                         transition
                             "
              >
                <Rotate size={20} />
              </button>
            </span>

            <div>
              <label className="flex justify-between text-sm mb-1">
                <span>Size</span>
                <span>{size}px</span>
              </label>
              <input
                type="range"
                min={24}
                max={90}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className={cn(
                  "w-full h-2 rounded-full appearance-none cursor-grab active:cursor-grabbing",
                  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black dark:[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg",
                  "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-indigo-500",
                )}
                style={{
                  background: `linear-gradient(
                  to right,
                  #6366f1 0%, /* Indigo fill */
                  #6366f1 ${((size - 24) / (90 - 24)) * 100}%,
                  #d1d5db ${((size - 24) / (90 - 24)) * 100}%, /* Neutral unfilled */
                  #d1d5db 100%)`,
                }}
              />
            </div>

            {/* Stroke Width */}
            <div>
              <label className="flex justify-between text-sm mb-1">
                <span>Stroke</span>
                <span>{strokeWidth}</span>
              </label>
              <input
                type="range"
                min={1}
                max={4}
                step={0.5}
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm mb-1">
                <span>Animation</span>
                <span>
                  {" "}
                  {durationOverride === null
                    ? "default"
                    : `${durationOverride}s`}
                </span>
              </label>
              <input
                type="range"
                min={0.2}
                max={2}
                step={0.1}
                value={durationOverride ?? 0.8}
                onChange={(e) => setDurationOverride(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <span className=" relative ">
          <div className=" h-px w-full   " />

          <span className="max-w-336 mx-auto   flex flex-col   pt-7">
            <motion.div
              key={current}
              variants={variants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6  gap-8 "
            >
              {filteredIcons
                .slice(Start, End)
                .map(({ id, Component, title }) => (
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
                            <h3 className="font-text text-sm ">{title}</h3>
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
                        <Component
                          size={size}
                          strokeWidth={strokeWidth}
                          duration={durationOverride ?? undefined}
                        />
                      </span>

                      <span
                        onMouseEnter={() => setHover(id)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => copyToClipboard(copyText, id)}
                        className="w-fit flex justify-center"
                      >
                        {hover === id && (
                          <div className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200  flex flex-col justify-center items-center absolute -bottom-6  px-2.5 py-0.5  rounded-xl ">
                            <h3 className="font-text text-sm">
                              {copied === id ? "Copied" : "Click to copy"}
                            </h3>
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
                        {copied === id ? (
                          <IconCheck
                            size={16}
                            className="text-green-500  cursor-pointer"
                          />
                        ) : (
                          <Copy
                            size={16}
                            className="dark:text-neutral-700 text-neutral-500 cursor-pointer"
                          />
                        )}
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
