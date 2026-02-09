import Template from "./template";

function Playground() {
  return (
    <>
      <div className="py-30">
        <div className=" max-w-336 mx-auto border border-neutral-600 rounded-3xl py-4 px-5">
          <div className="w-full flex gap-2 h-10">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>
          <div>
            <Template />
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
