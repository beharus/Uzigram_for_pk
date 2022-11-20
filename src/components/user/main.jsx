import { Outlet } from "react-router-dom";
import InputField from "./components/input";

const Mains = () => {
  return (
    <>
    <div className=" min-h-screen bg-amber-100 dark:bg-slate-700 ">
      <div>
        <InputField />
      </div>
      <Outlet />
      </div>
    </>
  );
};

export { Mains };
