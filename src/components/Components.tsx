import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "@/icons/Cross";
import firstlogoDark from "../assets/darklogo.png";
import firstlogoLight from "../assets/lightlogo.png";
import firstlogoDark2 from "../assets/darklogo2.png";
import firstlogoLight2 from "../assets/lightlogo2.png";
import Navicon from "../IconsComponents/Navicon";
import NavBar from "@/IconsComponents/NavBar";

type ShowcaseItem = {
  id: number;
  title: string;
  component: React.ComponentType;
  images?: {
    light: string;
    dark: string;
  };
  colSpan: number;
  description: string;
};

function IconsComponents() {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

  const components: ShowcaseItem[] = [
    {
      id: 1,
      title: "NavBar",
      component: Navicon,
      images: {
        light: firstlogoLight,
        dark: firstlogoDark,
      },
      colSpan: 1,
      description: "Simple and elegant headers for your website",
    },
    {
      id: 2,
      title: "Card",
      component: NavBar,
      images: {
        light: firstlogoLight2,
        dark: firstlogoDark2,
      },
      colSpan: 1,
      description: "A responsive animated navbar component",
    },
  ];

  const openComponent = (item: ShowcaseItem) => {
    setActiveItem(item);
    setShow(true);
  };

  const ActiveComponent = activeItem?.component;

  return (
    <div className="py-30 max-w-336 mx-auto flex flex-col gap-6 ">
      <div className="grid grid-cols-2 gap-6">
        {components.map((item) => (
          <div
            key={item.id}
            onClick={() => openComponent(item)}
            className={`w-full flex flex-col  group cursor-pointer border border-neutral-300 dark:border-neutral-700 rounded-3xl shadow-xs
               ${item.colSpan === 2 ? "col-span-2" : "col-span-1"}`}
          >
            <div className="dark:bg-black bg-white group flex-1 flex justify-center items-center rounded-3xl rounded-b-none  ">
              {item.images && (
                <>
                  {/* Light Mode Image */}
                  <img
                    src={item.images.light}
                    alt={item.title}
                    className="block dark:hidden scale-96 group-hover:scale-100 transition duration-300 ease-in-out rounded-3xl"
                  />

                  {/* Dark Mode Image */}
                  <img
                    src={item.images.dark}
                    alt={item.title}
                    className="hidden dark:block  scale-96 group-hover:scale-100 transition duration-300 ease-in-out rounded-3xl"
                  />
                </>
              )}
            </div>

            <span className=" flex flex-col  px-5  pt-8 pb-10">
              <h2 className=" font-medium text-3xl font-text">{item.title}</h2>
              <p className="font-inter  dark:text-neutral-200">
                {item.description}
              </p>
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {show && activeItem && (
          <>
            <motion.div
              onClick={() => setShow(false)}
              className="fixed inset-0 z-50 bg-white/40 dark:bg-black/40 backdrop-blur-sm"
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
      <div
        className="dark:text-white text-center py-8  font-inter cursor-pointer px-5 
       border border-neutral-300 dark:border-neutral-700 rounded-3xl flex flex-col gap-1 "
      >
        <h1 className=" text-4xl">New components launching soon...</h1>
      </div>
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
  <div className="flex flex-col border border-neutral-700 rounded-3xl h-150 dark:bg-black bg-white">
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
