import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import TitleHeader from '../myhouse/TitleHeader';
import SidebarProfile from './SidebarProfile';
import TitleProfile from './TitleProfile';

function ProfileOutlet() {
  const { user } = useAuth();
  return (
    <div className="max-w-7xl px-8 pb-20">
      <TitleProfile />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <div className="py-10">
        <div className="grid sm:grid-cols-12 gap-8">
          <div className="sm:col-span-4 ">
            <SidebarProfile />
          </div>
          <div className="sm:col-span-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOutlet;
