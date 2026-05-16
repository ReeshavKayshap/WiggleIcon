"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CustomizeBar } from "@/components/ui/CustomizeBar";
import { IconCard } from "@/components/ui/icon-card-preview";
import { IconDetailPreview } from "@/components/ui/IconDetailPreview";
import * as Icons from "@/lib";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedIconHandle, IconProps } from "@/types/Type";
import React from "react";

interface IconShowcaseProps {
  searchQuery: string;
}

type IconEntry = {
  name: string;
  Component: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<AnimatedIconHandle>
  >;
};

export function IconShowcase({ searchQuery }: IconShowcaseProps) {
  const { resolvedTheme } = useTheme();
  const [size, setSize] = useState(32);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [durationOverride, setDurationOverride] = useState<number | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<IconEntry | null>(null);
  const [color, setColor] = useState("#ffffff");
  const [isColorCustom, setIsColorCustom] = useState(false);

  // Sync color with theme if not customized
  useEffect(() => {
    if (!isColorCustom) {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }
  }, [resolvedTheme, isColorCustom]);

  const handleSetColor = (newColor: string) => {
    setColor(newColor);
    setIsColorCustom(true);
  };

  const resetToDefault = () => {
    setSize(32);
    setStrokeWidth(2);
    setDurationOverride(null);
    setIsColorCustom(false);
  };

  const iconEntries: IconEntry[] = Object.entries(Icons).map(
    ([name, Component]) => ({
      name,
      Component,
    }),
  );

  const filteredIcons = iconEntries.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between w-full gap-10 items-start">
        <div className="mt-8 md:mt-24 w-full">
          <motion.div
            key={`${searchQuery}-${resolvedTheme}`}
            variants={{
              hidden: { opacity: 1 },
              show: {
                transition: {
                  staggerChildren: 0.02,
                },
              },
            }}
            initial={isFirstRender ? false : "hidden"}
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredIcons.map((icon) => (
                <motion.div
                  key={icon.name}
                  layout
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                      filter: "blur(10px)",
                      scale: 0.9,
                    },
                    show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
                  }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    layout: { duration: 0.3 },
                  }}
                >
                  <IconCard
                    name={icon.name}
                    IconComponent={icon.Component}
                    size={size}
                    strokeWidth={strokeWidth}
                    duration={durationOverride}
                    color={color}
                    onClick={() => setSelectedIcon(icon)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredIcons.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 md:py-32 bg-neutral-50 dark:bg-neutral-900/20 rounded-4xl md:rounded-[3rem] 
              border border-dashed border-neutral-200 dark:border-neutral-800"
            >
              <p className="text-neutral-400 text-xl md:text-2xl font-medium">
                No components found for{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  &quot;{searchQuery}&quot;
                </span>
              </p>
            </motion.div>
          )}
        </div>

        <div className="mt-24 flex flex-col justify-between items-start gap-10 w-full md:max-w-[340px] md:sticky md:top-5">
          <div className="md:w-full  w-fit  md:max-w-lg">
            <CustomizeBar
              size={size}
              setSize={setSize}
              strokeWidth={strokeWidth}
              setStrokeWidth={setStrokeWidth}
              durationOverride={durationOverride}
              setDurationOverride={setDurationOverride}
              color={color}
              setColor={handleSetColor}
              resetToDefault={resetToDefault}
            />
          </div>
        </div>
      </div>

      {/* Icon Detail Preview Panel */}
      <IconDetailPreview
        selectedIcon={selectedIcon}
        onClose={() => setSelectedIcon(null)}
        size={size}
        strokeWidth={strokeWidth}
        duration={durationOverride}
        color={color}
      />
    </>
  );
}
