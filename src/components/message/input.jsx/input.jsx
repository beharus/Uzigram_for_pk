import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { createRef } from "react";
const Input = (props) => {

  let newPost = React.createRef()
debugger
  let addPost = () => {
    let message = newPost.current.value;
    props.newPostElement(message)
    newPost.current.value = ''
  }

  return (
    <>
      <div className=" bg-amber-100 dark:bg-slate-700 h-14 border-l-2 border-amber-600 dark:border-slate-900 mb-0 flex">
        <input
          ref={newPost}
          className=" bg-amber-50  w-full border-0 border-r-2 dark:border-slate-200 dark:bg-transparent text-amber-500 px-4 py-4 dark:text-white outline-0"
          type="text"
          placeholder="write the message"
        />
        <button onClick={addPost} className=" p-3 px-4">
        <FontAwesomeIcon className=" text-amber-500 dark:text-white" icon={faEnvelope} />
        </button>
      </div>
    </>
  );
};

export { Input };
