import React, { useEffect, useState } from 'react';
import HouseCard from './components/HouseCard';
import { HomeIcon, KeyIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import EmptyState from '../../common/EmtpyState';
import DashboardMenu from './components/DashboardMenu';
import { useError } from '../../contexts/ErrorContext';
import { useHouse } from '../../contexts/HouseContext';
import { useAuth } from '../../contexts/AuthContext';
import TitleHeder from '../../common/TitleHeder';

export default function HouseDashboard() {
  const [empty, SetEmpty] = useState(true);
  const { user } = useAuth();

  const { houseByUserID, getHouseByUser } = useHouse();
  useEffect(() => {
    getHouseByUser();
  }, [user]);

  return (
    <div className="w-full space-y-6 min-h-[60vh]">
      <div>
        <TitleHeder title={`Hi, Welcome back ${user?.firstName}`} />
        {houseByUserID.length < 1 ? (
          <EmptyState
            title="Become a host"
            description="Easy step to become a host."
          >
            <Link className="btn-text-line" to="/house/main">
              Become a host
            </Link>
          </EmptyState>
        ) : (
          <>
            <div className="flex gap-8 mt-4">
              <HouseCard
                icon={<HomeIcon className="w-6 h-6" />}
                title="Available"
                number={houseByUserID?.price}
                describe="Room Unit"
                color="bg-[#D0E9FD]"
              />
              <HouseCard
                icon={<KeyIcon className="w-6 h-6" />}
                title="Active"
                number={houseByUserID?.price}
                describe="Room Unit"
                color="bg-[#FFF8CE]"
              />
            </div>

            <div className="space-y-6 mt-8">
              <h4>Your reservations</h4>
              <DashboardMenu />
              {empty && (
                <EmptyState
                  title="You have no upcoming reservations"
                  description="You don’t have any guests checking out today or tomorrow."
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
