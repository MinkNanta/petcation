import { MenuIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../assets/img/defaultProtoPic.png";
import Register from "../auth/Register";

export default function HeaderMenu() {
  return (
    <div className="flex gap-4  items-center text-gray-600">
      <Link to="/house/main">Become a Host</Link>
      <Register />

      <div className="dropdown dropdown-end">
        <label tabIndex="0">
          <div className="flex p-2 bg-gray-100 rounded-full gap-1">
            <img
              src={profile}
              alt="pic"
              className="w-5 h-5 rounded-full text-gray-700"
            />
            <MenuIcon className="w-5 h-5" />
          </div>
        </label>
        <ul className="dropdown-content menu shadow rounded-box w-52 bg-gray-50 p-6 space-y-4 text-gray-500">
          <Link to="/profile">Login</Link>
          <Link to="/profile">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/booking/list">Booking list</Link>
          <div className="divider"></div>
          <Link to="/house/detail">My house</Link>
          <Link to="/house/reserve">House reserve</Link>
        </ul>
      </div>
    </div>
  );
}
