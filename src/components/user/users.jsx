import { Route, Routes } from "react-router-dom";
import { All } from "./components/all";
import { Channels } from "./components/channels";
import { Groups } from "./components/groups";
import { Personals } from "./components/personals";
import { Mains } from "./main";

const Users = (props) => {
  debugger
  return (
    <>
      <Routes>
        <Route path="/" element={<Mains />}>
          <Route index element={<All state = {props.state.user } />} />
          <Route path={"/:" + props.state.user.channels.url} element={<All state = {props.state.user } />} />
          <Route path="personal" element={<Personals state = {props.state.user.personals }  />} />
          <Route path={"personal/:" + props.state.user.channels.url} element={<Personals state = {props.state.user.personals }  />} />
          <Route path="groups" element={<Groups state = {props.state.user.groups }  />} />
          <Route path={"groups/:" + props.state.user.channels.url} element={<Groups state = {props.state.user.groups }  />} />
          <Route path="channels" element={<Channels state = {props.state.user.channels }  />} />
          <Route path={"channels/:" + props.state.user.channels.url} element={<Channels state = {props.state.user.channels }  />} />
        </Route>
      </Routes>
    </>
  );
};

export { Users };
