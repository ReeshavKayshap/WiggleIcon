// import Container from "./Container";
import { HeroSection } from "./HeroSection";
import { Nav } from "./Nav";
import Icons from "./Icons";
// import { cn } from "@/lib/lib/utils";
import Footer from "./Footer";

import Container from "./Container";
import IconsComponents from "./Components";

function Main() {
  return (
    <>
      <div>
        <Nav />
        <Container>
          <span className=" relative">
            {" "}
            {/* <div className=" h-full w-px border-r absolute right-0  dark:border-neutral-800 border-neutral-200" />
            <div className=" h-full w-px border-l absolute left-0   dark:border-neutral-800 border-neutral-200" /> */}
            <HeroSection />
            <Icons />
          </span>
        </Container>

        <IconsComponents />
        <Footer />
      </div>
    </>
  );
}

export default Main;
