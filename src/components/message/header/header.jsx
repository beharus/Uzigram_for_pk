import React from "react";

const Header = (props) => {
  let toDo = props.info.map((e) => (
    <UserItem avatar={e.avatar} name={e.name} url={e.url} />
  ));
  return (
    <>
      <div>
        <div>{toDo}</div>
      </div>
    </>
  );
};

export default Header;
