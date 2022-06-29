import React, { useRef, useState } from 'react';
import defaultPhotoPic from '../../assets/img/defaultProtoPic.png';

import MenuList from '../../common/MenuList';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { updateUser } from '../../api/user';
import Spinner from '../../common/Spinner';

function SidebarProfile() {
  const { userId } = useParams();

  const profileRef = useRef(null);
  const { user, userPic, setUserPic } = useAuth();
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangePhoto = (e) => {
    setChange((p) => !p);
    setUserPic(e.target.files[0]);
  };

  const handleSubmitPhoto = async () => {
    try {
      if (!userPic) {
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append('userPic', userPic);
      const res = await updateUser(formData);
      setChange(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="">
      <div className="text-center ">
        {loading && <Spinner />}

        <div className="my-4 space-y-2 items-center ">
          <div className="rounded-full overflow-hidden  max-h-[212px] max-w-[212px] mx-auto">
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
              className="hidden"
              onChange={(e) => handleChangePhoto(e)}
              type="file"
            />
          </div>
        </div>
        {change ? (
          <div className="w-full flex gap-4 justify-between">
            <button
              className="btn-text-line"
              onClick={() => {
                setChange(false);
                setUserPic(user?.userPic);
              }}
            >
              Cancel
            </button>
            <button
              className="btn-text-line"
              onClick={() => {
                handleSubmitPhoto();
              }}
            >
              save
            </button>
          </div>
        ) : (
          <button
            className="btn-text-line"
            onClick={() => profileRef.current.click()}
          >
            Edit profile
          </button>
        )}
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
