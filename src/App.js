import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { AnimatePresence } from "framer-motion";
import useLocationCustom from "./hooks/useLocationCustom";

function App() {
  const location = useLocationCustom(useLocation());
  return (
    <div className="app">
      <Background />
      <div className="app__fakeHeader"></div>
      <div className="app__content">
        <Navbar location={location?.data} />

        <div className="app__body">
          <AnimatePresence>
            <Switch location={location?.data} key={location.key}>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
