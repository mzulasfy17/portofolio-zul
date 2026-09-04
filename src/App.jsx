import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/experience"
              element={<Experience />}
            />

            <Route
              path="/skills"
              element={<Skills />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>
        </MainLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;