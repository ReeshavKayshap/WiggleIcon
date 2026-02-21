import { IconList } from "@/lib/lib/IconList";
import { useState } from "react";
import { motion } from "motion/react";
import type { IconItem } from "../types/Type";
import { Search } from "@/icons/Search";
import { ArrowRight } from "@/icons/ArrowRight";
import { cn } from "@/lib/lib/utils";
import { IconCard } from "./IconsCard";

const PAGE_SIZE = 28;

function Icon() {
  const [size, setSize] = useState(40);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [durationOverride, setDurationOverride] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState(1);

  const filteredIcons = IconList.filter((icon) =>
    icon.title.toLowerCase().includes(search.toLowerCase()),
  );

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
    setSize(40);
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
      <section id="icons" className="scroll-mt-24 pb-10">
        <div className="flex justify-between items-center pb-10">
          <div className="flex flex-col gap-10">
            <span className="flex flex-col gap-3">
              <h1 className="text-5xl font-text text-forground dark:text-background">
                Designed with intention{" "}
              </h1>
              <p className="text-lg font-text dark:text-gray-300">
                {" "}
                animated components that bring your UI to life. Ready to copy,
                customize, and deploy.
              </p>
              <div className="font-text pt-5 dark:text-gray-400 text-gray-600 flex items-center gap-2">
                <h4> To enable animations, install </h4>
                <button
                  className="flex items-center gap-1 cursor-pointer dark:bg-neutral-900 bg-neutral-100 dark:hover:bg-neutral-800 hover:bg-neutral-50/95 px-3.5 py-1 rounded-lg
                 dark:text-neutral-100 text-neutral-950 border dark:border-neutral-700 border-neutral-300"
                >
                  <h4>motion</h4>
                  <span>
                    <ArrowRight size={20} />
                  </span>
                </button>
              </div>
            </span>

            <span className="flex items-center relative">
              <span className="absolute pl-4 dark:text-white">
                <Search size={19} />
              </span>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrent(1);
                }}
                type="text"
                placeholder="Search 50 Icons ..."
                className="dark:bg-neutral-800 bg-neutral-50 dark:text-white w-150 py-3 rounded-xl pl-13 shadow-sm 
                  dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-700 ring-neutral-200 
                   font-main outline-none focus:ring-1 focus:ring-neutral-500 focus:transition-all focus:duration-300 focus:ease-in-out not-focus:duration-300"
              />
            </span>
          </div>

          <div
            className="w-full max-w-lg flex flex-col gap-7 dark:bg-neutral-800 bg-neutral-50 shadow-sm dark:shadow-neutral-800 shadow-neutral-300
           ring-1 dark:ring-neutral-700 ring-neutral-200 px-4 py-5 rounded-2xl"
          >
            <span className="flex justify-between items-center">
              <div>
                <h1 className="font-inter text-lg">Customize icons</h1>
              </div>
              <button
                onClick={resetToDefault}
                className="
                text-[16px] dark:text-neutral-950 text-neutral-200 hover:text-neutral-50 dark:hover:text-black font-Adjust font-semibold transition duration-300
                 hover:bg-neutral-700 dark:hover:bg-neutral-200 bg-neutral-800 dark:bg-white px-4 py-0.5 rounded-lg cursor-pointer"
              >
                Reset
              </button>
            </span>

            <div className="flex flex-col gap-6">
              <div className="w-full relative">
                <span className="flex justify-between w-full text-lg">
                  <span className="text-neutral-500 font-Adjust font-semibold">
                    Size
                  </span>
                  <span className="font-extrabold font-mono text-neutral-600">
                    {size}
                  </span>
                </span>

                <span className="w-full max-w-xs absolute top-0 left-27">
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

              <div className="w-full relative">
                <div className="w-full relative">
                  <span className="flex justify-between w-full text-lg">
                    <span className="text-neutral-500 font-Adjust font-semibold">
                      Stroke
                    </span>
                    <span className="font-extrabold font-mono text-neutral-600">
                      {strokeWidth}
                    </span>
                  </span>

                  <div className="w-full max-w-xs absolute top-0 left-27">
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

              <div className="w-full relative">
                <div className="w-full relative">
                  <span className="flex justify-between w-full text-lg">
                    <span className="text-neutral-500 font-Adjust font-semibold">
                      Animation
                    </span>
                    <span className="font-extrabold font-mono text-neutral-600">
                      {durationOverride === null ? "0" : `${durationOverride}s`}
                    </span>
                  </span>

                  <div className="w-full max-w-xs absolute top-0 left-27">
                    <input
                      type="range"
                      min={0.2}
                      max={2}
                      step={0.01}
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

        <span className="relative">
          <div className="h-px w-full" />
          <span className="max-w-336 mx-auto flex flex-col pt-7">
            <motion.div
              key={current}
              variants={variants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-8"
            >
              {filteredIcons.slice(Start, End).map((item) => (
                <IconCard
                  key={item.id}
                  item={item}
                  size={size}
                  strokeWidth={strokeWidth}
                  durationOverride={durationOverride}
                  onCopy={copyToClipboard}
                  isCopied={copied === item.id}
                />
              ))}
            </motion.div>
            <div className="flex justify-end gap-3 py-5">
              {Array.from({ length: NoOfPage }, (_, index) => {
                const page = index + 1;
                return (
                  <div key={page}>
                    {" "}
                    <motion.span
                      whileTap={{ scale: 0.9 }}
                      className="font-text flex justify-center items-center  dark:bg-neutral-800 size-7
                      shadow-xs cursor-pointer rounded-sm border border-neutral-300 dark:border-neutral-600"
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
      </section>
    </>
  );
}

export default Icon;
