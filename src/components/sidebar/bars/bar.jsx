import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Bar = (props) => {
  return (
    <>
      <NavLink to={props.url}>
        <div className=" w-20 font-firecode flex flex-col justify-center cursor-pointer px-2 py-3 focus:bg-amber-700 focus:text-amber-400 dark:active:bg-slate-500 active:bg-amber-900 focus:outline-nones dark:hover:bg-slate-700 dark:hover:text-slate-50 dark:focus-visible:bg-slate-700 dark:focus:text-slate-50 dark:text-slate-400 hover:bg-amber-700 hover:text-amber-400 duration-200 ease-out h-18">
          <FontAwesomeIcon icon={faMessage} className=" text-xl pb-1" />
          <p>{props.message}</p>
        </div>
      </NavLink>
    </>
  );
};
export default Bar;
