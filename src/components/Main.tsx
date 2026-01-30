import Container from "./Container";
import { HeroSection } from "./HeroSection";
import { Nav } from "./Nav";
import Icons from "./Icons";
function Main() {
  return (
    <>
      <div>
        <Nav />
        <Container>
          <HeroSection />
        </Container>

        <div
          className=" w-full h-fit border-t border-b dark:border-neutral-800 border-neutral-300  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
           bg-size-[15px_15px]  [--pattern-fg:color-mix(in_srgb,var(--color-neutral-300)_10%,transparent)]"
        >
          <div className=" h-10 w-full border-r border-l max-w-7xl mx-auto  dark:border-neutral-800 border-neutral-300" />
        </div>
        <Icons />
      </div>
    </>
  );
}

export default Main;
