import { useTheme } from "next-themes";
import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconBrandX,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
export function Nav() {
  const links = [
    { title: "Icons", tag: "/icons" },
    { title: "Hello", tag: "/hello" },
    { title: "Hello", tag: "/hello" },
  ];
  const { theme, setTheme } = useTheme();
  const handleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="pt-5 ">
        {" "}
        <div className="  border-t border-b border-neutral-800 ">
          <div className="flex justify-between items-center max-w-7xl mx-auto border-r border-l py-3 border-neutral-800 px-5 ">
            <span className="flex items-center gap-2">
              <h1 className=" font-text text-2xl">MotionIcon</h1>
              <nav>
                {links.map((item, indx) => (
                  <a key={indx}>{item.title}</a>
                ))}
              </nav>
            </span>

            <span className="flex">
              <button
                className=" flex justify-center items-center 
                      rounded-xl cursor-pointer overflow-hidden "
              >
                <IconBrandGithub className="size-5" />
              </button>

              <button
                className=" flex justify-center items-center 
                      rounded-xl cursor-pointer overflow-hidden "
              >
                <IconBrandX className="size-5" />
              </button>
              <button
                onClick={handleThem}
                className="size-9 flex justify-center items-center 
                      rounded-xl cursor-pointer overflow-hidden "
              >
                <motion.div
                  initial={{ x: 0 }}
                  whileTap={{ x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <IconSun className=" size-4 dark:text-neutral-500" />
                  ) : (
                    <IconMoon className=" size-4 text-neutral-500" />
                  )}
                </motion.div>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
