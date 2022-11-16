import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Message from "./components/message/message";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./components/user/user";

function App(props) {
  return (
    <BrowserRouter>
      <div className="fixed left-0 top-0 grid grid-cols-[80px_90vw] sm:grid-cols-[80px_320px_1fr] lg:grid-cols-[80px_400px_1fr] font-firecode">
        <div className="">
          <Sidebar infoSidebar={props.infoSidebar} />
        </div>
        <div className="">
          <User info={props.info} />
        </div>
        <div className="sm:grid hidden bg-light-bg w-screen min-h-screen dark:bg-dark-bg items-end">
          <Message message = {props.message} />
        </div>
      </div>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
