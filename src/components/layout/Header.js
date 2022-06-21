import { Link, useParams, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import profile from "../../assets/img/defaultProtoPic.png";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Header() {
  const location = useLocation();
  return (
    <>
      <div
        className={`w-full  ${location.pathname === "/" ? "fixed" : "sticky"} `}
      >
        <div className="h-24 flex  justify-between items-center mx-12">
          <div className="">
            <Link to="/">
              <img src={logo} alt="logo" to="/" />
            </Link>
          </div>
          <div className="flex gap-4  items-center">
            <Link to="/house/main">Become a Host</Link>

            <div className="dropdown dropdown-end">
              <label tabindex="0">
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
                <div class="divider"></div>
                <Link to="/house/detail">My house</Link>
                <Link to="/house/reserve">House reserve</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
