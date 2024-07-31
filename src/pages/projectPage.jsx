import React, { useState } from "react";
import Com from "../components";
import Image from "../assets";

const projectPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab_hundler = (index) => {
    setToggleState(index);
  };

  const projects = {
    web: [
      { img: Image.I1, title: "Web Project 1", route: "/webproject1" },
      { img: Image.I2, title: "Web Project 2", route: "/webproject2" },
      { img: Image.I1, title: "Web Project 1", route: "/webproject1" },
      { img: Image.I2, title: "Web Project 2", route: "/webproject2" },
      { img: Image.I1, title: "Web Project 1", route: "/webproject1" },
      { img: Image.I2, title: "Web Project 2", route: "/webproject2" },
    ],
    mobile: [
      { img: Image.I3, title: "Mobile Project 1", route: "/mobileproject1" },
      { img: Image.I4, title: "Mobile Project 2", route: "/mobileproject2" },
    ],
    others: [
      { img: Image.I5, title: "Other Project 1", route: "/otherproject1" },
      { img: Image.I6, title: "Other Project 2", route: "/otherproject2" },
    ],
  };

  let currentProjects;
  if (toggleState === 1) {
    currentProjects = projects.web;
  } else if (toggleState === 2) {
    currentProjects = projects.mobile;
  } else {
    currentProjects = projects.others;
  }

  return (
    <div
      className="container bg-gradient-to-tr to-Blue_black from-Blue_black via-neutral_tow"
      id="projects"
    >
      <div className="flex flex-col inset-0 items-center text-neutral_tow">
        <p className="my-5 text-2xl text-Brighter_purple">Projects</p>
        <div className="flex flex-col px-10">
          <div className="w-[400px] h-[50px] flex self-center">
            {/* This is place where the tabs will be shown */}
            <button
              className={`flex-1 ${
                toggleState === 1 ? "bg-acitive" : "bg-Darker_purple"
              } rounded-l-3xl`}
              onClick={() => {
                toggleTab_hundler(1);
              }}
            >
              WebSite
            </button>
            <button
              className={`flex-1 ${
                toggleState === 2 ? "bg-acitive" : "bg-Darker_purple"
              }`}
              onClick={() => {
                toggleTab_hundler(2);
              }}
            >
              Mobile
            </button>
            <button
              className={`flex-1 ${
                toggleState === 3 ? "bg-acitive" : "bg-Darker_purple"
              } rounded-r-3xl`}
              onClick={() => {
                toggleTab_hundler(3);
              }}
            >
              Others
            </button>
          </div>
          <div className="max-w-screen max-h- flex flex-wrap gap-5 py-5 items-center justify-center">
            {currentProjects.map((project) => {
              return (
                <Com.CardOfpro
                  img={project.img}
                  title={project.title}
                  route={project.route}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectPage;
