import React, { useState } from 'react';
import { MapIcon } from '@heroicons/react/outline';
import CardContainer from './cardlist/CardContainer';
import SearchCardContainerCapsule from './cardlist/SearchCardContainerCapsule';
import SearchCardContainerSingleRoom from './cardlist/SearchCardContainerSingleRoom';
import CardContainerCage from './cardlist/CardContainerCage';
import allPlaceIcon from '../../assets/img/allPlace.png';
import nearMeIcon from '../../assets/img/nearMe.png';
import singleRoomIcon from '../../assets/img/singleRoom.png';
import capsuleIcon from '../../assets/img/capsule.png';
import cageIcon from '../../assets/img/cage.png';
import SearchCardContainer from './cardlist/SearchCardContainer';
import { useHouse } from '../../contexts/HouseContext';

// const menu = [
//   { name: 'allHouse', active: true, icon: 'allPlaceIcon' },
//   { name: 'singleRoom', active: false, icon: 'singleRoomIcon' },
//   { name: 'capsule', active: false, icon: 'capsuleIcon' },
//   { name: 'nearMe', active: false, icon: 'cageIcon' },
// ];

export default function SearchContainer({ searchHouse }) {
  const [allHouse, setAllHouse] = useState(true);
  const [singleRoom, setSingleRoome] = useState(false);
  const [capsule, setCapsule] = useState(false);
  const [cage, setCage] = useState(false);
  const [nearMe, setNearMe] = useState(false);

  return (
    <>
      <div className="py-6 flex justify-between bg-white">
        <div className="flex  gap-12">
          {/* All Place */}
          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setAllHouse(true);
              setSingleRoome(false);
              setCapsule(false);
              setCage(false);
              setNearMe(false);
            }}
          >
            <img
              className="w-6 h-6 mx-auto"
              src={allPlaceIcon}
              alt="allplace"
            />
            <p
              className={
                allHouse
                  ? 'text-gray-900 border-b-2 border-gray-700'
                  : 'text-gray-600'
              }
            >
              All Place
            </p>
          </div>

          {/* Single room */}
          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setAllHouse(false);
              setSingleRoome(true);
              setCapsule(false);
              setCage(false);
              setNearMe(false);
            }}
          >
            <img
              className="w-6 h-6 mx-auto"
              src={singleRoomIcon}
              alt="sigleroom"
            />
            <p
              className={
                singleRoom
                  ? 'text-gray-900 border-b-2 border-gray-700'
                  : 'text-gray-600'
              }
            >
              Single room
            </p>
          </div>

          {/* Capsule */}

          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(true);
              setCage(false);
              setNearMe(false);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={capsuleIcon} alt="capsule" />

            <p
              className={
                capsule
                  ? 'text-gray-900 border-b-2 border-gray-700'
                  : 'text-gray-600'
              }
            >
              Capsule
            </p>
          </div>

          {/* Cage */}
          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(false);
              setCage(true);
              setNearMe(false);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={cageIcon} alt="cage" />
            <p
              className={
                cage
                  ? 'text-gray-900 border-b-2 border-gray-700'
                  : 'text-gray-600'
              }
            >
              Cage
            </p>
          </div>
        </div>

        <button className="flex gap-2 bg-gray-100 text-gray-600 justify-center items-center px-4 rounded-full">
          <MapIcon className="w-6 h-6 mx-auto inline-block" />
          <p>Show map</p>
        </button>
      </div>
      {/* <p>{title}</p> */}
      {allHouse && <SearchCardContainer />}
      {capsule && <SearchCardContainerCapsule />}
      {singleRoom && <SearchCardContainerSingleRoom />}
      {cage && <CardContainerCage />}
    </>
  );
}
