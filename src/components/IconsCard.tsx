import { motion } from "motion/react";
import { useState } from "react";
import { Copy } from "@/icons/Copy";
import { IconCheck } from "@tabler/icons-react";
import type { IconItem } from "../types/Type";

interface IconCardProps {
  item: IconItem;
  size: number;
  strokeWidth: number;
  durationOverride: number | null;
  onCopy: (item: IconItem) => void;
  isCopied: boolean;
}

export const IconCard = ({
  item,
  size,
  strokeWidth,
  durationOverride,
  onCopy,
  isCopied,
}: IconCardProps) => {
  const [hover, setHover] = useState(false);
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
            <h3 className="font-text text-sm">{item.title}</h3>
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

      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => onCopy(item)}
        className="w-fit flex justify-center"
      >
        {hover && (
          <div className="dark:bg-neutral-200 bg-black dark:text-black text-neutral-200 flex flex-col justify-center items-center absolute -bottom-6 px-2.5 py-0.5 rounded-xl">
            <h3 className="font-text text-sm z-20">
              {isCopied ? "Code copied" : "Click to copy"}
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
          </div>
        )}
        {isCopied ? (
          <IconCheck size={16} className="text-green-500 cursor-pointer" />
        ) : (
          <Copy
            size={16}
            className="dark:text-neutral-700 text-neutral-500 cursor-pointer"
          />
        )}
      </span>
    </span>
  );
};
