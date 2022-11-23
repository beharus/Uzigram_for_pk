import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderItem = (props) => {
  return (
    <>
      <div className="text-xl flex px-4 justify-between items-center">
        <div className=" flex items-center">
          <div className="block sm:hidden">&lt;-</div>
          <img className=" mr-3 rounded-full block sm:hidden w-10" src={props.url} alt="" />
          
          <span className=" font-semibold">{props.name}</span>
        </div>
        <div className="grid gap-4 grid-cols-2">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default HeaderItem;
