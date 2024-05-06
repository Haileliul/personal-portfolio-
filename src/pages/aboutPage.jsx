import React from "react";
import Images from "../assets";

const aboutPage = () => {
  return (
    <div className="w-full h-screen bg-neutral_tow grid grid-cols-6" id="about">
      <div className="col-span-2 w-full h-full sm:hidden xsm:hidden md:inline-flex lg:inline-flex md:justify-center md:items-center lg:justify-center lg:items-center">
        <div className="w-full h-fit ml-5 relative">
          <div className=" w-[100px] h-[100px] z-0 left-0 "></div>
          <img
            src={Images.I5}
            alt="This is my image"
            className="relative bottom-14 left-10 z-20 w-full md:w-[170px] md:h-[200px] lg:w-[400px] lg:h-[400px]"
          />
          <div className="relative bg-Brighter_purple w-[100px] h-[100px] bottom-28 left-36 z-5"></div>
        </div>
      </div>

      <div className=" md:col-span-4 lg:col-span-4 sm:col-span-6   xsm:col-span-6  w-full h-full ">
        <div className="px-10 py-10">
          <div>
            <p className="text-lg font-Poppins_SemiBold ">About Me</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="mt-5">
            <ul className="inline-flex gap-20 text-lg font-Poppins_Medium">
              <li>Skill</li>
              <li>Experiance</li>
              <li>Education</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
