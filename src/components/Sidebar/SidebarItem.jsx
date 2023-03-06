import React from "react";

const SidebarItem = (props) => {
  return (
    <div
      className={`flex items-center text-white relative z-10 ${props.position}`}
    >
      <div className="mx-[5px]">{props.icon}</div>
      <p>{props.title}</p>
      <div className={props.active}></div>
    </div>
  );
};

export default SidebarItem;
