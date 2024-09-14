import React from "react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Data from "../utils/data";

function Card_About(props) {
  return (
    <div
      className=" 
  glass-container h-fit shadow-2xl px-2 py-2 rounded-md"
    >
      <div className="w-[300px] h-[400px] bg-acitive">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex w-full  justify-evenly my-2 text-3xl">
        <a
          href={`mailto:${Data.Contacts["Social_Media"]["Gmail"]}`}
          target="_blank"
        >
          <SiGmail className="hover:text-acitive hover:text-4xl" />
        </a>
        <a href={Data.Contacts["Social_Media"]["Telegram"]} target="_blank">
          <FaTelegram className="hover:text-acitive hover:text-4xl" />
        </a>
        <a href={Data.Contacts["Social_Media"]["linkedIn"]} target="_blank">
          <FaLinkedin className="hover:text-acitive hover:text-4xl" />
        </a>
        <a href={Data.Contacts["Social_Media"]["github"]} target="_blank">
          <FaGithub className="hover:text-acitive hover:text-4xl" />
        </a>
      </div>
    </div>
  );
}

export default Card_About;
