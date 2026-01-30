import { IconBrandGithub } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <>
      <div className=" border-r border-l  dark:border-neutral-800 border-neutral-300 ">
        <div className="flex justify-center items-center py-35">
          <span className="flex flex-col items-center gap-5">
            <span className="flex items-center gap-2">
              <h2>Open Source</h2>
              <IconBrandGithub />
            </span>
            <h2 className="font-main text-center text-6xl   tracking-tight">
              Icons that come alive with interaction
            </h2>
            <p className="font-main text-lg max-w-xl text-center mx-auto">
              Animated icons designed for modern workflows: copy as React
              components, Vue templates, Svelte files, or pure SVG
            </p>
            <span className="flex gap-5">
              <button className=" py-2 px-5 rounded-lg bg-gray-400">
                Contact Me
              </button>
              <button>Sponsor</button>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
