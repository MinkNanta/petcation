import React, { useState } from 'react';
import { MapIcon } from '@heroicons/react/outline';
import CardContainer from './cardlist/CardContainer';
import CardContainerCapsule from './cardlist/CardContainerCapsule';
import CardContainerSingleRoom from './cardlist/CardContainerSingleRoom';
import CardContainerCage from './cardlist/CardContainerCage';
import allPlaceIcon from '../../assets/img/allPlace.png'
import nearMeIcon from '../../assets/img/nearMe.png'
import singleRoomIcon from '../../assets/img/singleRoom.png'
import capsuleIcon from '../../assets/img/capsule.png'
import cageIcon from '../../assets/img/cage.png'

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
        {/* All Place */}
          <div className="text-center"  onClick={() => {
            setAllHouse(true);
            setSingleRoome(false);
            setCapsule(false);
            setCage(false);
          }}>
            <img className="w-6 h-6 mx-auto" src={allPlaceIcon} />
            <p className={allHouse ? 'text-orange-500' : 'text-gray-500'}>All Places</p>
          </div>

          {/* Near Me */}
          <div className="text-center">
          <img className="w-6 h-6 mx-auto" src={nearMeIcon} />
                      <p className="text-gray-500">Near Me</p>
          </div>

          {/* Single room */}
          <div className="text-center"
          
           onClick={() => {
             setAllHouse(false);
             setSingleRoome(true);
             setCapsule(false);
             setCage(false);
           }}>
          <img className="w-6 h-6 mx-auto" src={singleRoomIcon} />
            <p className={singleRoom ? 'text-orange-500' : 'text-gray-500'}>Single Room</p>
          </div>
          
          
          {/* Capsule */}
          
          <div
            className="text-center"
            onClick={() => {
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(true);
              setCage(false);
            }}
          >
                     <img className="w-6 h-6 mx-auto" src={capsuleIcon} />

            <p className={capsule ? 'text-orange-500' : 'text-gray-500'}>
              Capsule
            </p>
          </div>


          {/* Cage */}
          <div className="text-center"
           onClick={() => {
            setAllHouse(false);
            setSingleRoome(false);
            setCapsule(false);
            setCage(true);
          }}>
            
            <img className="w-6 h-6 mx-auto" src={cageIcon} />
            <p className={cage ? 'text-orange-500' : 'text-gray-500'}>Cage</p>
          </div>
        </div>


        <button className="flex gap-2 bg-gray-100 text-gray-600 justify-center items-center px-4 rounded-full">
          <MapIcon className="w-6 h-6 mx-auto inline-block" />
          <p>Show Map</p>
        </button>
      </div>
      {allHouse && <CardContainer />}
      {capsule && <CardContainerCapsule />}
      {singleRoom && <CardContainerSingleRoom />}
      {cage && <CardContainerCage />}
    </>
  );
}
