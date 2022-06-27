import {
  CalendarIcon,
  HomeIcon,
  MenuAlt1Icon,
  PresentationChartBarIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/defaultProtoPic.png';
import MenuIcon from '../../../common/MenuIcon';
import { useAuth } from '../../../contexts/AuthContext';
import LoginForm from '../auth/LoginForm';
import Logout from '../auth/Logout';
import Register from '../auth/Register';

export default function HeaderMenu() {
  const { user, logout } = useAuth();
  // const user = true;
  // const user = false;
  const [active, setActive] = useState(false);
  return (
    <div className="flex gap-4  items-center text-gray-600">
      {user ? (
        <>
          <div
            className="dropdown dropdown-end"
            onClick={() => setActive(!active)}
          >
            <label tabIndex="0">
              <div className="flex p-2 bg-gray-100 rounded-full gap-1">
                <img
                  src={profile}
                  alt="pic"
                  className="w-5 h-5 rounded-full text-gray-700"
                />
                <MenuAlt1Icon className="w-5 h-5" />
              </div>
            </label>
            {active && (
              <div
                tabIndex="0"
                className="dropdown-content menu shadow rounded-box w-52 bg-white p-4 text-gray-500"
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
        <div className="flex justify-center items-center gap-6 bg-white/50 px-6 rounded-3xl">
          <Link
            to="/house/main"
            className=" text-gray-600 hover:bg-gray-200/50 py-3 rounded-2xl"
          >
            Become a Host
          </Link>
          <Register />
          <LoginForm />
        </div>
      )}
    </div>
  );
}
