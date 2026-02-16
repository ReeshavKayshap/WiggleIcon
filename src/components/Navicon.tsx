import { Bell } from "@/icons/Bell";

import { SearchTwo } from "@/icons/SearchTwo";
import { SmartHome } from "@/icons/SmartHome";
import { User } from "@/icons/User";

function Navicon() {
  return (
    <>
      <div className="h-screen max-w-6xl mx-auto py-10 flex flex-col gap-5">
        <div className="px-2">
          <h1 className="text-5xl">NavBar</h1>
          <p className="text-lg ">
            A tooltip card container that follows mouse pointer when hovered
            over
          </p>
        </div>
        <div className=" flex flex-col border border-neutral-600 rounded-3xl  h-150">
          <div className="w-full flex gap-2 h-10 border-b px-5 py-4 pb-8 border-neutral-700 ">
            <div
              className="size-3
             rounded-full bg-red-500"
            ></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>
          <div className=" flex-1 flex justify-center items-center ">
            <span className="flex items-center gap-5 bg-neutral-800 px-8 py-2 rounded-4xl">
              {" "}
              <SmartHome size={30} />
              <SearchTwo size={25} />
              <Bell size={24} />
              <User size={25} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navicon;
