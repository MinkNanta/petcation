import React, { useContext, useEffect, useState } from 'react';

import detail from '../assets/mockup/MOCK_DATA_HOUSE_DETAIL.json';
import UserAddress from '../components/address/UserAddress';
import HouseDetailForm from '../components/myhouse/myHouseDetail/HouseDetailForm';
import HouseInfoFrom from '../components/myhouse/myHouseDetail/HouseInfoFrom';
import { ErrorContext, useError } from '../contexts/ErrorContext';

export default function HouseDetail() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
