import Home from "@/icons/Home";
import { useState } from "react";

function nav() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div className="flex justify-center  ">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className=""
        >
          <Home trigger={hovered} triggerMode="external" />
          <h1>hello</h1>
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
}

export default nav;
