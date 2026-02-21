import { useTheme } from "next-themes";
import { Link } from "react-router";
import { IconBrightness } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Github } from "@/icons/Github";
import { Twitter } from "@/icons/Twitter";
export function Nav() {
  const links = [
    { title: "Icons", id: "icons" },
    { title: "Components", id: "components" },
    { title: "Sponsor", id: "sponsor" },
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
        className={`z-20 fixed inset-x-0  transition-shadow duration-200
        ${scrolled ? "shadow-sm dark:bg-forground bg-background" : "shadow-none bg-none"}`}
      >
        <div
          className="flex justify-between items-center  py-3 px-5 max-w-367  mx-auto   dark:text-background text-forground
           "
        >
          <span className="flex items-center gap-5">
            <h1 className=" font-text text-2xl">MotionIcon</h1>
            <nav className=" flex pt-1 gap-3 font-text text-[15.5px] ">
              {links.map((item) => (
                <a
                  className="cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg  "
                  key={item.id}
                  href={`#${item.id}`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </span>

          <span className="flex gap-2">
            <Link
              to="https://github.com/ReeshavKayshap/IconLibrary"
              target="_blank"
              className=" flex justify-center items-center 
                       overflow-hidden cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
            >
              <Github size={22} />
            </Link>

            <Link
              to="https://x.com/KayshapReeshav"
              target="_blank"
              className=" flex justify-center items-center 
                       cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
            >
              <Twitter size={22} />
            </Link>

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
    </>
  );
}
