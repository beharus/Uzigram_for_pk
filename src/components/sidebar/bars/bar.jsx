import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Bar = (props) => {
  return (
    <>
      <div className=" font-firecode flex flex-col justify-center dark:focus:dark:bg-slate-700 cursor-pointer px-2 py-3 focus:bg-amber-700 focus:text-amber-400 dark:hover:bg-slate-700 dark:hover:text-slate-50 dark:focus:bg-slate-700 dark:focus:text-slate-50 dark:text-slate-400 hover:bg-amber-700 hover:text-amber-400 duration-200 ease-out w-full h-18">
        <NavLink to={props.url}>
          <FontAwesomeIcon icon={faMessage} className=" text-xl pb-1" />
          <p>{props.message}</p>
        </NavLink>
      </div>
    </>
  );
};
export default Bar;
