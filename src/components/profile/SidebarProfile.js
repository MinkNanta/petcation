import React from "react";
import defaultProtoPic from "../../assets/img/defaultProtoPic.png";

import MenuList from "../../common/MenuList";

function SidebarProfile() {
  return (
    <div className="">
      <div className="text-center ">
        <div className="mt-1 items-center ">
          <div className="w-[212px] mx-auto">
            <img
              src={defaultProtoPic}
              alt=""
              className="rounded-full text-gray-700 w-full h-full object-cover "
            />
          </div>
          <p className="pt-4">Edit profile</p>
        </div>
      </div>
      <h4 className="text-2xl py-6 border-t-2">John Doe</h4>
      <div className="space-y-4">
        <MenuList title="Booking list" to="/" />
        <MenuList title="History" to="/" />
        <MenuList title="Information" to="/profile" />
        <MenuList title="Pet Information" to="/profile/profilepet" />
      </div>
    </div>
  );
}

export default SidebarProfile;
