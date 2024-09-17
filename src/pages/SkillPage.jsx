import React from "react";
import { Progress } from "flowbite-react";
import Data from "../utils/data";

const SkillPage = () => {
  const data = Data.Skill;

  return (
    <div className="w-full grid grid-cols-2 gap-10 p-5">
      {data.map((skill, index) => {
        return (
          <div key={index}>
            <div className="relative w-full pt-2">
              <div className="flex items-start">
                <span
                  className="absolute bottom-0 mb-5 lg:mb-7 -translate-x-1/2  w-5 h-5 lg:w-10 lg:h-10 bg-white shadow-[0px_12px_30px_0px_rgba(16,24,40,0.1)] rounded-full px-3.5 py-2 text-gray-800 text-xs font-medium flex justify-center items-center after:absolute after:bg-white after:flex after:bottom-[-5px] after:left-1/2 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45"
                  style={{ left: `${skill.percent}%` }}
                >
                  {skill.percent}%
                </span>
                <span class="text-base font-medium text-Blue_black dark:text-white ">
                  {skill.Skill_title}
                </span>
              </div>

              <div className="relative flex w-full h-2 lg:h-4 overflow-hidden rounded-3xl bg-gray-200">
                <div
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill.percent}%` }}
                  className="flex h-full items-center justify-center bg-acitive2 opacity-70 text-white rounded-3xl"
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillPage;
