import React from "react";
import InputField from "./users/input";
import UserItem from "./users/userItem";

const User = (props) => {
  
  let toDo = props.info.map((e) => <UserItem avatar={e.avatar} name={e.name} url={e.url} />);
  return (
    <>
      <div className=" min-h-screen bg-amber-100 dark:bg-slate-700 ">
        <div className="">
          <InputField />
        </div>
        {toDo}
      </div>
    </>
  );
};
export default User;
