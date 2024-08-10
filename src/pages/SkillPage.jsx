import React from "react";

import { Progress } from "flowbite-react";

const SkillPage = () => {
  const Skill_Data = [
    {
      Skill_title: "HTML",
      persent: 65,
    },
    {
      Skill_title: "Java Script",
      persent: 85,
    },
    {
      Skill_title: "CSS",
      persent: 75,
    },
    {
      Skill_title: "React js",
      persent: 75,
    },
    {
      Skill_title: "React js",
      persent: 75,
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 gap-10  p-5 ">
      {Skill_Data.map((skil) => {
        return (
          <Progress
            progress={skil.persent}
            progressLabelPosition="inside"
            textLabel={skil.Skill_title}
            textLabelPosition="outside"
            size="lg"
            labelProgress
            labelText
            color="yellow"
          />
        );
      })}
    </div>
  );
};

export default SkillPage;
