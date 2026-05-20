"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { IconRefresh, IconPalette } from "@tabler/icons-react";
import { HexColorPicker } from "react-colorful";

interface CustomizeBarProps {
  size: number;
  setSize: (size: number) => void;

  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;

  durationOverride: number | null;
  setDurationOverride: (duration: number | null) => void;

  color: string;
  setColor: (color: string) => void;

  resetToDefault: () => void;
}

const presetColors = [
  "#ffffff",
  "#000000",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",

  // Tailwind slate/zinc
  "#64748b",
  "#71717a",
];

export function CustomizeBar({
  size,
  setSize,
  strokeWidth,
  setStrokeWidth,
  durationOverride,
  setDurationOverride,
  color,
  setColor,
  resetToDefault,
}: CustomizeBarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeColor = mounted && resolvedTheme === "dark" ? "#ffffff" : "#000000";
  const inactiveColor = mounted && resolvedTheme === "dark" ? "#333333" : "#e5e5e5";

  const [showPicker, setShowPicker] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const sliderThumbClasses =
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black dark:[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer " +
    "[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:size-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black dark:[&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer";

  return (
    <div
      className="relative  w-full p-[5.5px] ring  ring-neutral-200 dark:ring-neutral-800/70 rounded-2xl 
    bg-[#FAFAFA] dark:bg-neutral-900/40  shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
    >
      <div
        className="w-full max-w-[340px] flex flex-col gap-6 dark:bg-[#0A0A0A] bg-[#ffffff]
      p-7 rounded-xl  ring ring-neutral-200/30 dark:ring-neutral-900/30"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl dark:text-white text-neutral-900 font-inter">
            Customize icons
          </h1>

          <button
            onClick={resetToDefault}
            className="dark:text-gray-400 text-neutral-500 dark:hover:text-white hover:text-neutral-900
             transition-colors p-1 rounded-md dark:hover:bg-slate-800 hover:bg-neutral-100 cursor-pointer"
          >
            <IconRefresh size={20} stroke={1.5} />
          </button>
        </div>

        <div className="flex flex-col gap-7 mt-1">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center font-mono w-full">
              <span className="dark:text-white text-neutral-900 font-medium text-[14px]">
                Size:
              </span>

              <span className="dark:text-gray-300 text-neutral-500 font-mono text-[14px]">
                {size}
              </span>
            </div>

            <input
              type="range"
              min={24}
              max={48}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className={cn(
                "w-full h-1 rounded-full appearance-none cursor-pointer outline-none",
                sliderThumbClasses,
              )}
              style={{
                background: `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${
                  ((size - 24) / (48 - 24)) * 100
                }%, ${inactiveColor} ${((size - 24) / (48 - 24)) * 100}%, ${inactiveColor} 100%)`,
              }}
            />
          </div>

          {/* Stroke Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center font-mono w-full">
              <span className="dark:text-white text-neutral-900 font-medium text-[14px]">
                Stroke:
              </span>

              <span className="dark:text-gray-300 text-neutral-500 text-[14px]">
                {strokeWidth}
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={4}
              step={0.5}
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className={cn(
                "w-full h-1 rounded-full appearance-none cursor-pointer outline-none",
                sliderThumbClasses,
              )}
              style={{
                background: `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${
                  ((strokeWidth - 1) / (4 - 1)) * 100
                }%, ${inactiveColor} ${
                  ((strokeWidth - 1) / (4 - 1)) * 100
                }%, ${inactiveColor} 100%)`,
              }}
            />
          </div>

          {/* Animation Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center font-mono w-full">
              <span className="dark:text-white text-neutral-900 font-medium text-[14px]">
                Duration:
              </span>

              <span className="text-gray-300 text-[14px]">
                {durationOverride === null ? "0" : `${durationOverride}`}
              </span>
            </div>

            <input
              type="range"
              min={0.2}
              max={2}
              step={0.01}
              value={durationOverride ?? 1}
              onChange={(e) => setDurationOverride(Number(e.target.value))}
              className={cn(
                "w-full h-1 rounded-full appearance-none cursor-pointer outline-none",
                sliderThumbClasses,
              )}
              style={{
                background: `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${
                  (((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100
                }%, ${inactiveColor} ${
                  (((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100
                }%, ${inactiveColor} 100%)`,
              }}
            />
          </div>

          {/* Color Palette */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="dark:text-white text-neutral-900 font-medium font-mono text-[14px]">
                Color:
              </span>

              <div className="flex items-center gap-2 px-2 py-1 rounded-lg border dark:border-neutral-700 border-neutral-200 dark:bg-neutral-900 bg-neutral-100">
                <div
                  className="size-4 rounded-full border border-white/20"
                  style={{ backgroundColor: color }}
                />

                <span className="text-xs dark:text-neutral-300 text-neutral-600 font-mono uppercase">
                  {color}
                </span>
              </div>
            </div>

            {/* Preset Colors */}
            <div className="flex flex-wrap gap-3">
              {presetColors.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setColor(preset)}
                  className={cn(
                    "size-8 rounded-full border-2 transition-all cursor-pointer",
                    color === preset
                      ? "border-white scale-110"
                      : "border-transparent hover:scale-105",
                  )}
                  style={{
                    backgroundColor: preset,
                  }}
                />
              ))}

              {/* Custom Color Picker */}
              <div className="relative flex w-full" ref={popoverRef}>
                <button
                  type="button"
                  title="Custom Color"
                  onClick={() => setShowPicker(!showPicker)}
                  className={cn(
                    "relative flex items-center justify-center size-8 rounded-full border bg-white dark:bg-neutral-800 transition-all hover:scale-105 cursor-pointer",
                    showPicker
                      ? "border-neutral-900 dark:border-white text-neutral-900 dark:text-white"
                      : "border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-500 hover:shadow-sm",
                  )}
                >
                  <IconPalette size={16} stroke={1.5} />
                </button>

                {showPicker && (
                  <div
                    className="absolute top-0 right-0 w-fit z-50 p-3 bg-white dark:bg-[#111111] 
                  rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xl"
                  >
                    <HexColorPicker color={color} onChange={setColor} />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500">
                        HEX
                      </span>
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-20 px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-900 dark:text-neutral-100 uppercase"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
