import { Camera } from "./Camera";
import { Eye } from "./Eye";
import Home from "./Home";
import { Notification } from "./Notification";
import Phone from "./Phone";
import Search from "./Search";
import { UnorderedList } from "./UnorderedList";
import { Map } from "./Map";
import { Cast } from "./Cast";
function Index() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8  ">
        <Search />
        <Notification />
        <Home />
        <Phone />
        <Camera />

        <Eye />
        <UnorderedList />
        <Map />
        <Cast />
        <Phone />

        <Eye />
        <Search />
        <Notification />
        <Home />
        <Phone />
      </div>
    </>
  );
}

export default Index;
