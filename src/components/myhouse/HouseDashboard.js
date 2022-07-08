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
import axios from 'axios';
import { useSearchInput } from '../../contexts/SearchInputContext';
import HouseReserve from '../../pages/HouseReserve';

export default function HouseDashboard() {
  const [empty, SetEmpty] = useState(true);
  const { user } = useAuth();
  const { houseLimit, setHouseLimit } = useSearchInput();

  const { houseByUserID, getHouseByUser, bookingHouse, setBookingHouse } =
    useHouse();
  const [active, setActive] = useState(0);
  const [available, setAvailable] = useState(0);

  useEffect(() => {
    getHouseByUser();
  }, [user]);

  useEffect(() => {
    const fetchLimit = async () => {
      const res = await axios.get(`/houses/limitHouse/${houseByUserID.id}`);
      const booking = await axios.get(`/bookings/host/${houseByUserID.id}`);

      console.log(res.data);
      setHouseLimit(res.data);
      const sum = res.data;
      const sumActive = sum.reduce((acc, el) => {
        return +el.amount + acc;
      }, 0);
      setActive(sumActive);
      setAvailable(1 * houseByUserID.limit - sumActive);
      console.log('booking', booking.date);
      setBookingHouse(booking.date);
    };
    fetchLimit();
  }, []);

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
                number={available}
                describe={`Max limit ${houseByUserID?.limit} pet`}
                color="bg-[#D0E9FD]"
              />
              <HouseCard
                icon={<KeyIcon className="w-6 h-6" />}
                title="Active"
                number={active}
                describe="Room Unit"
                color="bg-[#FFF8CE]"
              />
            </div>

            <div className="space-y-6 mt-8">
              {/* <h4>Your reservations</h4> */}
              {/* <DashboardMenu /> */}
              <HouseReserve />
              {/* {empty && (
                <EmptyState
                  title="You have no upcoming reservations"
                  description="You don’t have any guests checking out today or tomorrow."
                />
              )} */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
