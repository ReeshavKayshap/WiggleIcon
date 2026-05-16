"use client";

import { motion } from "motion/react";
import { CopyButton } from "./Copy-button";

interface ManualUsageProps {
  iconCode: string;
}

const TYPES_CODE = `export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}`;

export function ManualUsage({ iconCode }: ManualUsageProps) {
  return (
    <motion.div
      key="manual"
      initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium font-sans dark:text-neutral-300 text-neutral-600">
              Install
            </span>

            <CopyButton
              textToCopy="npm install motion"
              size={14}
              className="text-neutral-500 hover:text-white transition-colors"
            />
          </div>
          <div
            className="dark:bg-neutral-900/80 bg-neutral-200/20 border dark:border-neutral-800/40
         border-neutral-200/80 rounded-lg p-3 overflow-x-auto"
          >
            <code className="text-[13px] font-mono dark:text-neutral-300 text-neutral-800">
              npm install motion
            </code>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium font-sans dark:text-neutral-300 text-neutral-600">
              Types
            </span>
            <CopyButton
              textToCopy={TYPES_CODE}
              size={14}
              className="text-neutral-500 hover:text-white transition-colors"
            />
          </div>
          <div
            className="dark:bg-neutral-900/80 bg-neutral-200/20 border dark:border-neutral-800/40
         border-neutral-200/80 rounded-lg p-3 overflow-x-auto"
          >
            <pre className="text-[12px] font-mono dark:text-neutral-400 text-neutral-700 whitespace-pre">
              {TYPES_CODE}
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium font-sans dark:text-neutral-300 text-neutral-600">
              Source Code
            </span>

            <CopyButton
              textToCopy={iconCode || ""}
              size={14}
              className="text-neutral-500 hover:text-white transition-colors"
            />
          </div>

          <div
            className="dark:bg-neutral-900/80 bg-neutral-50 border dark:border-neutral-800/40 border-neutral-200 rounded-xl p-4
           max-h-[400px] overflow-y-auto custom-scrollbar"
          >
            <pre className="text-[12px] font-mono dark:text-neutral-400 text-neutral-600 whitespace-pre leading-relaxed">
              {iconCode || "// Source code not available"}
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
