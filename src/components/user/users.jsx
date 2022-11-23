import { Route, Routes } from "react-router-dom";
import { All } from "./components/all";
import { Channels } from "./components/channels";
import { Groups } from "./components/groups";
import { Personals } from "./components/personals";
import { Mains } from "./main";

const Users = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mains />}>
          <Route index element={<All state = {props.state.user } />} />
          <Route path="personal" element={<Personals state = {props.state.user.personals }  />} />
          <Route path="groups" element={<Groups state = {props.state.user.groups }  />} />
          <Route path="channels" element={<Channels state = {props.state.user.channels }  />} />
        </Route>
      </Routes>
    </>
  );
};

export { Users };
