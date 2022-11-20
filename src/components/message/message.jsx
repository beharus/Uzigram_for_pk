import React from "react";
import MessageItem from "./messageItem/messageItem";

const Message = (props) => {
    let message = props.message.map((e) => <MessageItem avatar={e.avatar} message={e.message} />);
    return(
        <>
        <div className="">
            {message}
        </div>
        </>
    )
}
export default Message