import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import detail from '../assets/mockup/MOCK_DATA_HOUSE_DETAIL.json';
import UserAddress from '../components/address/UserAddress';
import HouseDetailForm from '../components/myhouse/myHouseDetail/HouseDetailForm';
import HouseInfoFrom from '../components/myhouse/myHouseDetail/HouseInfoFrom';
import { ErrorContext, useError } from '../contexts/ErrorContext';
import EmptyState from '../common/EmtpyState';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';

export default function HouseDetail() {
  const { user } = useAuth();

  const { houseByUserID, getHouseByUser } = useHouse();
  useEffect(() => {
    getHouseByUser();
  }, [user]);
  return (
    <div className="space-y-6">
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
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4 ">
              {detail.map((el) => (
                <div className="rounded-2xl overflow-hidden" key={el.id}>
                  <img
                    src={el.photo}
                    alt="house"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="space-x-4">
              <button className="btn-text-line">Remove all</button>
              <button className="btn-text-line">Edit Photo</button>
            </div>
          </div>
          <div className="w-[70%]">
            <UserAddress />
            <HouseDetailForm />
            <HouseInfoFrom />
          </div>
        </>
      )}
    </div>
  );
}
