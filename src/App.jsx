import { useLayoutEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Project from "./Components/Project/Project";
import Careers from "./Components/Careers/Careers";
import Contact from "./Components/Contact/Contact";
import Project4 from "./Components/Project4/Project4";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sample-project-page" element={<Project />} />
          <Route path="/sample-project-page2" element={<Project2 />} />
          <Route path="/sample-project-page3" element={<Project3 />} />
          <Route path="/sample-project-page4" element={<Project4 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
