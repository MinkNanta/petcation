import React, { useEffect, useRef, useState } from 'react';
import defaultPhotoPic from '../../assets/img/defaultProtoPic.png';

import MenuList from '../../common/MenuList';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { updateUser } from '../../api/user';
import Spinner from '../../common/Spinner';
import { useError } from '../../contexts/ErrorContext';

function SidebarProfile() {
  const { userId } = useParams();

  const profileRef = useRef(null);
  const { user, userPic, setUserPic } = useAuth();
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oldValue, setOldValue] = useState('');
  const [fetch, setFetch] = useState(false);
  const { setError, setFeedback } = useError();

  const handleChangePhoto = (e) => {
    setChange((p) => !p);
    setUserPic(e.target.files[0]);
  };

  const handleChangeCancel = () => {
    setFetch((p) => !p);
    setChange((p) => !p);
    setUserPic('');
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
      setFeedback('Your Photo Updated');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="text-center bg-gray-100 px-6 py-6 rounded-3xl">
      <div className=" ">
        {loading && <Spinner />}

        <div className="my-4 space-y-2 items-center  ">
          <div>
            <div className=" rounded-full mx-auto h-[120px] w-[120px]  overflow-hidden sm:w-[212px] sm:h-[212px]">
              <img
                onClick={() => profileRef.current.click()}
                className="w-full h-full object-cover object-center"
                src={
                  userPic
                    ? URL.createObjectURL(userPic)
                    : user?.userPic || defaultPhotoPic
                }
                alt="userPhoto"
              />
            </div>
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
              onClick={() => handleChangeCancel()}
            >
              Cancel
            </button>
            <button
              className="btn-text-line"
              onClick={() => {
                handleSubmitPhoto();
              }}
            >
              Save Change
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
