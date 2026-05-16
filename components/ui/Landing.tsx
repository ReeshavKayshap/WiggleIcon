import { InstallCommand } from "@/components/ui/Install-command";
import { SearchBar } from "@/components/ui/SearchBar";
import Link from "next/link";

interface LandingProps {
  setSearchQuery: (query: string) => void;
}

function Landing({ setSearchQuery }: LandingProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between  gap-10 pt-10">
      <div className="flex flex-col gap-5 max-w-3xl  lg:max-w-5xl">
        <h1 className="font-sans font-medium text-[5.5rem] text-neutral-950 dark:text-neutral-50  leading-none  ">
          Icons that move when you interact
        </h1>
        <p className="font-sans text-xl   px-2  text-neutral-900 dark:text-gray-300  ">
          55+ free and open-source icons, built with React, TypeScript, Tailwind
          CSS, and Framer Motion. Install one, copy the code, and make it yours.
        </p>
        <div className=" w-full max-w-xl mt-6">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <div className="max-w-lg w-full flex flex-col justify-between gap-5 pt-10">
        <InstallCommand componentName="@wiggle/icons-react" />
        <span
          className="flex flex-row lg:flex-col gap-3 lg:items-end font-sans italic tracking-wide 
        text-xl  text-neutral-500 "
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
        </span>
      </div>
    </div>
  );
}
export { Landing };
