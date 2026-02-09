import { Coffee } from "@/icons/Coffee";

function Footer() {
  const tag = [
    { title: "Home" },
    { title: "Icons" },
    { title: "Sponsor" },
    { title: "Contact" },
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl pt-10  ">
        <div
          className="flex justify-between   px-15 pb-5
     "
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-text">MotionIcon</h1>
            <p className="text-lg font-text dark:text-neutral-400 text-gray-600 max-w-xl">
              Elevate your UI with a growing library of motion‑ready icon
              components built for developers and designers.
            </p>
          </div>
          <div className="flex gap-25">
            <span className="flex flex-col gap-2">
              {" "}
              <h1 className="text-lg font-text"> Section</h1>
              {tag.map((item, idx) => (
                <span
                  className="flex flex-col font-text dark:text-neutral-400 text-gray-600 cursor-pointer hover:text-neutral-300"
                  key={idx}
                >
                  {item.title}
                </span>
              ))}
            </span>
            <span className="flex flex-col gap-3">
              <h1 className="text-lg font-text">Sponsor</h1>
              <span className="flex gap-3 items-center">
                <Coffee
                  size={19}
                  className="dark:text-gray-600 text-neutral-400 cursor-pointer hover:text-neutral-300"
                />
                <p className="font-text dark:text-neutral-400 text-gray-600 cursor-pointer hover:text-neutral-300">
                  Buy Me A Coffee
                </p>
              </span>
            </span>
          </div>
        </div>
        <span className="flex justify-center py-5 ">
          <p className="text-lg font-text dark:text-neutral-400 text-gray-600">
            Built by{" "}
            <span className="hover:text-neutral-300 cursor-pointer hover:decoration-neutral-300 underline underline-offset-2 dark:decoration-neutral-400 decoration-gray-600">
              Reeshav
            </span>
            . The source code is available on{" "}
            <span className=" cursor-pointer hover:text-neutral-300 hover:decoration-neutral-300 underline underline-offset-2 dark:decoration-neutral-400 decoration-gray-600">
              {" "}
              GitHub
            </span>
            .
          </p>
        </span>
      </div>
    </>
  );
}

export default Footer;
