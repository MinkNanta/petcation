import {
  CalculatorIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MenuIcon from '../../common/MenuIcon';

export default function SideMenu() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 p-4 rounded-3xl space-y-2">
      <MenuIcon
        to="/house"
        title="Dashboard"
        active={location.pathname === '/house'}
        icon={<ChartBarIcon />}
      />
      <MenuIcon
        to="/house/reserve"
        title="Reservations"
        active={location.pathname === '/house/reserve'}
        icon={<CalculatorIcon />}
      />
      <MenuIcon
        to="/house/detail"
        title="My House"
        active={location.pathname === '/house/detail'}
        icon={<HomeIcon />}
      />
      <MenuIcon
        to="/house/setting"
        title="Setting"
        active={location.pathname === '/house/setting'}
        icon={<CogIcon />}
      />
    </div>
  );
}
