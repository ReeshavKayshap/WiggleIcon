import { useState } from "react";

import Navicon from "../IconsComponents/Navicon";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "@/icons/Cross";
function IconsComponents() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="py-30">
        <div className=" max-w-336 mx-auto grid grid-cols-2 ">
          <div className=" flex  col-span-2 ">
            <div className="w-full">hello</div>
            <div className="w-full">hello</div>
          </div>
          <div className="col-span-2">
            {/* Blur Overlay */}
            <AnimatePresence>
              {show && (
                <motion.div
                  className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            {/* Content that SHOULD blur */}
            <div
              onClick={() => setShow((prev) => !prev)}
              className="relative z-40 w-full cursor-pointer"
            >
              hello
            </div>

            {/* Menu / Navicon ABOVE blur */}
            <AnimatePresence>
              {show && (
                <motion.div
                  className="fixed inset-0 z-60 max-w-6xl mx-auto"
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
                >
                  <span
                    className=" absolute right-5 top-7 bg-neutral-700 rounded-full p-1 text-neutral-300 hover:text-neutral-400 transition-colors duration-300"
                    onClick={() => setShow((prev) => !prev)}
                  >
                    <Cross size={35} />
                  </span>

                  <Navicon />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconsComponents;
