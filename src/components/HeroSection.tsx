import { Github } from "@/icons/Github";
import { cn } from "@/lib/lib/utils";

export function HeroSection() {
  return (
    <>
      <div
        className={cn(
          "border-r border-l  dark:border-neutral-800 border-neutral-200 ",
          "dark:bg-[radial-gradient(color-mix(in_srgb,var(--color-white)_10%,transparent)_1px,transparent_1px)]",
          "bg-[radial-gradient(color-mix(in_srgb,var(--color-zinc-950)_10%,transparent)_1px,transparent_1px)]",
          "bg-size-[15px_15px]",
        )}
      >
        <div className="flex justify-center items-center py-35">
          <span className="flex flex-col items-center gap-5 pt-10">
            <span className="flex items-center gap-2 dark:bg-neutral-800 bg-neutral-100  px-3 py-1 rounded-3xl ring ring-neutral-200 dark:ring-neutral-700">
              <Github size={22} />
              <h2 className="font-text">Open Source</h2>
            </span>
            <h2 className="font-main text-center text-6xl   tracking-tight">
              Icons that come alive with interaction
            </h2>
            <p className="font-main text-xl max-w-xl text-center mx-auto dark:text-gray-300 text-gray-600">
              Collection of customizable, motion-based icons that are editable
              and Works seamlessly with modern design systems.
            </p>
            <span className="flex gap-5">
              <button className=" font-text py-1.5 px-4.5 rounded-lg dark:hover:bg-white/95 hover:bg-black/90 cursor-pointer dark:bg-white bg-black text-background">
                Contact Me
              </button>
              <button
                className="font-text py-1.5 px-6 rounded-lg dark:hover:bg-neutral-800 hover:bg-neutral-50/95  cursor-pointer dark:bg-neutral-900 bg-neutral-100 
              border dark:border-neutral-700 border-neutral-300  dark:text-white"
              >
                Sponsor
              </button>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
