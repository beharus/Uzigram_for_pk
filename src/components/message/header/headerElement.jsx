import state from "../../../state";
import HeaderItem from "./header-item/headerItem";

const HeaderElement = (props) => {
  return (
    <>
      <div className=" text-black dark:text-white font-firecode mt-0 dark:bg-slate-700 bg-amber-100 h-16 grid items-center border-l-2 border-amber-500 dark:border-slate-800">
        <HeaderItem name={state.users.user.channels[1].name} url={state.users.user.channels[1].avatar} />
      </div>
    </>
  );
};

export { HeaderElement };
