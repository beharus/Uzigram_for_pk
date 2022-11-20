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
          <Route index element={<All />} />
          <Route path="personal" element={<Personals />} />
          <Route path="groups" element={<Groups />} />
          <Route path="channels" element={<Channels />} />
        </Route>
      </Routes>
    </>
  );
};

export { Users };
