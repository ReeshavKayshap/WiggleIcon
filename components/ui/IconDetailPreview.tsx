"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedIconHandle, IconProps } from "@/types/Type";
import { IconX, IconCode, IconPackage } from "@tabler/icons-react";
import { PackageUsage } from "./PackageUsage";
import { ManualUsage } from "./ManualUsage";

interface IconDetailPreviewProps {
  selectedIcon: {
    name: string;
    Component: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<AnimatedIconHandle>
    >;
  } | null;
  onClose: () => void;
  size: number;
  strokeWidth: number;
  duration: number | null;
  color: string;
}

export function IconDetailPreview({
  selectedIcon,
  onClose,
  size,
  strokeWidth,
  duration,
  color,
}: IconDetailPreviewProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  const [activeTab, setActiveTab] = useState<"package" | "manual">("package");
  const tabs = [
    {
      id: "package",
      label: "Package Usage",
      icon: <IconPackage size={15} stroke={1.5} />,
    },
    {
      id: "manual",
      label: "Manual Usage",
      icon: <IconCode size={15} stroke={1.5} />,
    },
  ] as const;

  const [iconCode, setIconCode] = useState("");

  const getJsxImport = useCallback((name: string) => {
    return `import { ${name} } from "@/components/icons/${name}";`;
  }, []);

  const getJsxUsage = useCallback(
    (name: string) => {
      return `<${name} size={${size}} strokeWidth={${strokeWidth}} color="${color}"${
        duration !== null ? ` duration={${duration}}` : ""
      } />`;
    },
    [size, strokeWidth, duration, color],
  );

  useEffect(() => {
    if (!selectedIcon) return;

    setActiveTab("package");

    const fetchCode = async () => {
      try {
        const res = await fetch(`/api/icon-source?name=${selectedIcon.name}`);

        const data = await res.json();

        setIconCode(data.code);
      } catch {
        setIconCode("// Failed to load source code");
      }
    };

    fetchCode();
  }, [selectedIcon]);

  return (
    <AnimatePresence>
      {selectedIcon && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 0.23,
              ease: "easeOut",
            }}
            className="fixed right-4 top-4 bottom-4 z-50 w-full max-w-[520px] flex flex-col dark:bg-[#0A0A0A] bg-[#FAFAFA]  
            ring ring-neutral-400 dark:ring-neutral-800/60 rounded-2xl shadow-sm "
          >
            <div
              className="flex items-center justify-between px-6 pt-5 pb-4 border-b dark:border-neutral-800/60
             border-neutral-200"
            >
              <h2 className="dark:text-white text-neutral-900 font-semibold text-lg tracking-tight font-sans">
                {selectedIcon.name}
              </h2>

              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg
                hover:bg-neutral-800 cursor-pointer"
              >
                <IconX size={18} stroke={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6 custom-scrollbar">
              <div className="flex flex-col items-center gap-5">
                <div
                  key={selectedIcon.name}
                  className="w-full aspect-square max-w-[240px] rounded-2xl dark:bg-neutral-900 bg-neutral-100 border dark:border-neutral-800/40 border-neutral-200
                  flex items-center justify-center relative overflow-hidden group cursor-pointer"
                  onMouseEnter={() => {
                    if (iconRef.current?.startAnimation) {
                      iconRef.current.startAnimation();
                    }
                  }}
                  onMouseLeave={() => {
                    if (iconRef.current?.stopAnimation) {
                      iconRef.current.stopAnimation();
                    }
                  }}
                >
                  <selectedIcon.Component
                    ref={iconRef}
                    size={80}
                    strokeWidth={strokeWidth}
                    color={color}
                    {...(duration !== null ? { duration } : {})}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-mono text-neutral-500 dark:bg-neutral-900 bg-neutral-100 px-3 
                  py-1.5 rounded-[7px] border dark:border-neutral-800/40 border-neutral-200/60"
                  >
                    {size}px
                  </span>

                  <span
                    className="text-xs font-mono text-neutral-500 dark:bg-neutral-900 bg-neutral-100 px-3 
                  py-1.5 rounded-[7px] border dark:border-neutral-800/40 border-neutral-200/60"
                  >
                    Stroke: {strokeWidth}
                  </span>
                </div>
              </div>

              <div
                className="flex justify-between items-center p-1 dark:bg-neutral-900 bg-neutral-100 border dark:border-neutral-800/40
               border-neutral-200/60 rounded-lg"
              >
                {tabs.map((tab) => (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-4 py-1.5 cursor-pointer text-[13.5px] font-sans font-medium z-10 w-full"
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-pill"
                        className="absolute inset-0 bg-neutral-200/80 dark:bg-neutral-800/80 rounded-md"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 text-neutral-900 dark:text-neutral-100 flex justify-center items-center gap-2 ">
                      {tab.icon}
                      {tab.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "package" ? (
                  <PackageUsage
                    iconName={selectedIcon.name}
                    jsxImport={getJsxImport(selectedIcon.name)}
                    jsxUsage={getJsxUsage(selectedIcon.name)}
                  />
                ) : (
                  <ManualUsage iconCode={iconCode} />
                )}
              </AnimatePresence>
            </div>

            <div className="px-6 py-4 border-t dark:border-neutral-800/60 border-neutral-200/60 flex items-center gap-3">
              <button
                onClick={() => {
                  const text = `${getJsxImport(selectedIcon.name)}\n\n${getJsxUsage(selectedIcon.name)}`;

                  navigator.clipboard.writeText(text);
                }}
                className="flex-1 py-2.5 rounded-xl dark:bg-white bg-neutral-900 dark:text-black text-white font-semibold text-sm
                hover:opacity-90 transition-opacity cursor-pointer text-center"
              >
                Copy Component
              </button>

              <button
                onClick={onClose}
                className="py-2.5 px-5 rounded-xl dark:bg-neutral-800 bg-neutral-100 dark:text-neutral-300 text-neutral-600 font-medium text-sm
                hover:dark:bg-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
