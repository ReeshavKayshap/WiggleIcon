import { IconList } from "@/lib/lib/IconList";
import { useState } from "react";
import { motion } from "motion/react";
import type { IconItem } from "../types/Type";
import { Copy } from "@/icons/Copy";
import Search from "@/icons/Search";
import { ArrowRight } from "@/icons/ArrowRight";

import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/lib/utils";

const PAGE_SIZE = 24;

function Icon() {
  const [size, setSize] = useState(60);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [durationOverride, setDurationOverride] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

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

  const resetToDefault = () => {
    setSize(60);
    setStrokeWidth(2);
    setDurationOverride(null);
  };
  const generateCode = (
    source: string,
    size: number,
    strokeWidth: number,
    duration?: number,
  ) => {
    let updated = source
      .replace(/size\s*=\s*\d+/, `size = ${size}`)
      .replace(/strokeWidth\s*=\s*\d+/, `strokeWidth = ${strokeWidth}`);

    if (duration) {
      updated = updated.replace(
        /duration\s*=\s*[\d.]+/,
        `duration = ${duration}`,
      );
    }

    return updated;
  };
  const copyToClipboard = async (item: IconItem) => {
    const updatedCode = generateCode(
      item.source,
      size,
      strokeWidth,
      durationOverride ?? undefined,
    );

    await navigator.clipboard.writeText(updatedCode);

    setCopied(item.id);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <>
      <div>
        <div className="  flex justify-between items-center  pb-10">
          <div className="  flex flex-col gap-10">
            <span className="flex flex-col gap-3">
              <h1 className="text-5xl font-text text-forground dark:text-background">
                Designed with intention{" "}
              </h1>
              <p className="text-lg font-text  dark:text-gray-300 ">
                {" "}
                animated components that bring your UI to life.Ready to copy,
                customize, and deploy.
              </p>
              <div className="font-text pt-5 dark:text-gray-400 text-gray-600 flex items-center gap-2">
                <h4> To enable animations, install </h4>
                <button
                  className=" flex items-center gap-1 cursor-pointer dark:bg-neutral-900 bg-neutral-100 dark:hover:bg-neutral-800 hover:bg-neutral-50/95  px-3.5 py-1 rounded-lg
                 dark:text-neutral-100 text-neutral-950  border dark:border-neutral-700 border-neutral-300 "
                >
                  <h4>motion</h4>
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </button>
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
            className="w-full max-w-lg flex flex-col gap-7  dark:bg-neutral-800 bg-neutral-100 shadow-sm dark:shadow-neutral-800 shadow-neutral-300
           ring-1 dark:ring-neutral-700 ring-neutral-200  px-4 py-6 rounded-lg"
          >
            <span className="flex justify-between items-center">
              <div>
                <h1 className="font-inter text-lg">Customize icons</h1>
              </div>
              <button
                onClick={resetToDefault}
                className="
                text-[16px] dark:text-neutral-950 text-neutral-200 hover:text-neutral-50 dark:hover:text-black font-Adjust font-semibold transition duration-300
                 hover:bg-neutral-700 dark:hover:bg-neutral-200 bg-neutral-800 dark:bg-white px-4 py-0.5   rounded-lg cursor-pointer"
              >
                Reset
              </button>
            </span>

            <div className="flex flex-col gap-6">
              <div className="w-full relative ">
                <span className="flex justify-between w-full text-lg  ">
                  <span className="text-neutral-500 font-Adjust font-semibold ">
                    Size
                  </span>
                  <span className="font-extrabold font-mono text-neutral-600">
                    {size}
                  </span>
                </span>

                <span className="w-full max-w-xs absolute top-0 left-27 ">
                  {" "}
                  <input
                    type="range"
                    min={24}
                    max={90}
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className={cn(
                      "w-full h-1 rounded-full appearance-none cursor-grab active:cursor-grabbing",
                      "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black dark:[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg",
                      "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-indigo-500",
                    )}
                    style={{
                      background: `linear-gradient(
                  to right,
                  var(--range-fill) 0%, /* Indigo fill */
                  var(--range-fill) ${((size - 24) / (90 - 24)) * 100}%,
                  var(--range-track)${((size - 24) / (90 - 24)) * 100}%,
                  var(--range-track) 100%)`,
                    }}
                  />
                </span>
              </div>

              <div className="w-full relative ">
                <div className="w-full relative ">
                  <span className="flex justify-between w-full text-lg  ">
                    <span className="text-neutral-500 font-Adjust font-semibold ">
                      Stroke
                    </span>
                    <span className="font-extrabold font-mono text-neutral-600">
                      {strokeWidth}
                    </span>
                  </span>

                  <div className="w-full max-w-xs absolute top-0 left-27 ">
                    <input
                      type="range"
                      min={1}
                      max={4}
                      step={0.5}
                      value={strokeWidth}
                      onChange={(e) => setStrokeWidth(Number(e.target.value))}
                      className={cn(
                        "w-full h-1 rounded-full appearance-none cursor-grab active:cursor-grabbing",
                        "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black dark:[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg",
                        "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-indigo-500",
                      )}
                      style={{
                        background: `linear-gradient(
                  to right,
                  var(--range-fill) 0%,
                  var(--range-fill)${((strokeWidth - 1) / (4 - 1)) * 100}%,
                  var(--range-track)${((strokeWidth - 1) / (4 - 1)) * 100}%,
                  var(--range-track) 100%)`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full relative ">
                <div className="w-full relative ">
                  <span className="flex justify-between w-full text-lg  ">
                    <span className="text-neutral-500 font-Adjust font-semibold ">
                      Animation
                    </span>
                    <span className="font-extrabold font-mono text-neutral-600">
                      {durationOverride === null ? "0" : `${durationOverride}s`}
                    </span>
                  </span>

                  <div className="w-full max-w-xs absolute top-0 left-27 ">
                    <input
                      type="range"
                      min={0.2}
                      max={2}
                      step={0.1}
                      value={durationOverride ?? 1}
                      onChange={(e) =>
                        setDurationOverride(Number(e.target.value))
                      }
                      className={cn(
                        "w-full h-1 rounded-full appearance-none cursor-grab active:cursor-grabbing",
                        "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black dark:[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg",
                        "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-indigo-500",
                      )}
                      style={{
                        background: `linear-gradient(
                  to right,
                  var(--range-fill) 0%,
                  var(--range-fill)${(((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100}%,
                  var(--range-track)${(((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100}%, 
                  var(--range-track) 100%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
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
              {filteredIcons.slice(Start, End).map((item) => (
                <span key={item.id}>
                  <span
                    className=" dark:text-gray-300 text-neutral-800 flex flex-col   items-center justify-center  gap-4 rounded-lg p-4  shadow-sm relative
        
                  dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300 "
                  >
                    <span
                      onMouseEnter={() => setName(item.id)}
                      onMouseLeave={() => setName(null)}
                      className="w-full flex justify-center"
                    >
                      {name === item.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200 
                          flex flex-col  justify-center items-center absolute -top-6  px-3.5 py-0.5  rounded-xl "
                        >
                          <h3 className="font-text text-sm ">{item.title}</h3>
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
                      <item.Component
                        size={size}
                        strokeWidth={strokeWidth}
                        duration={durationOverride ?? undefined}
                      />
                    </span>

                    <span
                      onMouseEnter={() => setHover(item.id)}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => copyToClipboard(item)}
                      className="w-fit flex justify-center"
                    >
                      {hover === item.id && (
                        <div className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200  flex flex-col justify-center items-center absolute -bottom-6  px-2.5 py-0.5  rounded-xl ">
                          <h3 className="font-text text-sm">
                            {copied === item.id ? "Copied" : "Click to copy"}
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
                      {copied === item.id ? (
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
