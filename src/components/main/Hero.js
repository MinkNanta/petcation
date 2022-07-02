// import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import hero from '../../assets/img/hero.png';
import Input from '../../common/Input';
import LineH from '../../common/LineH';
import InputHero from '../../common/InputHero';
import Demo from '../../common/Demo';

export default function Hero() {
  const [where, setWhere] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [pet, setPet] = useState('');
  const [change, setChange] = useState(false);

  console.log(where);
  console.log(change);

  return (
    <div className="backgroundHero  ">
      <div className="mainContainer h-[90vh]">
        <div className="h-2/5 "></div>
        <h1 className="text-6xl text-white mb-4">
          Find <span className="text-orange-500">Perfect</span> <br />
          Place for Your Pet.
        </h1>

        <div className="bg-white rounded-full pl-10 pr-2  py-4 flex w-[80%] justify-between ">
          <InputHero
            label="Location"
            placeholder="Enter a location"
            value={where}
            onClick={() => setChange(true)}
            onChange={(e) => {
              setWhere(e.target.value);
              setChange(true);
            }}
          />

          {/* <LineH /> */}
          <Demo />

          {/* <LineH /> */}

          {/* <LineH /> */}
          <InputHero
            active={change}
            label="Pet"
            placeholder="Check in"
            value={where}
            onClick={() => setChange(true)}
            onChange={(e) => {
              setCheckInDate(e.target.value);
              setChange(true);
            }}
          />

          <div className="bg-orange-500 p-2 rounded-full centerAll">
            <SearchIcon className="w-7 h-7 m-auto text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
