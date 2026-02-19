import { Box } from "@/icons/Box";
import { Docs } from "@/icons/Docs";
import { Pricing } from "@/icons/Pricing";

import { Stack } from "@/icons/Stack";
import { User } from "@/icons/User";

import type { AnimatedIconHandle } from "@/types/Type";
import { IconChevronDown } from "@tabler/icons-react";

import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

function NavBar() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const copyFunction = async () => {
    await navigator.clipboard.writeText(codeString);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const codeString = `
function NavBar() {}
export default NavBar;
const Navbar = ({ children }: { children: React.ReactNode }) => (
  <span className="flex justify-between border border-neutral-700 py-4 px-5 rounded-2xl">
    {children}
  </span>
);

type NavOneProps = React.PropsWithChildren<{
  onLeave?: () => void;
}>;

const NavOne = ({ children, onLeave }: NavOneProps) => (
  <span className="flex items-center gap-5 relative" onMouseLeave={onLeave}>
    {children}
  </span>
);

type PopAnimationProps = React.PropsWithChildren<{
  isOpen: boolean;
  className?: string;
}>;

const PopAnimation = ({ isOpen, children, className }: PopAnimationProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={\`absolute bg-neutral-900 text-white text-xs
                    px-3 py-2.5 rounded-2xl shadow-lg \${className}\`}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
`;
  const nav = [
    { id: "product", Icon: Box, label: "Product" },
    { id: "resource", Icon: Stack, label: "Resource" },
    // { id: "support", Icon: Setting, label: "Support" },
  ];

  const navTwo = [
    { id: "docs", Icon: Docs, label: "Docs" },
    { id: "pricing", Icon: Pricing, label: "Pricing" },
  ];
  const product = [
    { id: "user", Icon: User, label: "User Authentication" },
    // { id: "pricing", Icon: Pricing, label: "Pricing" },
  ];

  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});

  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center gap-5 ">
      <div className="px-2">
        <h1 className="text-4xl font-text">Navbar</h1>
        <p className="text-sm font-text text-neutral-400">
          A tooltip card container that follows mouse pointer when hovered over
        </p>
      </div>

      <div className="flex flex-col border border-neutral-700 rounded-3xl h-140 dark:bg-[#111110] bg-neutral-200 ">
        <div className="flex items-center w-full h-15 border-b px-5  border-neutral-700 relative ">
          <div className=" w-fit flex  gap-2   ">
            <div className="size-3 rounded-full bg-red-500" />
            <div className="size-3 rounded-full bg-yellow-500" />
            <div className="size-3 rounded-full bg-green-500" />
          </div>
          <span className=" flex justify-center items-center   absolute inset-0 mx-auto ">
            <h1 className="text-xl font-text  px-30 rounded-2xl">motionicon</h1>
          </span>
        </div>

        <div className="flex-1 gap-6 px-6 py-4 bg-[#0a0a09] rounded-t-none rounded-3xl">
          <div className="flex justify-between ">
            <span className="flex gap-6">
              {" "}
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

          <div>
            {tab === "preview" ? (
              <Navbar>
                <div className="flex">
                  <NavOne onLeave={() => setHoveredId(null)}>
                    <span>
                      <h1 className="text-2xl font-text">MotionIcon</h1>
                    </span>
                    {nav.map(({ id, Icon, label }) => (
                      <div
                        key={id}
                        className="relative inline-block"
                        onMouseEnter={() => {
                          iconRefs.current[id]?.startAnimation();
                          setHoveredId(id);
                        }}
                      >
                        <div
                          className={`flex justify-between items-center gap-2 py-2 cursor-pointer transition-colors duration-200
                                    ${hoveredId === id ? "text-white" : "text-neutral-400"}`}
                        >
                          <Icon
                            ref={(el) => {
                              iconRefs.current[id] = el;
                            }}
                            className="pointer-events-none"
                          />

                          <span className="flex gap-1 items-center">
                            <h1>{label}</h1>
                            <span className="pt-1">
                              {" "}
                              <IconChevronDown
                                className={`size-5 transition-transform duration-300 ease-in-out ${
                                  hoveredId === id
                                    ? "rotate-180 text-white"
                                    : "rotate-0"
                                }`}
                              />
                            </span>
                          </span>
                        </div>

                        {hoveredId === id && (
                          <div className="absolute top-full left-0 right-0 h-8" />
                        )}

                        <AnimatePresence>
                          {hoveredId === id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: 6 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 6 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="absolute top-full mt-2 left-0  bg-neutral-900 text-white text-xs
                                                px-3 py-2.5 rounded-2xl shadow-lg"
                            >
                              {id === "product" && (
                                <div className="h-50 w-80">
                                  <h4 className="font-semibold text-lg font-Adjust">
                                    Product
                                  </h4>

                                  <div>
                                    {product.map(
                                      ({ id: productId, Icon, label }) => (
                                        <div
                                          key={productId}
                                          className="flex items-center gap-2 cursor-pointer"
                                          onMouseEnter={() => {
                                            iconRefs.current[
                                              productId
                                            ]?.startAnimation();
                                          }}
                                        >
                                          <Icon
                                            ref={(el) => {
                                              iconRefs.current[productId] = el;
                                            }}
                                          />

                                          <span className="text-lg">
                                            {label}
                                          </span>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}

                              {id === "resource" && (
                                <div>
                                  <h4 className="font-semibold">
                                    Search Tooltip
                                  </h4>
                                  <button className="mt-2 bg-white text-black px-3 py-1 rounded text-xs">
                                    Copy shortcut
                                  </button>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </NavOne>

                  <span className="flex pl-5 gap-7">
                    {navTwo.map(({ id, Icon, label }) => (
                      <div
                        onMouseEnter={() => {
                          iconRefs.current[id]?.startAnimation();
                        }}
                        key={id}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white cursor-pointer"
                      >
                        <Icon
                          ref={(el) => {
                            iconRefs.current[id] = el;
                          }}
                        />
                        <span>{label}</span>
                      </div>
                    ))}
                  </span>
                </div>

                <div>
                  <button className="border border-neutral-700 py-1.5 px-3 rounded-xl">
                    Start building
                  </button>
                </div>
              </Navbar>
            ) : (
              <pre className="w-full  bg-neutral-900 text-neutral-200 p-5 rounded-xl text-sm overflow-y">
                <code>{codeString}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = ({ children }: { children: React.ReactNode }) => (
  <span className="flex justify-between border border-neutral-700 py-4 px-5 rounded-2xl">
    {children}
  </span>
);

type NavOneProps = React.PropsWithChildren<{
  onLeave?: () => void;
}>;

const NavOne = ({ children, onLeave }: NavOneProps) => (
  <span className="flex items-center gap-5 relative" onMouseLeave={onLeave}>
    {children}
  </span>
);

export default NavBar;
