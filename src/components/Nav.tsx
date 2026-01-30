import { useTheme } from "next-themes";

import {
  IconBrandGithub,
  IconBrandX,
  IconBrightness,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
export function Nav() {
  const links = [
    { title: "Icons", tag: "/icons" },
    { title: "Sponsor", tag: "/sponsor" },
    { title: "Contact", tag: "/contact" },
  ];
  const { theme, setTheme } = useTheme();
  const handleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div
        className={`pt-3 dark:bg-black bg-white z-20 fixed inset-x-0  transition-shadow duration-200
        ${scrolled ? "shadow-sm" : "shadow-none"}`}
      >
        {" "}
        <div className="  border-t border-b dark:border-neutral-800 border-neutral-300 ">
          <div className="flex justify-between items-center max-w-7xl mx-auto border-r border-l py-3 dark:border-neutral-800 border-neutral-300 px-5 ">
            <span className="flex items-center gap-5">
              <h1 className=" font-text text-2xl">MotionIcon</h1>
              <nav className=" flex pt-1 gap-3 font-text text-[15.5px] ">
                {links.map((item, indx) => (
                  <a
                    className="cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg  "
                    key={indx}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </span>

            <span className="flex gap-2">
              <button
                className=" flex justify-center items-center 
                       overflow-hidden cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
              >
                <IconBrandGithub className="size-5" />
              </button>

              <button
                className=" flex justify-center items-center 
                       cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
              >
                <IconBrandX className="size-5" />
              </button>
              <button
                onClick={handleThem}
                className="size-9 flex justify-center items-center 
                 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 
                 rounded-lg "
              >
                <IconBrightness className="size-5 text-black dark:text-white" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
