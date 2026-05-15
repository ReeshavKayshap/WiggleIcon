"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CustomizeBar } from "@/components/ui/CustomizeBar";
import { IconCard } from "@/components/ui/icon-card-preview";
import { IconDetailPreview } from "@/components/ui/IconDetailPreview";
import * as Icons from "@/components/icons";
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

  return (
    <>
      <div className="flex justify-between w-full gap-10 items-start">
        <div className="mt-24 pb-40 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
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
                    color={color}
                    onClick={() => setSelectedIcon(icon)}
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
                  &quot;{searchQuery}&quot;
                </span>
              </p>
            </motion.div>
          )}
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-start gap-10 w-full max-w-[340px] sticky top-5">
          <div className="w-full max-w-lg">
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
