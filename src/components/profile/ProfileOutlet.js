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
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div className="bg-gray-100 px-6 py-6 rounded-3xl col-span-4">
              <SidebarProfile />
            </div>
          </div>
          <div className="col-span-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOutlet;
