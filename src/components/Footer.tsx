import { Coffee } from "@/icons/Coffee";
import { Link } from "react-router-dom";

function Footer() {
  const tag = [
    { title: "Icons", id: "icons" },
    { title: "Components", id: "components" },
    { title: "Sponsor", id: "sponsor" },
  ];
  return (
    <>
      <section id="sponsor" className="scroll-mt-24">
        <div className="  border-t border-neutral-800 ">
          <div className="  max-w-336 mx-auto pt-20 px-5">
            <div className="md:flex md:justify-between pb-20  ">
              <div className="flex flex-col gap-2 pb-20 md:pb-0">
                <h1 className="text-4xl font-text">Wiggleicon</h1>
                <p className="text-lg font-text dark:text-neutral-400 text-neutral-500 max-w-xl">
                  Elevate your UI with a growing library of motion‑ready icon
                  components built for developers and designers.
                </p>
              </div>
              <div className="flex gap-25">
                <span className="flex flex-col gap-2">
                  {" "}
                  <h1 className="text-lg font-text"> Section</h1>
                  {tag.map((item) => (
                    <a
                      className="flex flex-col font-text dark:text-neutral-400 text-neutral-500 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300"
                      key={item.id}
                      href={`#${item.id}`}
                    >
                      {item.title}
                    </a>
                  ))}
                </span>
                <span className="flex flex-col gap-3">
                  <h1 className="text-lg font-text">Sponsor</h1>
                  <span className="flex gap-3 items-center">
                    <Coffee
                      size={19}
                      className="dark:text-gray-600 text-neutral-500 cursor-pointer hover:text-gray-600"
                    />
                    <p className="font-text dark:text-neutral-400 text-neutral-500 cursor-pointer hover:text-gray-600">
                      Buy Me A Coffee
                    </p>
                  </span>
                </span>
              </div>
            </div>
            <span className="flex justify-center py-5 ">
              <p className="text-lg font-text text-center dark:text-neutral-400 text-neutral-500">
                Built by{" "}
                <Link
                  to="https://x.com/KayshapReeshav"
                  target="_blank"
                  className="hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer dark:hover:decoration-neutral-300 hover:decoration-neutral-700
                   underline underline-offset-2 dark:decoration-neutral-400 decoration-neutral-500"
                >
                  Reeshav
                </Link>
                . The source code is available on{" "}
                <Link
                  to="https://github.com/ReeshavKayshap/IconLibrary"
                  target="_blank"
                  className=" cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 dark:hover:decoration-neutral-300 hover:decoration-neutral-700
                  underline underline-offset-2 dark:decoration-neutral-400 decoration-neutral-500"
                >
                  {" "}
                  GitHub
                </Link>
                .
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
