"use client";

import { cn } from "@/lib/utils";
import { IconRefresh } from "@tabler/icons-react";

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
  const sliderThumbClasses =
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#1d82f5] [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer " +
    "[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:size-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#1d82f5] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer";

  return (
    <div
      className="relative  w-full p-1 ring ring-neutral-200/80 dark:ring-neutral-800/60 rounded-2xl bg-neutral-100
       dark:bg-neutral-900/40 shadow-sm shadow-black/10 "
    >
      <div
        className="w-full max-w-[340px] flex flex-col gap-6 dark:bg-[#0A0A0A] bg-[#FAFAFA]  
      p-7 rounded-xl font-sans  ring ring-neutral-200/30 dark:ring-neutral-900/30"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl dark:text-white text-neutral-900 tracking-tight">
            Customize icons
          </h1>

          <button
            onClick={resetToDefault}
            className="dark:text-gray-400 text-neutral-500 dark:hover:text-white hover:text-neutral-900 transition-colors p-1 rounded-md dark:hover:bg-slate-800 hover:bg-neutral-100 cursor-pointer"
          >
            <IconRefresh size={20} stroke={1.5} />
          </button>
        </div>

        <div className="flex flex-col gap-7 mt-1">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center w-full">
              <span className="dark:text-white text-neutral-900 font-semibold text-[15px]">
                Size:
              </span>

              <span className="dark:text-gray-300 text-neutral-500 font-mono text-[15px]">
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
                background: `linear-gradient(to right, #1d82f5 0%, #1d82f5 ${
                  ((size - 24) / (48 - 24)) * 100
                }%, #334155 ${((size - 24) / (48 - 24)) * 100}%, #334155 100%)`,
              }}
            />
          </div>

          {/* Stroke Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center w-full">
              <span className="dark:text-white text-neutral-900 font-semibold text-[15px]">
                Stroke:
              </span>

              <span className="dark:text-gray-300 text-neutral-500 font-mono text-[15px]">
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
                background: `linear-gradient(to right, #1d82f5 0%, #1d82f5 ${
                  ((strokeWidth - 1) / (4 - 1)) * 100
                }%, #334155 ${
                  ((strokeWidth - 1) / (4 - 1)) * 100
                }%, #334155 100%)`,
              }}
            />
          </div>

          {/* Animation Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center w-full">
              <span className="dark:text-white text-neutral-900 font-semibold text-[15px]">
                Animation:
              </span>

              <span className="text-gray-300 font-mono text-[15px]">
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
                background: `linear-gradient(to right, #1d82f5 0%, #1d82f5 ${
                  (((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100
                }%, #334155 ${
                  (((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100
                }%, #334155 100%)`,
              }}
            />
          </div>

          {/* Color Palette */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="dark:text-white text-neutral-900 font-semibold text-[15px]">
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
              <label
                className="relative size-8 rounded-full overflow-hidden border-2 border-dashed border-neutral-600 
              hover:border-white cursor-pointer transition-all"
              >
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff0000, #00ffcc, #3b82f6, #ff00ff)",
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
