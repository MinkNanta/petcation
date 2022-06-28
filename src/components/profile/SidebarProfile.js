import React, { useState } from 'react';
import defaultProtoPic from '../../assets/img/defaultProtoPic.png';

import MenuList from '../../common/MenuList';
import { useParams } from 'react-router-dom';

function SidebarProfile() {
  const { userId } = useParams();
  const [userPic, setUserPic] = useState(null);
  return (
    <div className="">
      <div className="text-center ">
        <div className="mt-1 items-center ">
          <div className="w-[212px] mx-auto">
            <img
              className="rounded-full text-gray-700 w-full h-full object-cover "
              src={defaultProtoPic}
              alt=""
            />
            <input
              className=""
              onChange={(e) => setUserPic(e.target.files[0])}
              type="file"
            />
          </div>
          <button className="pt-4">Edit profile</button>
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
