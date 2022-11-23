import { User } from "./user/user";

const Channels = (props) => {
  let AllInfo = props.state.map((elements) => (
    <User url={elements.url} avatar={elements.avatar} name={elements.name} />
  ));
  return <>{AllInfo}</>;
};

export { Channels };
