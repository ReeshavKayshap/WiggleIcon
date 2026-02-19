import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "@/icons/Cross";

import Navicon from "../IconsComponents/Navicon";
import NavBar from "@/IconsComponents/NavBar";

type ShowcaseItem = {
  id: number;
  title: string;
  component: React.ComponentType;
  colSpan: number;
  description: string;
};

function IconsComponents() {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

  const components: ShowcaseItem[] = [
    {
      id: 1,
      title: "Navicon",
      component: Navicon,
      colSpan: 2,
      description:
        "A tooltip card container that follows mouse pointer when hovered over",
    },
    {
      id: 2,
      title: "NavBar",
      component: NavBar,
      colSpan: 1,
      description: "A responsive animated navbar component",
    },
    {
      id: 3,
      title: "Coming Soon",
      component: () => (
        <div className="text-white text-center p-20">Third Component</div>
      ),
      colSpan: 1,
      description: "More components coming soon",
    },
  ];

  const openComponent = (item: ShowcaseItem) => {
    setActiveItem(item);
    setShow(true);
  };

  const ActiveComponent = activeItem?.component;

  return (
    <div className="py-30">
      <div className="max-w-336 mx-auto grid grid-cols-2 gap-6">
        {components.map((item) => (
          <div
            key={item.id}
            onClick={() => openComponent(item)}
            className={`cursor-pointer border border-neutral-700 rounded-3xl p-6
              hover:bg-neutral-800 transition ${
                item.colSpan === 2 ? "col-span-2" : "col-span-1"
              }`}
          >
            <h2 className="text-lg font-medium">{item.title}</h2>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {show && activeItem && (
          <>
            <motion.div
              onClick={() => setShow(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <motion.div
              className="fixed inset-0 z-60 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative w-full max-w-6xl rounded-3xl  p-8">
                <div className="absolute top-18 right-20  z-30">
                  <button onClick={() => setShow(false)}>
                    <Cross size={32} />
                  </button>
                </div>

                {ActiveComponent && (
                  <Mainlayer>
                    <Text
                      title={activeItem.title}
                      description={activeItem.description}
                    />
                    <Box>
                      <Topbar />
                      <ActiveComponent />
                    </Box>
                  </Mainlayer>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default IconsComponents;

const Mainlayer = ({ children }: React.PropsWithChildren) => (
  <div className="max-w-6xl mx-auto flex flex-col justify-center py-5 gap-5">
    {children}
  </div>
);

type TextProps = {
  title: string;
  description: string;
};

const Text = ({ title, description }: TextProps) => (
  <div className="px-2">
    <h1 className="text-4xl font-text">{title}</h1>
    <p className="text-sm font-text text-neutral-400">{description}</p>
  </div>
);

const Box = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col border border-neutral-700 rounded-3xl h-150 dark:bg-black bg-neutral-200">
    {children}
  </div>
);

const Topbar = () => (
  <div className="w-full flex gap-2 h-10 border-b px-5 py-4 pb-8 border-neutral-700">
    <div className="size-3 rounded-full bg-red-500" />
    <div className="size-3 rounded-full bg-yellow-500" />
    <div className="size-3 rounded-full bg-green-500" />
  </div>
);
