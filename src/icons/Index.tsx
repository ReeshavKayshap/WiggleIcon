import Home from "./Home";
import { Notification } from "./Notification";
import Search from "./Search";

function Index() {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-center gap-10 py-20 ">
          <Notification />
          <Search />
          <Home />
          <Search />

          <Notification />
          <Search />
          <Notification />
          <Search />

          <Notification />
          <Search />
          <Notification />
          <Search />
        </div>
      </div>
    </>
  );
}

export default Index;
