import { useRef, useState } from "react";

import type { AnimatedIconHandle } from "@/types/Type";

import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "@/icons/Copy";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { Box } from "@/icons/Box";
import { Stack } from "@/icons/Stack";

import { File } from "@/icons/File";
import { Pricing } from "@/icons/Pricing";
import { User } from "@/icons/User";
import { World } from "@/icons/World";
import { BoxPlus } from "@/icons/BoxPlus";
import { Attachment } from "@/icons/Attachment";
import { Users } from "@/icons/Users";
import { Bag } from "@/icons/Bag";

function Navicon() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState<string | null>(null);

  const copyFunction = async () => {
    await navigator.clipboard.writeText(codeString);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
  const codeString = `
import { useRef, useState } from "react";
import type { AnimatedIconHandle } from "@/types/Type";
import { motion, AnimatePresence } from "framer-motion";  
import { Box } from "@/icons/Box";
import { Stack } from "@/icons/Stack";
import { File } from "@/icons/File";
import { Pricing } from "@/icons/Pricing";
import { User } from "@/icons/User";
import { World } from "@/icons/World";
import { BoxPlus } from "@/icons/BoxPlus";
import { Attachment } from "@/icons/Attachment";
import { Users } from "@/icons/Users";
import { Bag } from "@/icons/Bag";

function Navbar() {
const [show, setShow] = useState<string | null>(null);
const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
  const ProductTooltip = () => (
    <div>
      <span>
        <h4 className="font-Adjust mb-2 px-4.5 py-1 text-lg dark:text-white text-black">
          Product
        </h4>
      </span>

      <div className=" flex flex-col gap-2 ">
        {product.map(({ id, Icon, label, para }) => (
          <div
            key={id}
            className="flex items-center  py-3 px-4 gap-4 cursor-pointer dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black
             text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out
             hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 
          hover:ring-neutral-200 rounded-lg"
            onMouseEnter={() => iconRefs.current[id]?.startAnimation()}
          >
            <span className="dark:bg-neutral-800 bg-neutral-100 shadow-sm  p-1.5 rounded-lg text-neutral-800 dark:text-neutral-100">
              <Icon
                size={27}
                ref={(e): void => {
                  iconRefs.current[id] = e;
                }}
              />
            </span>

            <span>
              <h1 className="text-[17px] dark:text-neutral-100 text-black">
                {label}
              </h1>
              <p className="text-[13.5px] ">{para}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const ResourceTooltip = () => (
    <div>
      <span>
        <h4 className="font-Adjust mb-2 px-4.5 py-1 text-lg dark:text-white text-black">
          Resource
        </h4>
      </span>
      <div className=" flex flex-col gap-2 ">
        {resource.map(({ id, Icon, label, para }) => (
          <div
            key={id}
            className="flex items-center  py-3 px-4 gap-4 cursor-pointer dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black
             text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out
             hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 
          hover:ring-neutral-200 rounded-lg"
            onMouseEnter={() => iconRefs.current[id]?.startAnimation()}
          >
            <span className="dark:bg-neutral-800 bg-neutral-100 shadow-sm  p-1.5 rounded-lg text-neutral-800 dark:text-neutral-100">
              <Icon
                size={27}
                ref={(e): void => {
                  iconRefs.current[id] = e;
                }}
              />
            </span>

            <span>
              <h1 className="text-[17px] dark:text-neutral-100 text-black">
                {label}
              </h1>
              <p className="text-[13.5px] ">{para}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  const nav = [
    {
      id: "product",
      Icon: Box,
      label: "Product",
      hasDropdown: true,
      Tooltip: ProductTooltip,
    },
    {
      id: "resource",
      Icon: Stack,
      label: "Resource",
      hasDropdown: true,
      Tooltip: ResourceTooltip,
    },
    {
      id: "docs",
      Icon: File,
      label: "Docs",
      hasDropdown: false,
    },
    { id: "pricing", Icon: Pricing, label: "Pricing", hasDropdown: false },
  ];
  const product = [
    {
      id: "user",
      Icon: User,
      label: "User Authentication",
      para: "For effortless sign-up, sign-in, and user profiles",
    },

    {
      id: "content",
      Icon: World,
      label: "Content Delivery",
      para: "Fast, scalable, and reliable",
    },
    {
      id: "sandbox",
      Icon: BoxPlus,
      label: "Sandbox",
      para: "AI workflows in live environment",
    },
  ];
  const resource = [
    {
      id: "blog",
      Icon: Attachment,
      label: "Blog",
      para: "The latest post and changes",
    },
    {
      id: "about",
      Icon: Users,
      label: "About",
      para: "Find help quickly",
    },
    {
      id: "career",
      Icon: Bag,
      label: "Career",
      para: "The latest post and changes",
    },
  ];
    return (
    <>
      <div className="flex justify-center w-full px-5 pt-10">
            <div className="flex justify-between items-center w-full dark:bg-neutral-950 bg-neutral-100 shadow-xs  ring-1 dark:ring-neutral-700 ring-neutral-300 py-4 px-5 rounded-2xl">
              <span className="flex items-center gap-6">
                <span className="px-2">
                  <h1 className="text-2xl font-text">MotionIcon</h1>
                </span>
                {nav.map(({ id, Icon, label, hasDropdown, Tooltip }) => (
                  <nav key={id}>
                    <span
                      onMouseEnter={() => {
                        iconRefs.current[id]?.startAnimation();
                        setShow(id);
                      }}
                      onMouseLeave={() => {
                        setShow(null);
                      }}
                      className=" relative font-inter font-semibold flex gap-2 items-center transition  text-neutral-500 hover:text-black group dark:hover:text-neutral-200 cursor-pointer"
                    >
                      <Icon
                        ref={(el) => {
                          iconRefs.current[id] = el;
                        }}
                      />

                      {label}

                      {hasDropdown && (
                        <span className="group-hover:rotate-180  transition duration-300 ease-in-out">
                          <IconChevronDown size={18} />
                        </span>
                      )}

                      {show === id && hasDropdown && (
                        <div className="absolute top-full left-0 right-0 h-8 " />
                      )}
                      <AnimatePresence>
                        {show === id && hasDropdown && Tooltip && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.95,

                              filter: "blur(4px)",
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              filter: "blur(0px)",
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.95,

                              filter: "blur(4px)",
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute w-110 top-13 pb-4  left-0 dark:bg-neutral-900 bg-neutral-50 text-white text-xs px-3 py-2.5 rounded-2xl shadow-lg"
                          >
                            <Tooltip />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>
                  </nav>
                ))}
              </span>

              <span className="flex gap-3">
                <button
                  className="dark:hover:bg-neutral-800 dark:bg-neutral-950 bg-neutral-50 hover:bg-neutral-100 
                transition cursor-pointer border text-sm dark:border-neutral-700 border-neutral-300  px-4 py-2 rounded-lg font-inter "
                >
                  Login
                </button>
                <button
                  className="dark:bg-white dark:hover:bg-neutral-100 hover:bg-neutral-800 bg-black
                 transition cursor-pointer dark:text-black text-white px-4 text-sm rounded-lg font-inter font-semibold"
                >
                  Sign up
                </button>
              </span>
            </div>
          </div>
    </> );
}

export default Navbar;
`;
  const ProductTooltip = () => (
    <div>
      <span>
        <h4 className="font-Adjust mb-2 px-4.5 py-1 text-lg dark:text-white text-black">
          Product
        </h4>
      </span>

      <div className=" flex flex-col gap-2 ">
        {product.map(({ id, Icon, label, para }) => (
          <div
            key={id}
            className="flex items-center  py-3 px-4 gap-4 cursor-pointer dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black
             text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out
             hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 
          hover:ring-neutral-200 rounded-lg"
            onMouseEnter={() => iconRefs.current[id]?.startAnimation()}
          >
            <span className="dark:bg-neutral-800 bg-neutral-100 shadow-sm  p-1.5 rounded-lg text-neutral-800 dark:text-neutral-100">
              <Icon
                size={27}
                ref={(e): void => {
                  iconRefs.current[id] = e;
                }}
              />
            </span>

            <span>
              <h1 className="text-[17px] dark:text-neutral-100 text-black">
                {label}
              </h1>
              <p className="text-[13.5px] ">{para}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const ResourceTooltip = () => (
    <div>
      <span>
        <h4 className="font-Adjust mb-2 px-4.5 py-1 text-lg dark:text-white text-black">
          Resource
        </h4>
      </span>
      <div className=" flex flex-col gap-2 ">
        {resource.map(({ id, Icon, label, para }) => (
          <div
            key={id}
            className="flex items-center  py-3 px-4 gap-4 cursor-pointer dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black
             text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out
             hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 
          hover:ring-neutral-200 rounded-lg"
            onMouseEnter={() => iconRefs.current[id]?.startAnimation()}
          >
            <span className="dark:bg-neutral-800 bg-neutral-100 shadow-sm  p-1.5 rounded-lg text-neutral-800 dark:text-neutral-100">
              <Icon
                size={27}
                ref={(e): void => {
                  iconRefs.current[id] = e;
                }}
              />
            </span>

            <span>
              <h1 className="text-[17px] dark:text-neutral-100 text-black">
                {label}
              </h1>
              <p className="text-[13.5px] ">{para}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  const nav = [
    {
      id: "product",
      Icon: Box,
      label: "Product",
      hasDropdown: true,
      Tooltip: ProductTooltip,
    },
    {
      id: "resource",
      Icon: Stack,
      label: "Resource",
      hasDropdown: true,
      Tooltip: ResourceTooltip,
    },
    {
      id: "docs",
      Icon: File,
      label: "Docs",
      hasDropdown: false,
    },
    { id: "pricing", Icon: Pricing, label: "Pricing", hasDropdown: false },
  ];
  const product = [
    {
      id: "user",
      Icon: User,
      label: "User Authentication",
      para: "For effortless sign-up, sign-in, and user profiles",
    },

    {
      id: "content",
      Icon: World,
      label: "Content Delivery",
      para: "Fast, scalable, and reliable",
    },
    {
      id: "sandbox",
      Icon: BoxPlus,
      label: "Sandbox",
      para: "AI workflows in live environment",
    },
  ];
  const resource = [
    {
      id: "blog",
      Icon: Attachment,
      label: "Blog",
      para: "The latest post and changes",
    },
    {
      id: "about",
      Icon: Users,
      label: "About",
      para: "Find help quickly",
    },
    {
      id: "career",
      Icon: Bag,
      label: "Career",
      para: "The latest post and changes",
    },
  ];

  return (
    <>
      <div className="flex justify-between  px-6 py-4  ">
        <span
          className="flex gap-5 dark:bg-neutral-900 bg-neutral-300 py-2 px-4 rounded-lg font-Adjust text-[16.5px]
        divide-x divide-neutral-700 "
        >
          <button
            onClick={() => setTab("preview")}
            className={`pr-3 cursor-pointer  transition ${
              tab === "preview"
                ? "dark:text-white text-black "
                : "text-neutral-400 "
            }`}
          >
            Preview
          </button>

          <button
            onClick={() => setTab("code")}
            className={` cursor-pointer transition ${
              tab === "code"
                ? "dark:text-white text-black "
                : "text-neutral-400 "
            }`}
          >
            Code
          </button>
        </span>

        <span>
          <button onClick={copyFunction}>
            {tab === "code" && <> {copied ? <IconCheck /> : <Copy />}</>}
          </button>
        </span>
      </div>

      <div className="  ">
        {tab === "preview" ? (
          <div className="flex justify-center w-full px-5 pt-20 scale-90">
            <div className="flex justify-between items-center w-full dark:bg-neutral-950 bg-neutral-100 shadow-xs  ring-1 dark:ring-neutral-700 ring-neutral-300 py-4 px-5 rounded-2xl">
              <span className="flex items-center gap-6">
                <span className="px-2">
                  <h1 className="text-2xl font-text">Wiggleicon</h1>
                </span>
                {nav.map(({ id, Icon, label, hasDropdown, Tooltip }) => (
                  <nav key={id}>
                    <span
                      onMouseEnter={() => {
                        iconRefs.current[id]?.startAnimation();
                        setShow(id);
                      }}
                      onMouseLeave={() => {
                        setShow(null);
                      }}
                      className=" relative font-inter font-semibold flex gap-2 items-center transition  text-neutral-500 hover:text-black group dark:hover:text-neutral-200 cursor-pointer"
                    >
                      <Icon
                        ref={(el) => {
                          iconRefs.current[id] = el;
                        }}
                      />

                      {label}

                      {hasDropdown && (
                        <span className="group-hover:rotate-180  transition duration-300 ease-in-out">
                          <IconChevronDown size={18} />
                        </span>
                      )}

                      {show === id && hasDropdown && (
                        <div className="absolute top-full left-0 right-0 h-8 " />
                      )}
                      <AnimatePresence>
                        {show === id && hasDropdown && Tooltip && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.95,

                              filter: "blur(4px)",
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              filter: "blur(0px)",
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.95,

                              filter: "blur(4px)",
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute w-110 top-13 pb-4  left-0 dark:bg-neutral-900 bg-neutral-50 text-white text-xs px-3 py-2.5 rounded-2xl shadow-lg"
                          >
                            <Tooltip />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>
                  </nav>
                ))}
              </span>

              <span className="flex gap-3">
                <button
                  className="dark:hover:bg-neutral-800 dark:bg-neutral-950 bg-neutral-50 hover:bg-neutral-100 
                transition cursor-pointer border text-sm dark:border-neutral-700 border-neutral-300  px-4 py-2 rounded-lg font-inter "
                >
                  Login
                </button>
                <button
                  className="dark:bg-white dark:hover:bg-neutral-100 hover:bg-neutral-800 bg-black
                 transition cursor-pointer dark:text-black text-white px-4 text-sm rounded-lg font-inter font-semibold"
                >
                  Sign up
                </button>
              </span>
            </div>
          </div>
        ) : (
          <pre
            className="w-full  max-h-115 rounded-3xl rounded-t-none bg-neutral-100 text-black dark:bg-neutral-900 dark:text-neutral-200 p-5 text-sm 
               overflow-auto"
          >
            <code>{codeString}</code>
          </pre>
        )}
      </div>
    </>
  );
}

export default Navicon;
