// import Container from "./Container";
import { HeroSection } from "./HeroSection";
import { Nav } from "./Nav";
import Icons from "./Icons";
// import { cn } from "@/lib/lib/utils";
import Footer from "./Footer";
import Playground from "./Playground";
import Container from "./Container";
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

        {/* <Container> */}

        {/* </Container> */}

        {/* <div
          className={cn(
            "w-full h-fit border-t border-b border-neutral-200 dark:border-neutral-800",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
            "bg-size-[15px_15px]",
            "[--pattern-fg:var(--color-black)]/5",
            "dark:[--pattern-fg:var(--color-white)]/8",
          )}
        >
          <div className=" h-10 w-full border-r border-l max-w-7xl mx-auto  dark:border-neutral-800 border-neutral-200" />
        </div> */}

        {/* <div
          className={cn(
            "w-full h-fit border-t border-b border-neutral-200 dark:border-neutral-800",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
            "bg-size-[15px_15px]",
            "[--pattern-fg:var(--color-black)]/5",
            "dark:[--pattern-fg:var(--color-white)]/8",
          )}
        >
          <div className=" h-10 w-full border-r border-l max-w-7xl mx-auto  dark:border-neutral-800 border-neutral-200" />
        </div> */}
        <Playground />
        <Footer />
      </div>
    </>
  );
}

export default Main;
