import { User } from "./user/user";

const Personals = (props) => {
  let PersonalInfo = props.state.map((elements) => (
    <User url={'personal/'+elements.url} avatar={elements.avatar} name = {elements.name} />
  ));
  return (
    <>
    {PersonalInfo}
    </>
  );
};

export { Personals };
