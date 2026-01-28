import { IconList } from "@/icons/Index";
import { useState } from "react";

const PAGE_SIZE = 10;

function Icon() {
  const [current, setCurrent] = useState(1);
  const totalIcons = IconList.length;
  const NoOfPage = Math.ceil(totalIcons / PAGE_SIZE);
  const Start = (current - 1) * PAGE_SIZE;
  const End = Start + PAGE_SIZE;
  const handleClick = (page: number) => {
    setCurrent(page);
  };
  return (
    <>
      <div className=" border-r border-l max-w-7xl mx-auto flex flex-col gap-15 px-15 py-20 dark:border-neutral-800 border-neutral-300">
        <span className="flex items-center relative  ">
          <span className=" absolute pl-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search 50 Icons..."
            className="bg-neutral-800 w-130 py-3 rounded-xl pl-13 ring-2 ring-neutral-700 font-main outline-none"
          />
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8  ">
          {IconList.slice(Start, End).map(({ id, Component }) => (
            <span key={id}>
              <Component />
            </span>
          ))}
        </div>
        <div>
          {Array.from({ length: NoOfPage }, (_, index) => {
            const page = index + 1;
            return (
              <span key={page} onClick={() => handleClick(page)}>
                {page}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Icon;
