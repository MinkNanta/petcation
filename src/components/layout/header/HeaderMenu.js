import {
  CalendarIcon,
  HomeIcon,
  MenuAlt1Icon,
  PresentationChartBarIcon,
  UserIcon,
} from '@heroicons/react/outline';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultPhotoPic from '../../../assets/img/defaultProtoPic.png';
import MenuIcon from '../../../common/MenuIcon';
import { useAuth } from '../../../contexts/AuthContext';
import LoginForm from '../auth/LoginForm';
import Logout from '../auth/Logout';
import Register from '../auth/Register';

export default function HeaderMenu({ className }) {
  const { user, logout } = useAuth();
  // const user = true;
  // const user = false;
  const [active, setActive] = useState(false);
  return (
    <div>
      {user ? (
        <>
          <div
            className="dropdown dropdown-end"
            onClick={() => setActive(!active)}
          >
            <label tabIndex="0">
              <div className="flex px-3 py-2 bg-gray-100 rounded-full gap-1">
                <img
                  src={user?.userPic || defaultPhotoPic}
                  alt="pic"
                  className="w-6 h-6 rounded-full text-gray-700"
                />
                <p>
                  {user?.firstName
                    ? user?.firstName
                    : user.email?.split('@')[0]
                    ? user.uId?.split('@')[0]
                    : 'Anonymous'}
                </p>
                {/* <MenuAlt1Icon className="w-5 h-5" /> */}
              </div>
            </label>
            {active && (
              <div
                tabIndex="0"
                className="dropdown-content menu shadow-2xl rounded-3xl w-52 bg-white p-4 text-gray-500 mt-2"
              >
                <MenuIcon icon={<UserIcon />} to="/profile" title="Profile" />
                <MenuIcon
                  icon={<CalendarIcon />}
                  to="/booking/list"
                  title="Booking list"
                />
                <MenuIcon icon={<HomeIcon />} to="/house" title="My house" />

                <div className="divider"></div>

                <Logout />
              </div>
            )}
          </div>
        </>
      ) : (
        <div
          className={
            className
              ? className
              : 'flex justify-center items-center gap-2 rounded-3xl text-white w-full'
          }
        >
          <Link
            to="/house/main"
            className="  hover:bg-gray-50/20 px-4  py-2 rounded-3xl"
          >
            Become a Host
          </Link>
          <div className="  hover:bg-gray-50/20 px-4  py-2 rounded-3xl ">
            <Register />
          </div>
          <div className="  hover:bg-gray-50/20 px-4  py-2 rounded-3xl ">
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
}
