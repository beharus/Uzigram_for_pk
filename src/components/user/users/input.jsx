import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputField = () => {
  return (
    <>
      <div className=" top-0 px-4 py-2 dark:bg-slate-700 bg-amber-100">
        <form className=" w-[90%] justify-between sm:w-[100%] flex items-center rounded outline-none dark:focus:dark:bg-slate-500  focus:text-amber-400 dark:hover:bg-slate-500 dark:bg-slate-500 dark:hover:text-slate-50 dark:focus:bg-slate-500 dark:focus:text-slate-50 dark:text-slate-400 hover:text-amber-400 text-amber-300 bg-amber-50 py-2 pl-4 px-2">
          <input
            className=" md:w-full font-firecode bg-transparent outline-none "
            type="text"
            value="Search"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </>
  );
};

export default InputField;
