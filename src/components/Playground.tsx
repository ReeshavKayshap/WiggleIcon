import { useNavigate } from "react-router-dom";
function Playground() {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-30">
        <div className=" max-w-336 mx-auto grid grid-cols-2 ">
          {/* <div className="w-full flex gap-2 h-10">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
            // border border-neutral-600 rounded-3xl py-4 px-5
          </div> */}
          <div className=" flex  col-span-2 ">
            <div onClick={() => navigate("/template")} className="w-full">
              hello
            </div>
            <div onClick={() => navigate("/navicon")} className="w-full">
              hello
            </div>
          </div>
          <div className="  col-span-2 ">
            <div className="w-full">hello</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
