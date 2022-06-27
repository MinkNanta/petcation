import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-50/70 h-24 mt-10">
      <div className="max-w-7xl px-8 flex justify-between  h-full">
        <div className="my-auto">
          <Link to="/">
            <img src={logo} alt="logo" to="/" />
          </Link>
        </div>
        <div className="my-auto text-xs font-light">
          <p>© 2022 Petcation • Privacy • Terms • Sitemap • Destinations</p>
        </div>
      </div>
    </div>
  );
}
