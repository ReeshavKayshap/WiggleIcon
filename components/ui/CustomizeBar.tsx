import { cn } from "@/lib/utils";
import { IconRefresh } from "@tabler/icons-react";

interface CustomizeBarProps {
  size: number;
  setSize: (size: number) => void;
  strokeWidth: number;
  setStrokeWidth: (strokeWidth: number) => void;
  durationOverride: number | null;
  setDurationOverride: (duration: number | null) => void;
  resetToDefault: () => void;
}

export function CustomizeBar({
  size,
  setSize,
  strokeWidth,
  setStrokeWidth,
  durationOverride,
  setDurationOverride,
  resetToDefault,
}: CustomizeBarProps) {
  const sliderThumbClasses =
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#1d82f5] [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer " +
    "[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:size-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#1d82f5] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer";

  return (
    <div className="w-full max-w-[340px] flex flex-col gap-6 bg-neutral-900 p-7 rounded-2xl shadow-xl font-sans">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-white tracking-tight">
          Customize icons
        </h1>
        <button
          onClick={resetToDefault}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800 cursor-pointer"
        >
          <IconRefresh size={20} stroke={1.5} />
        </button>
      </div>

      <div className="flex flex-col gap-7 mt-1">
        {/* Size Slider */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <span className="text-white font-semibold text-[15px]">Size:</span>
            <span className="text-gray-300 font-mono text-[15px]">{size}</span>
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
              background: `linear-gradient(to right, #1d82f5 0%, #1d82f5 ${((size - 24) / (48 - 24)) * 100}%, #334155 ${((size - 24) / (48 - 24)) * 100}%, #334155 100%)`,
            }}
          />
        </div>

        {/* Stroke Slider */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <span className="text-white font-semibold text-[15px]">
              Stroke:
            </span>
            <span className="text-gray-300 font-mono text-[15px]">
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
              background: `linear-gradient(to right, #1d82f5 0%, #1d82f5 ${((strokeWidth - 1) / (4 - 1)) * 100}%, #334155 ${((strokeWidth - 1) / (4 - 1)) * 100}%, #334155 100%)`,
            }}
          />
        </div>

        {/* Animation Slider */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <span className="text-white font-semibold text-[15px]">
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
              background: `linear-gradient(to right, #1d82f5 0%, #1d82f5 ${(((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100}%, #334155 ${(((durationOverride ?? 1) - 0.2) / (2 - 0.2)) * 100}%, #334155 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
