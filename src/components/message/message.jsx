import React from "react";
import { HeaderElement } from "./header/headerElement";
import { Input } from "./input.jsx/input";
import MessageItem from "./messageItem/messageItem";

const Message = (props) => {
  let message = props.state.messages.message.map((e) => (
    <MessageItem avatar={e.avatar} message={e.message} />
  ));
  debugger
  return (
    <>
    <HeaderElement />
      <div className=" self-end">{message}<Input newPostElement={props.newPostElement} /></div>
      
    </>
  );
};
export default Message;
