import "./App.css";
import { HeroSection } from "./components/HeroSection";
import Container from "./components/Container";
import { Nav } from "./components/Nav";
// import { BellIcon } from "./icons/BellIcon";
import { ThemeProvider } from "next-themes";
import Icons from "./components/Icons";

function App() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className=" bg-background text-forground overflow-clip">
          <Nav />
          <Container>
            <HeroSection />
          </Container>

          <div
            className=" w-full h-fit border-t border-b dark:border-neutral-800 border-neutral-300  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
           bg-size-[15px_15px]
              [--pattern-fg:color-mix(in_srgb,var(--color-neutral-300)_10%,transparent)]"
          >
            <div
              className=" h-12 w-full border-r border-l max-w-7xl mx-auto  dark:border-neutral-800 border-neutral-300
 
"
            ></div>
          </div>
          <Icons />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
