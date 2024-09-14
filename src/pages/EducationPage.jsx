import React from "react";
import Com from "../components";
import Data from "../utils/data";

const EducationPage = () => {
  return (
    <div>
      <Com.TimeLIne data={Data.Education} isEducation={true} />
    </div>
  );
};

export default EducationPage;
