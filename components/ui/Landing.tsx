import { InstallCommand } from "@/components/ui/Install-command";
import { SearchBar } from "@/components/ui/SearchBar";

interface LandingProps {
  setSearchQuery: (query: string) => void;
}

function Landing({
  setSearchQuery,
}: LandingProps) {
  return (
    <div className="flex justify-between items-center gap-10 pt-10">
      <div className="flex flex-col gap-5 text-foreground max-w-5xl">
        <h1 className="font-sans font-medium text-[5.5rem]  leading-none  ">
          Icons that move when you interact
        </h1>
        <p className="font-sans text-xl   px-2   dark:text-gray-300  ">
          55+ free and open-source icons, built with React, TypeScript, Tailwind
          CSS, and Framer Motion. Install one, copy the code, and make it yours.
        </p>
        <div className="mt-6 w-full max-w-md ml-2">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <div className="max-w-lg w-full flex flex-col gap-6">
        <InstallCommand componentName="@wiggle/icons-react" />
      </div>
    </div>
  );
}
export { Landing };
