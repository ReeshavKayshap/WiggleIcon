import { useRef, useState } from "react";

import type { AnimatedIconHandle } from "@/types/Type";

import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "@/icons/Copy";
import { IconCheck } from "@tabler/icons-react";
import { Box } from "@/icons/Box";
import { Stack } from "@/icons/Stack";

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
    { id: "product", Icon: Box, label: "Product" },
    { id: "resource", Icon: Stack, label: "Resource" },
  ];

  // const fliter = [{ id: "fliter", Icon: Filter, label: "Fliter" }];

  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
  return (
    <>
      <div className="flex justify-between  px-6 py-4  ">
        <span
          className="flex gap-5 bg-neutral-900 py-2 px-4 rounded-lg font-Adjust text-[16.5px]
        divide-x divide-neutral-700 "
        >
          <button
            onClick={() => setTab("preview")}
            className={`pr-3 cursor-pointer  transition ${
              tab === "preview"
                ? "dark:text-white text-neutral-950 "
                : "text-neutral-400 "
            }`}
          >
            Preview
          </button>

          <button
            onClick={() => setTab("code")}
            className={` cursor-pointer transition ${
              tab === "code" ? "text-white " : "text-neutral-400 "
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

      <div className=" h-full w-full ">
        {tab === "preview" ? (
          <div className="flex justify-center ">
            <div className="flex items-center gap-6 border border-neutral-700 py-4 px-5 rounded-2xl">
              <h1 className="text-xl font-text">MotionIcon</h1>
              {nav.map(({ id, Icon, label }) => (
                <nav key={id}>
                  <span
                    onMouseEnter={() => {
                      iconRefs.current[id]?.startAnimation();
                    }}
                    className="flex gap-2"
                  >
                    <Icon
                      ref={(el) => {
                        iconRefs.current[id] = el;
                      }}
                    />
                    {label}
                  </span>
                </nav>
              ))}
            </div>
          </div>
        ) : (
          <pre
            className="w-full h-full max-h-125 rounded-3xl rounded-t-none bg-neutral-900 text-neutral-200 p-5 text-sm 
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
