import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarItemList from "./SidebarItemList";

const SidebarMain = (props) => {
  return (
    <div className="w-[200px] h-screen bg-[#145488] mt-[8px] z-50">
      <div
        className="flex items-center justify-center bg-white h-[43px]"
        onClick={props.toggleShow}
      >
        <img
          src="/Sidebar/logoexpand.svg"
          alt=""
          className="w-[150px] h-[27.39px] mb-[8px]"
        />
        <GiHamburgerMenu className="ml-[13px]" />
      </div>
      <SidebarItemList
        active="active"
        titleDashboard="Dashboard"
        titleMatrix="Communication Matrix"
        titleDeviceList="Device List"
        titleGroupList="Group List"
        titleUserManagement="User Management"
        titleLogout="Logout"
      />
    </div>
  );
};

export default SidebarMain;
