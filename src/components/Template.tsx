import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import { IconList } from "@/lib/lib/IconList";

/* ----------------------------------------
   TYPES
---------------------------------------- */

type IconTitle = (typeof IconList)[number]["title"];

type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}>;

/* ----------------------------------------
   DEFAULT ICONS (SAFE)
---------------------------------------- */

const DEFAULT_ICONS: IconTitle[] = IconList.slice(0, 5).map(
  (icon) => icon.title,
);

/* ----------------------------------------
   COMPONENT
---------------------------------------- */

export default function Template() {
  const [selectedIcons, setSelectedIcons] =
    useState<IconTitle[]>(DEFAULT_ICONS);

  /* title → component map */
  const iconMap = useMemo(() => {
    return Object.fromEntries(
      IconList.map((icon) => [icon.title, icon.Component]),
    ) as Record<IconTitle, IconComponent>;
  }, []);

  const updateIcon = (index: number, newIcon: IconTitle) => {
    setSelectedIcons((prev) =>
      prev.map((icon, i) => (i === index ? newIcon : icon)),
    );
  };

  /* ----------------------------------------
     GENERATED CODE (builder preview)
  ---------------------------------------- */

  const generatedCode = `
export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-6 bg-neutral-800 px-6 py-3 rounded-full">
${selectedIcons.map((t) => `        {/* ${t} */}`).join("\n")}
      </div>
    </div>
  );
}
`.trim();

  /* ----------------------------------------
     RENDER
  ---------------------------------------- */

  return (
    <div className="flex justify-between">
      {/* Navbar Preview */}
      <div>
        <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-4 text-sm overflow-auto">
          <code>{generatedCode}</code>
        </pre>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="flex gap-6 bg-neutral-800 px-6 py-3 rounded-full">
          {selectedIcons.map((title, index) => {
            const Icon = iconMap[title];

            // 🛡 extra safety (never crashes)
            if (!Icon) return null;

            return (
              <div key={index} className="relative group">
                {/* Icon */}
                <Icon size={20} className="text-white cursor-pointer" />

                {/* Tooltip */}
                <div
                  className="absolute  left-1/2 -translate-x-1/2 
                             hidden group-hover:block z-10"
                >
                  <div
                    className="bg-neutral-900 border border-neutral-700
                               rounded-md p-2 shadow-lg"
                  >
                    <select
                      value={title}
                      onChange={(e) =>
                        updateIcon(index, e.target.value as IconTitle)
                      }
                      className="bg-neutral-800 text-white text-sm
                                 rounded px-2 py-1 outline-none"
                    >
                      {IconList.map((icon) => (
                        <option key={icon.id} value={icon.title}>
                          {icon.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Generated Code */}
    </div>
  );
}
