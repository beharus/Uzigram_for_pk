import { User } from "./user/user";

const All = (props) => {
  let PersonalInfo = props.state.personals.map((elements) => (
    <User url={elements.url} avatar={elements.avatar} name={elements.name} />
  ));
  let GroupsInfo = props.state.groups.map((elements) => (
    <User url={elements.url} avatar={elements.avatar} name={elements.name} />
  ));
  let ChannelsInfo = props.state.channels.map((elements) => (
    <User url={elements.url} avatar={elements.avatar} name={elements.name} />
  ));

  return (
    <>
      <div className=" p-0 m-0">
        {PersonalInfo}{GroupsInfo}{ChannelsInfo}
      </div>
    </>
  );
};

export { All };
