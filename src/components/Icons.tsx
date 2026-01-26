import Index from "../icons/Index";

function Icon() {
  return (
    <>
      <div className=" border-r border-l max-w-7xl mx-auto  px-20 py-20 border-neutral-800">
        <span className="flex items-center relative">
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

        <div>
          <Index />
        </div>
      </div>
    </>
  );
}

export default Icon;
