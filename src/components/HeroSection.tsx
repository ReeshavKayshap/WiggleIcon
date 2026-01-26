import { IconBrandGithub } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <>
      <div className=" border-r border-l  border-neutral-800 ">
        <div className="flex justify-center py-25">
          <span className="flex flex-col items-center gap-5">
            <span>
              <IconBrandGithub />
            </span>
            <h2 className="font-main text-center text-8xl  leading-23">
              Icons that make <br />
              every click feel alive
            </h2>
            <p className="font-main text-xl max-w-xl text-center mx-auto">
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
