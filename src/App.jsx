import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import { Element } from "react-scroll";
import Com from "./components";
import Pages from "./pages";

import "./index.css";

export default function App() {
  let [loading, setLoading] = useState(false);
  let [darkMode, setDarkMode] = useState(false);

  const dark = {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    transition: "background-color 0.3s ease, color 0.3s ease",
    position: "relative",
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Headroom className="bg-Darker_purple">
        <Com.Navbar />
      </Headroom>

      <div className=" ">
        <Element name="LandingPage">
          <Pages.LandingPage />
        </Element>
        <Element name="AboutPage">
          <Pages.AboutPage />
        </Element>
        <Element name="ProjectPage">
          <Pages.ProjectPage />
        </Element>
        <Element name="ContactPage">
          <Pages.ContactPage />
        </Element>
      </div>
    </div>

    /*  <div className="app-container ">
      <Headroom style={navbarItemStyle} className="bg-Darker_purple">
        <Navbar />
      </Headroom>
      <div className="page-content">
        <Landing_page />
        <About_page />
        <Project_page />
        <Contact_page />
      </div>
    </div> */
  );
}
