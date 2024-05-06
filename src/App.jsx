import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";

import Landing_page from "./pages/landingPage";
import About_page from "./pages/aboutPage";
import Project_page from "./pages/projectPage";
import Contact_page from "./pages/contactPage";
import "./index.css";

export default function App() {
  let [loading, setLoading] = useState(false);
  const navbarItemStyle = {
    padding: "10px 20px",
    // margin: "0 10px",
    // borderRadius: "5px",
    backgroundColor: "#000000",
    color: "#fff",
    textDecoration: "none",
    opacity: 0.4,
  };

  return (
    <div className="app-container ">
      <Headroom style={navbarItemStyle} className="bg-Darker_purple">
        <Navbar />
      </Headroom>
      <div className="page-content">
        <Landing_page />
        <About_page />
        <Project_page />
        <Contact_page />
      </div>
    </div>
  );
}
