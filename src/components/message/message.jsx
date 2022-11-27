import React from "react";
import { HeaderElement } from "./header/headerElement";
import { Input } from "./input.jsx/input";
import MessageItem from "./messageItem/messageItem";

const Message = (props) => {
  let message = props.state.messages.message.map((e) => (
    <MessageItem avatar={e.avatar} message={e.message} />
  ));
  debugger;
  return (
    <>
      <div className="pl-[80px] sm:pl-[400px] lg:pl-[480px] fixed w-full top-0 right-0">
        <HeaderElement />
      </div>
      <div className="pl-[80px] sm:pl-[400px] lg:pl-[480px] fixed w-full bottom-0 right-0">
        <Input newPostElement={props.newPostElement} />
      </div>
      <div className=" mb-14 self-end">{message}</div>
    </>
  );
};
export default Message;
