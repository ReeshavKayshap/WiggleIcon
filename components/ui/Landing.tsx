import { InstallCommand } from "@/components/ui/Install-command";
import { SearchBar } from "@/components/ui/SearchBar";

interface LandingProps {
  setSearchQuery: (query: string) => void;
}

function Landing({ setSearchQuery }: LandingProps) {
  return (
    <div className="flex justify-between  gap-10 pt-10">
      <div className="flex flex-col gap-5 text-foreground max-w-5xl">
        <h1 className="font-sans font-medium text-[5.5rem]  leading-none  ">
          Icons that move when you interact
        </h1>
        <p className="font-sans text-xl   px-2   dark:text-gray-300  ">
          55+ free and open-source icons, built with React, TypeScript, Tailwind
          CSS, and Framer Motion. Install one, copy the code, and make it yours.
        </p>
        <div className=" w-full max-w-md mt-6">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <div className="max-w-lg w-full flex flex-col justify-between gap-6">
        <InstallCommand componentName="@wiggle/icons-react" />
        <span
          className="flex flex-col gap-3 items-end font-sans italic tracking-wide 
        text-xl  text-neutral-500"
        >
          <h1>Twitter</h1>
          <h2>Github</h2>
        </span>
      </div>
    </div>
  );
}
export { Landing };
