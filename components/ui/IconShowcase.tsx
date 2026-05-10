"use client";

import { useState } from "react";
import { CustomizeBar } from "@/components/ui/CustomizeBar";
import { IconCard } from "@/components/ui/icon-card-preview";
import * as Icons from "@/components/icons";
import { motion, AnimatePresence } from "motion/react";

interface IconShowcaseProps {
  searchQuery: string;
}

export function IconShowcase({ searchQuery }: IconShowcaseProps) {
  const [size, setSize] = useState(35);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [durationOverride, setDurationOverride] = useState<number | null>(null);

  const resetToDefault = () => {
    setSize(35);
    setStrokeWidth(2);
    setDurationOverride(null);
  };

  const iconEntries = Object.entries(Icons).map(([name, Component]) => ({
    name,
    Component,
  }));

  const filteredIcons = iconEntries.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="flex justify-between w-full gap-10 items-start">
        <div className="mt-16 pb-40 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-7">
            <AnimatePresence mode="popLayout">
              {filteredIcons.map((icon) => (
                <motion.div
                  key={icon.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <IconCard
                    name={icon.name}
                    IconComponent={icon.Component}
                    size={size}
                    strokeWidth={strokeWidth}
                    duration={durationOverride}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredIcons.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-neutral-50 dark:bg-neutral-900/20 rounded-[3rem] border border-dashed border-neutral-200 dark:border-neutral-800"
            >
              <p className="text-neutral-400 text-2xl font-medium">
                No components found for{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  "{searchQuery}"
                </span>
              </p>
            </motion.div>
          )}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-10 w-full max-w-[340px] sticky top-5">
          <div className="w-full max-w-lg">
            <CustomizeBar
              size={size}
              setSize={setSize}
              strokeWidth={strokeWidth}
              setStrokeWidth={setStrokeWidth}
              durationOverride={durationOverride}
              setDurationOverride={setDurationOverride}
              resetToDefault={resetToDefault}
            />
          </div>
        </div>
      </div>
    </>
  );
}
