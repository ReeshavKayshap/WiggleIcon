import { Copy } from "@/icons/Copy";

import type { AnimatedIconHandle } from "@/types/Type";
import { IconCheck } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { User } from "@/icons/User";
import { Home } from "@/icons/Home";
import { FaceId } from "@/icons/FaceId";
import { Plug } from "@/icons/Plug";
import { File } from "@/icons/File";
import { Help } from "@/icons/Help";
import { Setting } from "@/icons/Setting";

function Navbar() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const copyFunction = async () => {
    await navigator.clipboard.writeText(codeString);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const codeString = `
import type { AnimatedIconHandle } from "@/types/Type";
import { User } from "@/icons/User";
import { useRef} from "react";
import { Home } from "@/icons/Home";
import { FaceId } from "@/icons/FaceId";
import { Plug } from "@/icons/Plug";
import { File } from "@/icons/File";
import { Help } from "@/icons/Help";
import { Setting } from "@/icons/Setting";
  function Card() {
    const nav = [
    {
      id: "home",
      Icon: Home,
      label: "Dashboard",
    },
    {
      id: "notificationOff",
      Icon: User,
      label: "User",
    },
  ];
  const navTwo = [
    {
      id: "authentication",
      Icon: FaceId,
      label: "User & Authentication",
    },
    {
      id: "integrations",
      Icon: Plug,
      label: "Integrations",
    },
    {
      id: "file",
      Icon: File,
      label: "Session",
    },
  ];

  const logout = [
    {
      id: "help",
      Icon: Help,
      label: "Help",
    },
    {
      id: "setting",
      Icon: Setting,
      label: "Setting",
    },
  ];

  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});
  return <>
  <div className=" flex justify-center  w-full   relative">
          <div
            className="flex flex-col justify-center  items-center  w-70 dark:bg-neutral-950
            bg-neutral-100 shadow-xs  ring-1 dark:ring-neutral-700
             ring-neutral-300 py-2 px-5 rounded-2xl "
          >
            <span className="  w-full  ">
              <span className="flex flex-col gap-2 py-2">
                {nav.map((item) => (
                  <div
                    onMouseEnter={() => {
                      iconRefs.current[item.id]?.startAnimation();
                    }}
                    className="flex gap-2 w-full cursor-pointer py-2 dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black px-4
                    rounded-lg hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 hover:ring-neutral-200
                   text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out"
                    key={item.id}
                  >
                    <span>
                      <item.Icon
                        ref={(el) => {
                          iconRefs.current[item.id] = el;
                        }}
                      />
                    </span>
                    <span>
                      <h1>{item.label}</h1>
                    </span>
                  </div>
                ))}
              </span>

              <span className="flex flex-col ">
                <div className="  w-full  py-2 px-4 ">
                  <h1>Configure</h1>
                </div>
                <span className="flex flex-col gap-2 py-2">
                  {navTwo.map((item) => (
                    <div
                      onMouseEnter={() => {
                        iconRefs.current[item.id]?.startAnimation();
                      }}
                      className="flex gap-2 w-full cursor-pointer py-2 dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black px-4
                    rounded-lg hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 hover:ring-neutral-200
                   text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out"
                      key={item.id}
                    >
                      <span>
                        <item.Icon
                          ref={(el) => {
                            iconRefs.current[item.id] = el;
                          }}
                        />
                      </span>
                      <span>
                        <h1>{item.label}</h1>
                      </span>
                    </div>
                  ))}
                </span>
              </span>

              <span className="flex flex-col ">
                <div className="  w-full  py-2 px-4 ">
                  <h1>Term & Condition</h1>
                </div>
                <span className="flex flex-col gap-2 py-2">
                  {logout.map((item) => (
                    <div
                      onMouseEnter={() => {
                        iconRefs.current[item.id]?.startAnimation();
                      }}
                      className="flex gap-2 w-full cursor-pointer py-2 dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black px-4
                    rounded-lg hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 hover:ring-neutral-200
                   text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out"
                      key={item.id}
                    >
                      <span>
                        <item.Icon
                          ref={(el) => {
                            iconRefs.current[item.id] = el;
                          }}
                        />
                      </span>
                      <span>
                        <h1>{item.label}</h1>
                      </span>
                    </div>
                  ))}
                </span>
              </span>
            </span>
          </div>
        </div>
  </>;
}

export default Card;

  `;
  const nav = [
    {
      id: "home",
      Icon: Home,
      label: "Dashboard",
    },
    {
      id: "notificationOff",
      Icon: User,
      label: "User",
    },
  ];
  const navTwo = [
    {
      id: "authentication",
      Icon: FaceId,
      label: "User & Authentication",
    },
    {
      id: "integrations",
      Icon: Plug,
      label: "Integrations",
    },
    {
      id: "file",
      Icon: File,
      label: "Session",
    },
  ];

  const logout = [
    {
      id: "help",
      Icon: Help,
      label: "Help",
    },
    {
      id: "setting",
      Icon: Setting,
      label: "Setting",
    },
  ];

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
          <button onClick={copyFunction}>
            {tab === "code" && <> {copied ? <IconCheck /> : <Copy />}</>}
          </button>
        </span>
      </div>

      {tab === "preview" ? (
        <div className=" flex justify-center  w-full  relative">
          <div
            className="flex flex-col justify-center  items-center  w-70 dark:bg-neutral-950
            bg-neutral-100 shadow-xs  ring-1 dark:ring-neutral-700
             ring-neutral-300 py-2 px-5 rounded-2xl "
          >
            <span className="  w-full  ">
              <span className="flex flex-col gap-2 py-2">
                {nav.map((item) => (
                  <div
                    onMouseEnter={() => {
                      iconRefs.current[item.id]?.startAnimation();
                    }}
                    className="flex gap-2 w-full cursor-pointer py-2 dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black px-4
                    rounded-lg hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 hover:ring-neutral-200
                   text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out"
                    key={item.id}
                  >
                    <span>
                      <item.Icon
                        ref={(el) => {
                          iconRefs.current[item.id] = el;
                        }}
                      />
                    </span>
                    <span>
                      <h1>{item.label}</h1>
                    </span>
                  </div>
                ))}
              </span>

              <span className="flex flex-col ">
                <div className="  w-full  py-2 px-4 ">
                  <h1>Configure</h1>
                </div>
                <span className="flex flex-col gap-2 py-2">
                  {navTwo.map((item) => (
                    <div
                      onMouseEnter={() => {
                        iconRefs.current[item.id]?.startAnimation();
                      }}
                      className="flex gap-2 w-full cursor-pointer py-2 dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black px-4
                    rounded-lg hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 hover:ring-neutral-200
                   text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out"
                      key={item.id}
                    >
                      <span>
                        <item.Icon
                          ref={(el) => {
                            iconRefs.current[item.id] = el;
                          }}
                        />
                      </span>
                      <span>
                        <h1>{item.label}</h1>
                      </span>
                    </div>
                  ))}
                </span>
              </span>

              <span className="flex flex-col ">
                <div className="  w-full  py-2 px-4 ">
                  <h1>Term & Condition</h1>
                </div>
                <span className="flex flex-col gap-2 py-2">
                  {logout.map((item) => (
                    <div
                      onMouseEnter={() => {
                        iconRefs.current[item.id]?.startAnimation();
                      }}
                      className="flex gap-2 w-full cursor-pointer py-2 dark:hover:text-neutral-200 dark:text-neutral-400 hover:text-black px-4
                    rounded-lg hover:dark:shadow-neutral-800 hover:shadow-neutral-300 hover:ring-1 hover:dark:ring-neutral-700 hover:ring-neutral-200
                   text-neutral-500 hover:shadow-xs dark:hover:bg-neutral-800 hover:bg-neutral-100 transition duration-400  ease-in-out"
                      key={item.id}
                    >
                      <span>
                        <item.Icon
                          ref={(el) => {
                            iconRefs.current[item.id] = el;
                          }}
                        />
                      </span>
                      <span>
                        <h1>{item.label}</h1>
                      </span>
                    </div>
                  ))}
                </span>
              </span>
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
    </>
  );
}

export default Navbar;
