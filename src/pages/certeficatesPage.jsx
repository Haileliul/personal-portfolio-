import React, { useState } from "react";
import Com from "../components";
import Data from "../utils/data";

const certeficatePage = () => {
  const certeficates = Data.certeficate;

  return (
    <div
      className="container bg-gradient-to-tr  bg-white shadow-[0px_12px_30px_0px_rgba(16,24,40,0.1)]   "
      id="certeficate  "
    >
      <p className="text-3xl font-Poppins_SemiBold mb-5  text-Brighter_purple self-center pt-10">
        Certeficates
      </p>
      <div className="max-w-screen  flex flex-wrap gap-5 py-5 items-center justify-center bg-transparent mx-10 mb-20">
        {certeficates.map((certeficate) => {
          return (
            <Com.CardOfcerteficate
              key={certeficate.id}
              img={certeficate.img}
              title={certeficate.title}
              web_url={certeficate.web_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default certeficatePage;
