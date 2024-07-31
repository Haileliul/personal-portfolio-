import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import { useTypeWriter } from "react-type-writer";
import TypeWriterEffect from "react-typewriter-effect";

import Images from "../assets/index";

const LandingPage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine((engine) => {
      loadSlim(engine).then(() => {
        setInit(true);
      });
    });

    const handleScroll = () => {
      const displayHeightThreshold = 500;
      const shouldDisplayParticles = window.scrollY < displayHeightThreshold;
      setInit(shouldDisplayParticles);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="w-full h-[620px] flex flex-col justify-between overflow-hidden"
        id="home"
      >
        <div className=" relative h-full">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-Darker_purple   via-Blue_black  to-Brighter_purple ">
            {init && (
              <Particles
                id="tsparticles"
                options={{
                  clear: true,
                  pauseOnOutsideViewport: true,
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: false,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 100,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                }}
              />
            )}
            <div className="flex flex-col sm:flex-row h-full w-full justify-center items-center ">
              <div className=" w-full sm:w-1/2 h-5/6  flex flex-col items-center justify-center">
                <div className=" w-5/6 lg:py-10 lg:my-10 lg:pl-20 mt-20 mb-10  text-neutral_one">
                  <p className="font-Poppins_Medium ">Hello, It's Me</p>
                  <p className="text-white text-4xl font-Poppins_Regular my-1">
                    Haileliul Baye
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-Poppins_SemiBold ">And I'm a </p>

                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "Red Hat Display",
                        color: "#F27405",
                        fontWeight: 500,
                        fontSize: "1.5em",
                      }}
                      startDelay={2000}
                      cursorColor="#3F3D56"
                      multiText={[
                        "Full-stack Developer",
                        "Mobile App developer",
                        "Graphics Designer",
                        "UI/UX Designer",
                        "Software Enginner",
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={30}
                    />
                  </div>

                  <p className="hidden lg:inline-block font-thin  text-sm my-1">
                    a versatile professional skilled in mobile app development,
                    full-stack development, and UI/UX design. With a background
                    in AI, I bring a unique perspective to creating innovative
                    and user-centric solutions.
                  </p>

                  <button
                    className="bg-acitive hover:bg-Darker_purple bg-orange shadow-lg  shadow-deep_green  rounded-lg px-5 py-2 mt-2 text-neutral_tow  text-sm relative z-50"
                    onClick={() => {
                      console.log("The Button has been clicked");
                    }}
                  >
                    Download CV
                  </button>
                </div>
              </div>

              {/*  <div className="bg-green-900 w-full sm:w-1/2 h-full flex justify-center items-center">
              <div>
              <div className="sun-horizon"></div>
              </div>
              <img
                src={Images.I4}
                alt=""
                className="object-cover h-5/6 sm:max-h-5/6 flex-1"
              />
            </div> */}
              <div className="relative w-full sm:w-1/2 h-full flex justify-center items-center  opacity-90">
                {/* Horizon-like element */}
                <div className="absolute inset-0 bg-gradient-to-t  to-yellow-50"></div>

                {/* Image container */}
                <div className="relative w-full h-full flex items-center justify-center ">
                  <img
                    src={Images.I4}
                    alt=""
                    className="object-contain  lg:h-5/6 md:h-5/6 xsm:max-h-3/4  sm:max-h-3/4 flex-1 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative h-auto w-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full z-10"
          >
            <path
              fill="#eeeeee"
              stroke="#eeeeee" // Change the stroke color to red
              strokeWidth="2"
              d="M0,256L40,234.7C80,213,160,171,240,160C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,176C1040,192,1120,192,1200,170.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
