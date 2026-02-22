import { useTheme } from "next-themes";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Github } from "@/icons/Github";
import { Twitter } from "@/icons/Twitter";
import { Brightness } from "@/icons/Brightness";
import { IconLayoutFilled, IconMenu2, IconX } from "@tabler/icons-react";
import { motion } from "motion/react";
export function Nav() {
  const [show, setShow] = useState(false);
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
          className="flex flex-col md:flex-row justify-between items-center  py-3 px-5 max-w-367  mx-auto   dark:text-background text-forground
           "
        >
          <div className="flex justify-between w-full">
            <span className="flex items-center gap-5">
              <span className="flex items-center gap-2 ">
                <IconLayoutFilled />
                <h1 className=" font-text text-2xl">Wiggleicon</h1>
              </span>
              <nav className="  pt-1 gap-3 font-text text-[15.5px] hidden md:flex">
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

            <span className=" gap-2 hidden md:flex">
              <Link
                to="https://github.com/ReeshavKayshap/IconLibrary"
                target="_blank"
                className=" flex justify-center items-center 
                       overflow-hidden cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
              >
                <Github size={20} />
              </Link>

              <Link
                to="https://x.com/rshvkyp"
                target="_blank"
                className=" flex justify-center items-center 
                       cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
              >
                <Twitter size={20} />
              </Link>

              <button
                onClick={handleThem}
                className="size-9 flex justify-center items-center 
                 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 
                 rounded-lg "
              >
                <Brightness size={20} />
              </button>
            </span>

            <span className="flex gap-3 md:hidden">
              <button
                onClick={handleThem}
                className="size-9 flex justify-center items-center md:hidden z-50
                 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 
                 rounded-lg "
              >
                <Brightness size={20} />
              </button>
              <button
                onClick={() => setShow((prev) => !prev)}
                className="md:hidden z-50"
              >
                {show ? <IconX /> : <IconMenu2 />}
              </button>
            </span>
          </div>

          <div className="md:hidden w-full pt-5">
            {show && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden bg-background dark:bg-forground  py-2"
              >
                {links.map((item) => (
                  <a
                    className="cursor-pointer flex hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg  "
                    key={item.id}
                    href={`#${item.id}`}
                  >
                    {item.title}
                  </a>
                ))}
                <span className=" flex py-3">
                  <Link
                    to="https://github.com/ReeshavKayshap/IconLibrary"
                    target="_blank"
                    className="
                       overflow-hidden cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
                  >
                    <Github size={20} />
                  </Link>

                  <Link
                    to="https://x.com/rshvkyp"
                    target="_blank"
                    className="
                       cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg "
                  >
                    <Twitter size={20} />
                  </Link>
                </span>
              </motion.nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
