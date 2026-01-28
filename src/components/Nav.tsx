import { useTheme } from "next-themes";
import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrightness,
} from "@tabler/icons-react";
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
  return (
    <>
      <div className="pt-5 ">
        {" "}
        <div className="  border-t border-b dark:border-neutral-800 border-neutral-300 ">
          <div className="flex justify-between items-center max-w-7xl mx-auto border-r border-l py-3 dark:border-neutral-800 border-neutral-300 px-5 ">
            <span className="flex items-center gap-4">
              <h1 className=" font-text text-2xl">MotionIcon</h1>
              <nav className=" flex gap-3 font-text">
                {links.map((item, indx) => (
                  <a className="" key={indx}>
                    {item.title}
                  </a>
                ))}
              </nav>
            </span>

            <span className="flex gap-5">
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
                <motion.div>
                  {theme === "dark" ? (
                    <IconBrightness className=" size-5 dark:text-white" />
                  ) : (
                    <IconBrightness className=" size-5 text-black" />
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
