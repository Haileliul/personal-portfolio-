import React, { useState } from "react";
import Com from "../components";
import Data from "../utils/data";

const projectPage = () => {
  const projects = Data.project;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab_hundler = (index) => {
    setToggleState(index);
  };

  // Function to filter projects based on the type
  const filterProjectsByType = (type) => {
    return projects.filter((project) => project.type === type);
  };

  // Usage based on toggleState
  let currentProjects;
  if (toggleState === 1) {
    currentProjects = filterProjectsByType("web");
  } else if (toggleState === 2) {
    currentProjects = filterProjectsByType("mobile");
  } else {
    currentProjects = filterProjectsByType("others");
  }
  return (
    <div className="container bg-gradient-to-tr  bg-gray-50" id="projects">
      {/*  <div className="flex flex-col inset-0 items-center text-neutral_tow ">
        <p className="my-5 text-2xl"></p>
        <p className="text-3xl font-Poppins_SemiBold mb-5  text-Brighter_purple">
          Projects
        </p>
        <div className="flex flex-col px-10 ">
          <div className="w-[400px] h-[50px] flex self-center mb-5">
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
        </div>
      </div> */}

      <div className="container bg-gradient-to-tr bg-gray-50" id="projects">
        <div className="flex flex-col inset-0 items-center text-neutral_tow">
          {/* Responsive heading */}
          <p className="my-5 text-base sm:text-2xl md:text-3xl lg:text-4xl">
            {/* Optional text content */}
          </p>
          {/* Responsive subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Poppins_SemiBold mb-5 text-Brighter_purple">
            Projects
          </p>
          <div className="flex flex-col px-4 sm:px-10">
            <div className="w-full sm:w-[400px] h-[50px] flex self-center mb-5">
              <button
                className={`flex-1 ${
                  toggleState === 1 ? "bg-acitive" : "bg-Darker_purple"
                } rounded-l-3xl text-sm sm:text-base md:text-lg`}
                onClick={() => {
                  toggleTab_hundler(1);
                }}
              >
                WebSite
              </button>
              <button
                className={`flex-1 ${
                  toggleState === 2 ? "bg-acitive" : "bg-Darker_purple"
                } text-sm sm:text-base md:text-lg`}
                onClick={() => {
                  toggleTab_hundler(2);
                }}
              >
                Mobile
              </button>
              <button
                className={`flex-1 ${
                  toggleState === 3 ? "bg-acitive" : "bg-Darker_purple"
                } rounded-r-3xl text-sm sm:text-base md:text-lg`}
                onClick={() => {
                  toggleTab_hundler(3);
                }}
              >
                Others
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen  flex flex-wrap gap-5 py-5 items-center justify-center bg-gray-50 mx-10">
        {currentProjects.map((project) => {
          return (
            <Com.CardOfpro
              img={project.img}
              title={project.title}
              web_url={project.web_url}
              githubLink={project.github_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default projectPage;
