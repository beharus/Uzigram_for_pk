import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useDarkMode from "../../hook/useDarkMode";
import Bar from "./bars/bar";

const Sidebar = (props) => {
  const [colorTheme, setTheme] = useDarkMode();
  let SidebarInfo = props.state.infoSidebar.map((elements) => (
    <Bar message={elements.message} url={elements.url} />
  ));

  return (
    <>
      <div className=" z-50 w-20 h-screen dark:bg-slate-800 dark:text-white m-0 flex flex-col items-center text-xs text-center bg-amber-500 text-amber-100  duration-300 ease-out transition ">
        <FontAwesomeIcon icon={faBars} className=" text-xl py-5  mb-10" />

        {SidebarInfo}
        <div className=" cursor-pointer" onClick={() => setTheme(colorTheme)}>
          {colorTheme === "light" ? (
            <FontAwesomeIcon
              icon={faSun}
              className=" sun  text-xl py-5  mb-10"
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              className=" moon  text-xl py-5  mb-10"
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
