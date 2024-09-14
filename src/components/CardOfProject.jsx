import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { useState } from "react";

function Card_project({ img, title, link, githubLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white h-fit hover:shadow-b-2xl px-5 py-3 rounded-md border-gray-200 hover:border-2 transition-transform duration-300 hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-[200px] h-[170px] overflow-hidden"
      >
        <img
          src={img}
          alt=""
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        />
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-white p-1 rounded-full z-10"
        >
          <FaGithub className="text-gray-700" />
        </a>
      </a>
      <div className="pt-2">
        <h5 className="text-lg font-bold tracking-tight text-gray-700 dark:text-white py-1">
          {title}
        </h5>
        <div className="w-[200px]">
          <p className="font-normal text-gray-500 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card_project;
