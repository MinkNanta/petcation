import React, { useRef, useState } from 'react';
import defaultPhotoPic from '../../assets/img/defaultProtoPic.png';

import MenuList from '../../common/MenuList';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function SidebarProfile() {
  const { userId } = useParams();

  const profileRef = useRef(null);
  const { user, userPic, setUserPic } = useAuth();

  return (
    <div className="">
      <div className="text-center ">
        <div className="my-4 space-y-2 items-center ">
          <div className="w-[212px] h-[212px] mx-auto rounded-full overflow-hidden">
            <img
              onClick={() => profileRef.current.click()}
              className="w-full h-full object-cover"
              src={
                userPic
                  ? URL.createObjectURL(userPic)
                  : user?.userPic || defaultPhotoPic
              }
              // src={user?.userPic || defaultPhotoPic}
              alt=""
            />
            <input
              ref={profileRef}
              // className="hidden"
              onChange={(e) => setUserPic(e.target.files[0])}
              type="file"
            />
          </div>
          <button className="pt-4" onClick={() => profileRef.current.click()}>
            Edit profile
          </button>
        </div>
      </div>
      <div className="divider"></div>

      <div className="">
        <MenuList title="Booking list" to="/booking/list" />
        {/* <MenuList title="History" to="/" /> */}
        <MenuList title="Information" to="/profile" />
        <MenuList title="Pet Information" to="/profile/profilepet" />
      </div>
    </div>
  );
}

export default SidebarProfile;
