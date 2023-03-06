import React from "react";
import { MdOutlineDashboardCustomize as Dashboard } from "react-icons/md";
import { MdOutlineManageAccounts as UserManagement } from "react-icons/md";
import { Icon } from "@iconify/react";
import { CgUserList as DeviceList } from "react-icons/cg";
import SidebarItem from "./SidebarItem";

const SidebarItemList = (props) => {
  return (
    <div>
      <SidebarItem
        position="pt-[18px]"
        icon={<Dashboard />}
        title={props.titleDashboard}
        active={props.active}
      />
      <SidebarItem
        position="mt-[18px]"
        icon={<Icon icon="carbon:scatter-matrix" />}
        title={props.titleMatrix}
      />
      <SidebarItem
        position="mt-[18px]"
        icon={<DeviceList />}
        title={props.titleDeviceList}
      />
      <SidebarItem
        position="mt-[18px]"
        icon={<Icon icon="mdi:format-list-group" />}
        title={props.titleGroupList}
      />
      <SidebarItem
        position="mt-[18px]"
        icon={<UserManagement />}
        title={props.titleUserManagement}
      />
      <div className="absolute bottom-5">
        <SidebarItem
          position="mt-[18px]"
          icon={<Icon icon="mdi:logout" />}
          title={props.titleLogout}
        />
      </div>
    </div>
  );
};

export default SidebarItemList;
