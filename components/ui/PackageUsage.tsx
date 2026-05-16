"use client";

import { motion } from "motion/react";
import { CopyButton } from "./Copy-button";
import { InstallCommand } from "./Install-command";

interface PackageUsageProps {
  iconName: string;
  jsxImport: string;
  jsxUsage: string;
}

export function PackageUsage({
  iconName,
  jsxImport,
  jsxUsage,
}: PackageUsageProps) {
  return (
    <motion.div
      key="package"
      initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col gap-6 "
    >
      <div className="flex flex-col gap-2 ">
        <span className="text-sm font-medium font-sans dark:text-neutral-300 text-neutral-600 px-2">
          Install via shadcn CLI
        </span>

        <InstallCommand componentName={iconName} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-medium font-sans dark:text-neutral-300 text-neutral-600 ">
            Import
          </span>

          <CopyButton
            textToCopy={jsxImport}
            size={14}
            className="text-neutral-500 hover:text-white transition-colors"
          />
        </div>

        <div
          className="dark:bg-neutral-900/80 bg-neutral-200/20 border dark:border-neutral-800/40
         border-neutral-200/80 rounded-lg p-3 overflow-x-auto"
        >
          <code className="text-[13px] font-mono text-emerald-400 whitespace-nowrap">
            import {"{ "}
            <span className="text-sky-300">{iconName}</span>
            {" }"} from
            <span className="text-amber-300">
              {" "}
              "@/components/icons/{iconName}"
            </span>
            ;
          </code>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-medium font-sans dark:text-neutral-300 text-neutral-600 ">
            Usage
          </span>

          <CopyButton
            textToCopy={jsxUsage}
            size={14}
            className="text-neutral-500 hover:text-white transition-colors"
          />
        </div>

        <div
          className="dark:bg-neutral-900/80 bg-neutral-200/20 border dark:border-neutral-800/40
         border-neutral-200/80 rounded-lg p-3 overflow-x-auto"
        >
          <pre className="text-[13px] font-mono  dark:text-neutral-300 text-neutral-900 whitespace-pre-wrap">
            {jsxUsage}
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
