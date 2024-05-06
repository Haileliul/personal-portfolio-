import React, { useState } from "react";

const projectPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab_hundler = (index) => {
    setToggleState(index);
  };

  const data = ["0", "1", "2", "3", "0", "1", "2", "3"];

  return (
    <div
      className="w-full h-screen bg-gradient-to-b to-neutral_tow   via-Blue_black  from-neutral_tow "
      id="projects"
    >
      <div className="w-full h-full flex flex-col  inset-0 items-center text-neutral_tow">
        <p className="  my-5 text-2xl">Projects</p>
        <div className="w-full h-full flex flex-col px-10">
          <div className="w-[400px] h-[50px] flex self-center ">
            {/* This is place where the tabs will been shown */}
            <button
              className={`  flex-1 ${
                toggleState == 1 ? "bg-orange" : "bg-Darker_purple"
              } rounded-l-3xl`}
              onClick={() => {
                toggleTab_hundler(1);
              }}
            >
              WebSite
            </button>
            <button
              className={`  flex-1 ${
                toggleState == 2 ? "bg-orange" : "bg-Darker_purple"
              }`}
              onClick={() => {
                toggleTab_hundler(2);
              }}
            >
              Mobile
            </button>
            <button
              className={`  flex-1 ${
                toggleState == 3 ? "bg-orange" : "bg-Darker_purple"
              } rounded-r-3xl`}
              onClick={() => {
                toggleTab_hundler(3);
              }}
            >
              Others
            </button>
          </div>
          <div className=" w-full h-full    my-5 grid lg:grid-cols-4  md: grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
            {data.map(() => {
              return (
                <div className=" lg:row-span-1 sm:row-span-2   bg-background col-span-1 mr-3 mb-3 shadow-md shadow-Brighter_purple rounded-md">
                  <p>This is me </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectPage;
