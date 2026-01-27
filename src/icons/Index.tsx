import Home from "./Home";
import { Notification } from "./Notification";
import Search from "./Search";

function Index() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8  ">
        <Search />
        <Notification />
        <Home />
        <Search />
        <Notification />

        <Search />
        <Notification />
        <Search />
        <Notification />
        <Search />
      </div>
    </>
  );
}

export default Index;
