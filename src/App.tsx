import "./App.css";

import { ThemeProvider } from "next-themes";
import Main from "./components/Main";

function App() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className=" bg-background text-forground overflow-clip">
          <Main />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
