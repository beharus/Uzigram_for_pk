import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Message from "./components/message/message";
import Sidebar from "./components/sidebar/Sidebar";
import { Users } from "./components/user/users";

function App(props) {
  return (
    <BrowserRouter>
      <div className="fixed left-0 top-0 grid grid-cols-[80px_90vw] sm:grid-cols-[80px_320px_1fr] lg:grid-cols-[80px_400px_1fr] font-firecode">
        <div className="">
          <Sidebar state={props.state.sidebar} />
        </div>
        <div className="">
          <Users state={props.state.users} />
        </div>
      </div>
        <div className="sm:grid hidden pl-[80px] sm:pl-[400px] lg:pl-[480px] bg-light-bg w-auto min-h-screen dark:bg-dark-bg">
          <Message state={props.state} />
        </div>
    </BrowserRouter>
  );
}

export default App;
