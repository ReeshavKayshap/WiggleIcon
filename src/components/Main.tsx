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
          <HeroSection />
          <Icons />
          <IconsComponents />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Main;
