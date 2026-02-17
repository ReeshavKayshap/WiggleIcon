import { useRef, useState } from "react";
import { Bell } from "@/icons/Bell";
import { SearchTwo } from "@/icons/SearchTwo";
import { SmartHome } from "@/icons/SmartHome";
import { User } from "@/icons/User";
import type { AnimatedIconHandle } from "@/types/Type";
import img from "../assets/img.png";
import { Filter } from "@/icons/Filter";
import { motion, AnimatePresence } from "framer-motion";

function Navicon() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(true);
  const copyFunction = async () => {
    await navigator.clipboard.writeText(codeString);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const codeString = `
<span className="flex items-center gap-5 bg-neutral-800 px-8 py-2 rounded-4xl">
  <SmartHome size={30} />
  <SearchTwo size={25} />
  <Bell size={24} />
  <User size={25} />
</span>
`;
  const nav = [
    { id: "home", Icon: SmartHome, label: "Home" },
    { id: "search", Icon: SearchTwo, label: "Search" },
    { id: "bell", Icon: Bell, label: "Bell" },
    { id: "user", Icon: User, label: "User" },
  ];

  const fliter = [{ id: "fliter", Icon: Filter, label: "Fliter" }];

  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center py-5 gap-5">
      <div className="px-2">
        <h1 className="text-4xl font-text">Navbar</h1>
        <p className="text-sm font-text text-neutral-400">
          A tooltip card container that follows mouse pointer when hovered over
        </p>
      </div>

      <div className="flex flex-col border border-neutral-700 rounded-3xl h-150 dark:bg-black bg-neutral-200">
        <div className="w-full flex gap-2 h-10 border-b px-5 py-4 pb-8 border-neutral-700">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>

        <div className="flex justify-between gap-6 px-6 py-4 ">
          <span className="flex gap-6">
            <button
              onClick={() => setTab("preview")}
              className={`text-sm font-medium transition ${
                tab === "preview"
                  ? "dark:text-white text-neutral-950 border-b-2 border-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Preview
            </button>

            <button
              onClick={() => setTab("code")}
              className={`text-sm font-medium transition ${
                tab === "code"
                  ? "text-white border-b-2 border-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Code
            </button>
          </span>

          <span>
            <button onClick={copyFunction}>
              {" "}
              {tab === "code" && <> {copied ? "Copied!" : "Copy code"}</>}
            </button>
          </span>
        </div>

        <div className="flex justify-center items-center  pt-15  ">
          {tab === "preview" ? (
            <span className="flex  w-120 h-90 gap-5 bg-neutral-800 px-8 py-2 rounded-3xl relative">
              <div className="flex justify-end items-center gap-10 w-full h-fit">
                <span onMouseEnter={() => setShow((prev) => !prev)}>
                  {fliter.map(({ id, Icon, label }) => (
                    <div
                      key={id}
                      onMouseEnter={() =>
                        iconRefs.current[id]?.startAnimation()
                      }
                      className="flex  gap-2 bg-neutral-500 px-3 py-1.5 rounded-xl cursor-pointer"
                    >
                      <span>
                        <Icon
                          ref={(el) => {
                            iconRefs.current[id] = el;
                          }}
                        />
                      </span>
                      <span></span>
                      <h3 className="font-sans">{label}</h3>
                    </div>
                  ))}
                </span>
                <span className="size-7 rounded-full">
                  <img
                    src={img}
                    className="size-7 rounded-full object-cover"
                    alt="logo"
                  />
                </span>
              </div>
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                      filter: "blur(5px)",
                    }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{
                      opacity: 0,
                      scale: 0.97,
                      filter: "blur(5px)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" absolute right-20 top-15 bg-neutral-500 p-4 rounded-2xl"
                  >
                    {" "}
                    {nav.map(({ id, Icon, label }) => (
                      <div
                        key={id}
                        onMouseEnter={() =>
                          iconRefs.current[id]?.startAnimation()
                        }
                        onMouseLeave={() =>
                          iconRefs.current[id]?.stopAnimation()
                        }
                        className="flex items-center gap-4 px-5 py-2 rounded-4xl bg-neutral-400 cursor-pointer"
                      >
                        <Icon
                          ref={(el) => {
                            iconRefs.current[id] = el;
                          }}
                          className=" pointer-events-none "
                        />
                        <h1>{label}</h1>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          ) : (
            <pre className="w-full max-w-2xl bg-neutral-900 text-neutral-200 p-5 rounded-xl text-sm overflow-x-auto">
              <code>{codeString}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navicon;
