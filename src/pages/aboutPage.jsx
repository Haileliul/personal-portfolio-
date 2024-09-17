import React, { useState } from "react";
import Images from "../assets";
import Com from "../components";
import Pages from "../pages";

const aboutPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    { name: "Skill", component: <Pages.SkillPage /> },
    { name: "Experience", component: <Pages.ExperiancePage /> },
    { name: "Education", component: <Pages.EducationPage /> },
  ];

  return (
    <div className="container">
      <div className=" bg-neutral_tow grid grid-cols-6" id="about">
        <div className="col-span-2 w-full h-full sm:hidden xsm:hidden md:inline-flex lg:inline-flex md:justify-center md:items-center lg:justify-center lg:items-center">
          <Com.CardOfabout
            img={Images.I5}
            title="haha project"
            route="/gagapage"
          />
        </div>

        <div className=" md:col-span-4 lg:col-span-4 sm:col-span-6   xsm:col-span-6  w-full h-full ">
          <div className="px-10 py-10">
            <div>
              <p className="text-3xl font-Poppins_SemiBold mb-5 ">About Me</p>
              <p>
                Hello, I'm Haileliul Baye 👋, a passionate and ambitious
                software engineer with a diverse set of skills. I specialize in
                MERN stack development 💻, Flutter mobile app creation 📱,
                machine learning 🤖, AI, and UI/UX design 🎨. Currently pursuing
                a BSc in Software Engineering from Bahir Dar University, I have
                built a strong foundation through both education and hands-on
                experience. I’ve worked with various technologies, from creating
                cross-platform mobile apps to full-stack web applications, and
                I’m always eager to learn and explore emerging technologies 🚀.
                As a co-founder of Devssinia Software Company and a contributor
                to projects like INSA Cyber Talent, I am dedicated to solving
                real-world problems with innovative digital solutions 🌍.
              </p>
            </div>
            <div className="mt-5">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  role="tablist"
                >
                  {tabs.map((tab, index) => (
                    <li key={index} className="me-2" role="presentation">
                      <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${
                          selectedIndex === index
                            ? "text-purple-600 border-purple-600"
                            : "hover:text-gray-600 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedIndex(index)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                {/* Display the selected tab content */}
                {tabs[selectedIndex].component}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
