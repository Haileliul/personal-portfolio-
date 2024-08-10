import React, { useState } from "react";
import Images from "../assets";
import Com from "../components";
import Pages from "../pages";
import { initTabs, Tabs } from "flowbite";
// import { Tab } from "@headlessui/react";

const aboutPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    { name: "Skill", content: "Skills Content" },
    { name: "Experience", content: "Experience Content" },
    { name: "Education", content: "Education Content" },
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
              <p className="text-lg font-Poppins_SemiBold ">About Me</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="mt-5">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="default-styled-tab"
                  data-tabs-toggle="#default-styled-tab-content"
                  data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                  data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg"
                      id="profile-styled-tab"
                      data-tabs-target="#styled-profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Skill
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      id="dashboard-styled-tab"
                      data-tabs-target="#styled-dashboard"
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Experiance
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      id="settings-styled-tab"
                      data-tabs-target="#styled-settings"
                      type="button"
                      role="tab"
                      aria-controls="settings"
                      aria-selected="false"
                    >
                      Education
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      id="contacts-styled-tab"
                      data-tabs-target="#styled-contacts"
                      type="button"
                      role="tab"
                      aria-controls="contacts"
                      aria-selected="false"
                    >
                      Contacts
                    </button>
                  </li>
                </ul>
              </div>
              <div id="default-styled-tab-content">
                <div
                  className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="styled-profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <Pages.SkillPage />
                </div>
                <div
                  className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="styled-dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <Pages.ExperiancePage />
                </div>
                <div
                  className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="styled-settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
                  <Pages.EducationPage />
                </div>
                <div
                  className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="styled-contacts"
                  role="tabpanel"
                  aria-labelledby="contacts-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Contacts tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
              </div>

              <ul className="inline-flex gap-20 text-lg font-Poppins_Medium">
                {/* <Link to={"/skill"}>Skill</Link>
                <Link to={"/experiance"}>Experiance</Link>
                <Link to={"/education"}>Education</Link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
