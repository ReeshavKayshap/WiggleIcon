import { Attachment } from "@/icons/Attachment";
import { Copy } from "@/icons/Copy";
import { Cross } from "@/icons/Cross";
import { File } from "@/icons/File";
import { Flag } from "@/icons/Flag";
import { Folder } from "@/icons/Folder";
import { Notification } from "@/icons/Notification";
import { Target } from "@/icons/Target";
import type { AnimatedIconHandle } from "@/types/Type";
import { IconCheck } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@/icons/Plus";

function BoxReveal() {
  const Icons = [
    {
      id: "Project",
      Icon: Folder,
    },
    {
      id: "Taks",
      Icon: File,
    },
    {
      id: "Target",
      Icon: Target,
    },
    {
      id: "Reminder",
      Icon: Notification,
    },
    {
      id: "Milestone",
      Icon: Flag,
    },
    {
      id: "Pin",
      Icon: Attachment,
    },
  ];

  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const copyFunction = async () => {
    await navigator.clipboard.writeText(codeString);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const codeString = `
 export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
import { Attachment } from "@/icons/Attachment";
import { Copy } from "@/icons/Copy";
import { Cross } from "@/icons/Cross";
import { File } from "@/icons/File";
import { Flag } from "@/icons/Flag";
import { Folder } from "@/icons/Folder";
import { Notification } from "@/icons/Notification";
import { Target } from "@/icons/Target"; 

function BoxReveal() {
  const Icons = [
    {
      id: "Project",
      Icon: Folder,
    },
    {
      id: "Taks",
      Icon: File,
    },
    {
      id: "Target",
      Icon: Target,
    },
    {
      id: "Reminder",
      Icon: Notification,
    },
    {
      id: "Milestone",
      Icon: Flag,
    },
    {
      id: "Pin",
      Icon: Attachment,
    },
  ];
 const [open, setOpen] = useState(false);
 const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
 return(
 <>  
 <div className="flex justify-center items-center h-full">
          <div className="relative">
            <motion.div
              animate={{ width: open ? "300px" : "148px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="dark:bg-neutral-800 bg-neutral-100 flex flex-col cursor-pointer rounded-3xl border border-[#a19e9b]/10 shadow-lg"
              onClick={() => setOpen(!open)}
            >
              <div
                onMouseEnter={() => {
                  iconRefs.current["plus"]?.startAnimation();
                }}
                className="flex items-center gap-2 py-2 px-4 h-10.5"
              >
                <span className="text-[#a19e9b] font-inter  ">Create New</span>
                <span className="overflow-hidden h-4.5 flex items-center justify-center">
                  <motion.span
                    animate={{
                      transform: open ? "translateY(-100%)" : "translateY(0)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus
                      ref={(el) => {
                        iconRefs.current["plus"] = el;
                      }}
                      size={18}
                      color="#a19e9b"
                    />
                  </motion.span>
                </span>
              </div>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "200px", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" dark:bg-neutral-300 bg-neutral-200/60  rounded-3xl border-t border-[#a19e9b]/20 overflow-hidden will-change-transform shadow-xl"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                      className="grid grid-cols-3 p-4 h-full"
                    >
                      {Icons.map((item) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            ease: "easeOut",
                          }}
                          onMouseEnter={() => {
                            iconRefs.current[item.id]?.startAnimation();
                          }}
                          key={item.id}
                          className="flex items-center justify-center will-change-transform flex-col gap-1 p-1 hover:bg-neutral-200 rounded-2xl"
                        >
                          <item.Icon
                            size={30}
                            ref={(el) => {
                              iconRefs.current[item.id] = el;
                            }}
                          />
                          <h1 className="font-inter font-medium">{item.id}</h1>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className=" absolute top-2.5 right-5 ">
              <AnimatePresence>
                {open && (
                  <div className=" h-6 w-6.25  ">
                    <motion.span
                      onClick={() => setOpen(false)}
                      className="h-6 w-6 flex items-center cursor-pointer justify-center dark:bg-neutral-500 bg-neutral-200/60  rounded-full shadow-md"
                      initial={{ opacity: 0, transform: "translateY(100%)" }}
                      animate={{ opacity: 1, transform: "translateY(0)" }}
                      exit={{ opacity: 0, transform: "translateY(100%)" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Cross size={16} />
                    </motion.span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
 </>
 )
}
export default BoxReveal;
`;
  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
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
          <button className="cursor-pointer" onClick={copyFunction}>
            {tab === "code" && (
              <>
                {" "}
                {copied ? (
                  <IconCheck className="text-green-500 cursor-pointer" />
                ) : (
                  <Copy className="text-neutral-800 dark:text-neutral-300" />
                )}
              </>
            )}
          </button>
        </span>
      </div>

      {tab === "preview" && (
        <div className="flex justify-center items-center h-full  ">
          <div className="relative">
            <motion.div
              animate={{ width: open ? "300px" : "150px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="dark:bg-neutral-800  bg-neutral-100 flex flex-col cursor-pointer rounded-3xl border border-[#a19e9b]/10 shadow-lg"
              onClick={() => setOpen(!open)}
            >
              <div
                onMouseEnter={() => {
                  iconRefs.current["plus"]?.startAnimation();
                }}
                className="flex items-center gap-2 py-2 px-4 h-10.5"
              >
                <span className="text-[#a19e9b] font-inter  ">Create New</span>
                <span className="overflow-hidden h-4.5 flex items-center justify-center">
                  <motion.span
                    animate={{
                      transform: open ? "translateY(-100%)" : "translateY(0)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus
                      ref={(el) => {
                        iconRefs.current["plus"] = el;
                      }}
                      size={18}
                      color="#a19e9b"
                    />
                  </motion.span>
                </span>
              </div>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "200px", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" dark:bg-neutral-300 bg-neutral-200/60  rounded-3xl border-t border-[#a19e9b]/20 overflow-hidden will-change-transform shadow-xl"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                      className="grid grid-cols-3 p-4 h-full"
                    >
                      {Icons.map((item) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            ease: "easeOut",
                          }}
                          onMouseEnter={() => {
                            iconRefs.current[item.id]?.startAnimation();
                          }}
                          key={item.id}
                          className="flex items-center justify-center will-change-transform flex-col gap-1 p-1 hover:bg-neutral-200 rounded-2xl"
                        >
                          <item.Icon
                            size={30}
                            ref={(el) => {
                              iconRefs.current[item.id] = el;
                            }}
                          />
                          <h1 className="font-inter font-medium">{item.id}</h1>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className=" absolute top-2.5 right-5 ">
              <AnimatePresence>
                {open && (
                  <div className=" h-6 w-6.25  ">
                    <motion.span
                      onClick={() => setOpen(false)}
                      className="h-6 w-6 flex items-center cursor-pointer justify-center dark:bg-neutral-500 bg-neutral-200/60  rounded-full shadow-md"
                      initial={{ opacity: 0, transform: "translateY(100%)" }}
                      animate={{ opacity: 1, transform: "translateY(0)" }}
                      exit={{ opacity: 0, transform: "translateY(100%)" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Cross size={16} />
                    </motion.span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {tab === "code" && (
        <pre
          className="w-full  max-h-115 rounded-3xl rounded-t-none bg-neutral-100 text-black dark:bg-neutral-900 dark:text-neutral-200 p-5 text-sm 
               overflow-auto"
        >
          <code>{codeString}</code>
        </pre>
      )}
    </>
  );
}

export default BoxReveal;
