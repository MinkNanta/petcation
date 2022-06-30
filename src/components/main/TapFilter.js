import React, { useState } from 'react';
import { MapIcon } from '@heroicons/react/outline';
import CardContainer from './cardlist/CardContainer';
import CardContainerCapsule from './cardlist/CardContainerCapsule';

export default function TapFilter() {
  const [allHouse, setAllHouse] = useState(true);
  const [singleRoom, setSingleRoome] = useState(false);
  const [capsule, setCapsule] = useState(false);
  const [cage, setCage] = useState(false);
  return (
    <>
      {' '}
      <div className="py-10 flex justify-between">
        <div className="flex  gap-6">
          <div className="text-center">
            <MapIcon className="w-6 h-6 mx-auto" />
            <p className="text-gray-500">All Place</p>
          </div>
          <div className="text-center">
            <MapIcon className="w-6 h-6 mx-auto" />
            <p className="text-gray-500">Near Me</p>
          </div>
          <div className="text-center">
            <MapIcon className="w-6 h-6 mx-auto" />
            <p className="text-gray-500">Single room</p>
          </div>
          <div
            className="text-center"
            onClick={() => {
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(true);
              setCage(false);
            }}
          >
            <MapIcon className="w-6 h-6 mx-auto" />
            <p className={capsule ? 'text-orange-500' : 'text-gray-500'}>
              Capsule
            </p>
          </div>
          <div className="text-center">
            <MapIcon className="w-6 h-6 mx-auto" />
            <p className="text-gray-500">Cage</p>
          </div>
        </div>
        <button className="flex gap-2 bg-gray-100 text-gray-600 justify-center items-center px-4 rounded-full">
          <MapIcon className="w-6 h-6 mx-auto inline-block" />
          <p>Show map</p>
        </button>
      </div>
      {allHouse && <CardContainer />}
      {capsule && <CardContainerCapsule />}
    </>
  );
}
