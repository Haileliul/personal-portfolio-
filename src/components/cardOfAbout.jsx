import React from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Card_About(props) {
  const Contacts = {
    info: [
      "Phone: +1 123 456 7890",
      "Email:  example@example.com",
      "Address: 123 Main St, City, State, Zip",
    ],
    Social_Media: {
      Gmail: "hailetechlover@gmail.com",
      Telegram: "",
      linkedIn: "",
    },
  };

  return (
    <div
      className=" 
  glass-container h-fit shadow-2xl px-2 py-2 rounded-md"
    >
      <div className="w-[300px] h-[400px] bg-acitive">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex w-full  justify-evenly my-2 text-3xl">
        <a href={Contacts["Social_Media"]["Gmail"]}>
          <SiGmail className="hover:text-acitive hover:text-4xl" />
        </a>
        <a href={Contacts["Social_Media"]["Telegram"]}>
          <FaTelegram className="hover:text-acitive hover:text-4xl" />
        </a>
        <a href={Contacts["Social_Media"]["linkedIn"]}>
          <FaLinkedin className="hover:text-acitive hover:text-4xl" />
        </a>
      </div>
    </div>
  );
}

export default Card_About;
