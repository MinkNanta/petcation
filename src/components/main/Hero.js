// import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import hero from '../../assets/img/hero.png';
import Input from '../../common/Input';

export default function Hero() {
  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');
  const [pet, setPet] = useState('');
  const [change, setChange] = useState(false);

  console.log(where);
  console.log(change);

  return (
    <div className="backgroundHero ">
      <div className="mainContainer h-[90vh]">
        <div className="h-2/5 "></div>
        <h1 className="text-6xl text-white mb-4">
          Find <span className="text-orange-500">Perfect</span> <br />
          Place for Your Pet.
        </h1>
        <div className="flex ">
          <div className=" bg-white rounded-full px-6 py-4 place-content-start flex">
            <div className="flex gap-4">
              <input
                className="inputWhite"
                placeholder="Where"
                value={where}
                // onChange={(e) => setWhere(e.target.value)}
                onChange={(e) => {
                  setWhere(e.target.value);
                  setChange(true);
                }}
              />
              <div className="line"></div>
              <input
                placeholder="When"
                className="inputWhite"
                value={when}
                onChange={(e) => setWhen(e.target.value)}
              />
              <div className="line"></div>
              <input
                placeholder="With"
                className="inputWhite"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
              />
            </div>

            <div className="bg-orange-500 w-9 h-9 rounded-full centerAll">
              <SearchIcon className="w-6 h-6 m-auto text-white" />
            </div>
          </div>
        </div>
        {change && (
          <div className="flex gap-4">
            <h1>hello not</h1>
            <input
              className="inputWhite"
              placeholder="Where"
              value={where}
              onChange={(e) => setWhere(e.target.value)}
            />
            <div className="line"></div>
            <input
              placeholder="When"
              className="inputWhite"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
            />
            <div className="line"></div>
            <input
              placeholder="With"
              className="inputWhite"
              value={pet}
              onChange={(e) => setPet(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
