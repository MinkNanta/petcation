import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-50/70 h-24 mt-10">
      <div className=" px-8 flex justify-between  h-full">
        <div className="my-auto">
          <Link to="/">
            <img src={logo} alt="logo" to="/" />
          </Link>
        </div>
        <div className="my-auto text-xs font-light flex gap-2">
          <Link to="/">© 2022 Petcation</Link>
          <Link to="/">Toro</Link>
          <Link to="/">Pie</Link>
          <Link to="/">Not</Link>
          <Link to="/">Khing</Link>
          <Link to="/">Mink</Link>
          <Link to="/">|</Link>
          <Link to="/house/main">Become a host</Link>
        </div>
      </div>
    </div>
  );
}
