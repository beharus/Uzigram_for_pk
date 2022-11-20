import React from "react";

const MessageItem = (props) => {
  return (
    <>
      <div className=" flex items-end font-firecode dark:text-white text-black px-4 py-3">
        <div className=" w-12 pr-3">
          <img className=" rounded-full" src={props.avatar} alt="" />
        </div>
        <div className="dark:bg-slate-600 bg-amber-300 rounded-xl rounded-bl-none px-4 py-3">
            {props.message}
        </div>
      </div>
    </>
  );
};
export default MessageItem;
