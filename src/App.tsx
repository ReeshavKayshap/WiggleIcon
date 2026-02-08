import "./App.css";

import { ThemeProvider } from "next-themes";
import Main from "./components/Main";

function App() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="dark:bg-forground bg-background dark:text-background overflow-clip">
          <Main />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
