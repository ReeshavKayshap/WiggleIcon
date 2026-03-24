import { motion } from "motion/react";
import { useState } from "react";
import type { IconItem } from "../types/Type";
import { Copy } from "@/icons/Copy";
import { IconTerminal } from "@/icons/IconTerminal";
import { Check } from "@/icons/Check";

interface IconCardProps {
  item: IconItem;
  size: number;
  strokeWidth: number;
  durationOverride: number | null;
  onCopy: (item: IconItem, isCliProps?: boolean) => void;
  isCopied: boolean;
  isCliCopied: boolean;
}

export const IconCard = ({
  item,
  size,
  strokeWidth,
  durationOverride,
  onCopy,
  isCopied,
  isCliCopied,
}: IconCardProps) => {
  const [hover, setHover] = useState(false);
  const [cliHover, setCliHover] = useState(false);
  const [showName, setShowName] = useState(false);

  return (
    <span
      className="dark:text-gray-300 text-neutral-800 flex flex-col items-center justify-center gap-4 rounded-lg p-4 shadow-sm relative
        dark:shadow-neutral-800 shadow-neutral-300 ring-1 dark:ring-neutral-800 ring-neutral-300"
    >
      <span
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
        className="w-full flex justify-center"
      >
        {showName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200 
              flex flex-col justify-center items-center absolute -top-6 px-3.5 py-0.5 rounded-xl "
          >
            <h3 className="font-mono  text-[13.5px]">{item.title}</h3>
            <span className="absolute -bottom-2.5 -z-10">
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

      <span className="flex justify-center items-center gap-4  ">
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => onCopy(item)}
          className="w-fit flex justify-center relative"
        >
          {hover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200 flex flex-col justify-center items-center absolute -bottom-8 px-2.5 py-0.5 rounded-xl whitespace-nowrap"
            >
              <h3 className="font-mono  text-[13.5px] z-20">
                {isCopied ? "Code copied" : "Copy React code"}
              </h3>
              <span className="absolute top-1">
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
          {isCopied ? (
            <Check size={15} className="text-green-500 cursor-pointer" />
          ) : (
            <Copy
              size={15}
              className="dark:text-neutral-500 text-neutral-500 cursor-pointer hover:dark:text-neutral-300 hover:text-neutral-700 transition-colors"
            />
          )}
        </span>
        <span
          onMouseEnter={() => setCliHover(true)}
          onMouseLeave={() => setCliHover(false)}
          onClick={() => onCopy(item, true)}
          className="w-fit flex justify-center relative"
        >
          {cliHover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200 flex flex-col justify-center items-center absolute -bottom-8 px-2.5 py-0.5 rounded-xl whitespace-nowrap"
            >
              <h3 className="font-mono text-[13.5px] z-20">
                {isCliCopied ? "Import copied" : "Copy import"}
              </h3>
              <span className="absolute top-1">
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
          {isCliCopied ? (
            <Check size={18} className="text-green-500 cursor-pointer" />
          ) : (
            <IconTerminal
              size={18}
              className="dark:text-neutral-500 text-neutral-500 cursor-pointer hover:dark:text-neutral-300 hover:text-neutral-700 transition-colors"
            />
          )}
        </span>
      </span>
    </span>
  );
};
