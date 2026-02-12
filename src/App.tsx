import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import Navicon from "./components/Navicon";
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="dark:bg-forground bg-background dark:text-background overflow-clip">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/template" element={<Template />} />
              <Route path="/navicon" element={<Navicon />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
