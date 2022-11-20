import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <>
      <NavLink to={"/" + props.url}>
        <div className="pl-4 bg-amber-100 hover:bg-amber-200 ease-out duration-200 cursor-pointer dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:bg-blue-400">
          <div className=" flex py-3 items-center">
            <div className=" w-12 pr-3">
              <img className=" rounded-full" src={props.avatar} alt="" />
            </div>
            <div>{props.name}</div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export { User };
