import React from "react";
import { MdSupervisorAccount as Account } from "react-icons/md";
import { ImSearch as Search } from "react-icons/im";

const Navbar = (props) => {
  return (
    <div className="flex ml-[24px] h-[43px]">
      <div className={`flex items-center ${props.navbar}`}>
        {props.icon}
        <p className="ml-[5px]">{props.title}</p>
      </div>
      <div className="flex space-x-10">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-[120px] h-[30px] rounded-[15px] p-4 border-2 border-black focus:outline-none mr-[8px]"
          />
          <Search />
        </div>
        <div className="flex items-center">
          <Account className="mr-3" />
          <p>UserTNIAL</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
