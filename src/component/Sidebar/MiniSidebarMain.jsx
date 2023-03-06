import React, { useState } from "react";
import SidebarItemList from "./SidebarItemList";

const MiniSidebarMain = (props) => {
  return (
    <div className="w-[48px] h-screen bg-[#145488] mt-[8px] z-50">
      <div
        className="flex items-center justify-center bg-white"
        onClick={props.toggleShow}
      >
        <img
          src="/Sidebar/logonotexpand.svg"
          alt=""
          className="w-[40px] h-[43px]"
        />
      </div>
      <SidebarItemList active="miniactive" />
    </div>
  );
};

export default MiniSidebarMain;
