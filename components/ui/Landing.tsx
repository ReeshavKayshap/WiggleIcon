import { InstallCommand } from "@/components/ui/Install-command";
import Link from "next/link";

function Landing() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative pt-17 ">
      <div className="flex flex-col gap-5 b w-full">
        <h1 className="font-inter font-bold text-7xl text-neutral-900 dark:text-neutral-50  leading-none  ">
         Icons that move when you interact
        </h1>
        <p className="font-inter text-lg max-w-3xl font-medium text-neutral-700 dark:text-gray-300  ">
          55+ free and open-source icons, built with React, TypeScript, Tailwind
          CSS, and Framer Motion. Install one, copy the code, and make it yours.
        </p>
         {/* <span
          className="flex gap-5  font-inter tracking-wide 
        text-xl  text-neutral-500 px-2"
        >
          <Link
            href="https://x.com/rshvkyp"
            target="_blank"
            className="underline decoration-[1.5px] decoration-dashed underline-offset-6"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/ReeshavKayshap/WiggleIcon"
            target="_blank"
            className="underline decoration-[1.5px] decoration-dashed underline-offset-6"
          >
            Github
          </Link>
        </span> */}
      </div>

      <div className=" w-full md:max-w-lg  flex justify-end items-center gap-5 ">
         <div className=" w-full max-w-xl">
          <InstallCommand componentName="@wiggle/icons-react" />
        </div>
      </div>
    
    </div>
  );
}
export { Landing };
