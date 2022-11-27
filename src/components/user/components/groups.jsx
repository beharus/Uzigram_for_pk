import { User } from "./user/user";

const Groups = (props) => {
  let AllInfo = props.state.map((elements) => (
    <User url={'groups/'+elements.url} avatar={elements.avatar} name = {elements.name} />
  ));
  return (
    <>
    {AllInfo}
    </>
  );
};

export { Groups };
