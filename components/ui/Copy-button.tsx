"use client";

import { useState, useRef, useEffect } from "react";
import { IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Copy } from "../icons";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  size?: number;
}

export function CopyButton({
  textToCopy,
  className,
  size = 16,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(" cursor-pointer ", className)}
      aria-label="Copy text"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 0.97, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {" "}
            <IconCheck size={size} className="text-green-500" />
          </motion.div>
        ) : (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 0.97, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Copy size={size} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
