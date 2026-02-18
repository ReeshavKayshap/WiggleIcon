import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "@/icons/Cross";

import Navicon from "../IconsComponents/Navicon";
import NavBar from "@/IconsComponents/NavBar";
// import OtherIcon from "../IconsComponents/OtherIcon";
// import AnotherIcon from "../IconsComponents/AnotherIcon";

function IconsComponents() {
  const [show, setShow] = useState(false);
  const [activeComponent, setActiveComponent] =
    useState<React.ReactNode | null>(null);

  const components = [
    {
      id: 1,
      title: "NavBar",
      component: <NavBar />,
      colSpan: 2,
    },
    {
      id: 2,
      title: "Navicon",
      component: <Navicon />,
      colSpan: 1,
    },

    {
      id: 3,
      title: "Coming Soon",
      component: <div className="text-white">Third Component</div>,
      colSpan: 1,
    },
  ];

  const openComponent = (component: React.ReactNode) => {
    setActiveComponent(component);
    setShow(true);
  };

  return (
    <div className="py-30">
      <div className="max-w-336 mx-auto grid grid-cols-2 gap-6">
        {/* GRID ITEMS */}
        {components.map((item) => (
          <div
            key={item.id}
            onClick={() => openComponent(item.component)}
            className={`cursor-pointer border border-neutral-700 rounded-3xl p-6 hover:bg-neutral-800 transition col-span-${item.colSpan}`}
          >
            <h2 className="text-lg font-medium">{item.title}</h2>
          </div>
        ))}

        {/* OVERLAY */}
        <AnimatePresence>
          {show && (
            <>
              <motion.div
                onClick={() => setShow(false)}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />

              {/* MODAL */}
              <div className="">
                {" "}
                <motion.div
                  className="fixed inset-0 z-60 flex items-center justify-center  "
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className=" relative w-full max-w-6xl  rounded-3xl   ">
                    <div className=" absolute right-15 flex justify-end px-5 py-3 z-30">
                      {" "}
                      <button onClick={() => setShow(false)}>
                        <Cross size={32} />
                      </button>
                    </div>

                    {/* ACTIVE COMPONENT */}
                    {activeComponent}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default IconsComponents;
