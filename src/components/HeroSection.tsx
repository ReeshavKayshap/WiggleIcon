import { Github } from "@/icons/Github";

import {
  IconBrandFramerMotion,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

import { ArrowRight } from "@/icons/ArrowRight";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <>
      <div

      // className="bg-linear-[#488CDB,#D7EAFB] mask-b-from-70%"
      // className=" relative "
      >
        <div
        // className={cn(
        //   "absolute inset-0 mask-b-from-50% mask-t-from-60% mask-x-from-90%",
        //   "bg-size-[50px_50px]",
        //   "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        //   "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        // )}
        />

        <div
        // className={cn(
        //   "border-r border-l  dark:border-neutral-800 border-neutral-200 ",
        //   "dark:bg-[radial-gradient(color-mix(in_srgb,var(--color-white)_10%,transparent)_1px,transparent_1px)]",
        //   "bg-[radial-gradient(color-mix(in_srgb,var(--color-zinc-950)_10%,transparent)_1px,transparent_1px)]",
        //   "bg-size-[15px_15px]",
        // )}
        >
          <div className="flex justify-center items-center py-30 dark:text-background text-forground relative">
            <span className="flex flex-col  gap-4 ">
              <div className="flex justify-center">
                <Link
                  to="https://github.com/ReeshavKayshap/IconLibrary"
                  target="_blank"
                  className="flex items-center cursor-pointer gap-2 dark:bg-neutral-800 bg-neutral-100 w-fit  
                px-3 py-1 rounded-3xl ring ring-neutral-200 dark:ring-neutral-700"
                >
                  <Github size={22} />
                  <h2 className="font-text">Open Source</h2>
                  <ArrowRight size={20} />
                </Link>
              </div>
              <span className="flex flex-col gap-5">
                <h2 className="font-main text-6xl  text-center tracking-tight">
                  Icons that move when you interact
                </h2>
                <p className="font-main text-lg max-w-xl  mx-auto text-center dark:text-gray-300  ">
                  Collection of customizable, motion-based icons that are
                  editable and Works seamlessly with modern design systems.
                </p>
              </span>

              <span className="flex justify-center gap-5 py-3">
                <button className=" font-text py-1.5 px-10 rounded-xl dark:hover:bg-white/95 hover:bg-black/90 cursor-pointer dark:text-forground dark:bg-white bg-black text-background">
                  Contact Me
                </button>
                <button
                  className="font-text py-1.5 px-10 rounded-xl dark:hover:bg-neutral-800 hover:bg-neutral-100   cursor-pointer dark:bg-neutral-900  bg-neutral-50/95 
              border dark:border-neutral-700 border-neutral-300  dark:text-white"
                >
                  Components
                </button>
              </span>
              <div className="flex justify-center items-center font-text gap-5  dark:text-neutral-700 text-neutral-300">
                <span className="text-neutral-500 ">Built with</span>
                <div className="flex gap-2 hover:text-neutral-500 cursor-pointer">
                  <span>
                    {" "}
                    <IconBrandReact />
                  </span>
                  <span>React</span>
                </div>
                <div className="flex gap-2 hover:text-neutral-500 cursor-pointer">
                  <span>
                    {" "}
                    <IconBrandTailwind />
                  </span>
                  <span>TailwindCSS</span>
                </div>
                <div className="flex gap-2 hover:text-neutral-500 cursor-pointer">
                  <span>
                    <IconBrandFramerMotion />
                  </span>
                  <span>Framer Motion</span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
