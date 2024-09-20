import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Card_project({ img, title, web_url, description, type, githubLink }) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to open the project link in a new tab when the card is clicked
  const handleCardClick = () => {
    window.open(web_url, "_blank", "noopener noreferrer");
  };

  // Function to open the GitHub link in a new tab and stop propagation
  const handleGithubClick = (e) => {
    e.stopPropagation(); // Prevents the card click event
    window.open(githubLink, "_blank", "noopener noreferrer");
  };

  return (
    <div
      className="relative bg-white h-fit hover:shadow-b-2xl px-5 py-3 rounded-md border-gray-200 hover:border-2 transition-transform duration-300 hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick} // Trigger the project link opening in a new tab
    >
      <div className="relative block w-[300px] h-[170px] overflow-hidden">
        {type !== "mobile" ? (
          <img
            src={img}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          />
        ) : (
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={web_url}
              loop={true}
              playing={true}
              light={true} // You can turn off the light mode if you want the video to play immediately
              muted={isHovered} // This ensures autoplay will work in most browsers
              width="100%"
              height="100%"
            />
          </div>
        )}

        {/* GitHub icon, clickable without triggering card click */}
        <a
          onClick={handleGithubClick} // Stop card click and open GitHub link
          className="absolute top-2 right-2 bg-white p-1 rounded-full z-10  hover:bg-acitive"
        >
          <FaGithub className="text-gray-700" />
        </a>
      </div>

      <div className="pt-2">
        <h5 className="text-lg font-bold tracking-tight text-gray-700 dark:text-white py-1">
          {title}
        </h5>
        <div className="w-[300px] ">
          <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card_project;
