import React, { useState } from 'react';
import { MapIcon } from '@heroicons/react/outline';
import CardContainer from './cardlist/CardContainer';
import CardContainerCapsule from './cardlist/CardContainerCapsule';
import CardContainerSingleRoom from './cardlist/CardContainerSingleRoom';
import CardContainerCage from './cardlist/CardContainerCage';
import allPlaceIcon from '../../assets/img/allPlace.png';
import nearMeIcon from '../../assets/img/nearMe.png';
import singleRoomIcon from '../../assets/img/singleRoom.png';
import capsuleIcon from '../../assets/img/capsule.png';
import cageIcon from '../../assets/img/cage.png';
import { motion } from 'framer-motion';
import GoogleMapContainer from './cardlist/GoogleMapContainer';

export default function TapFilter({ title }) {
  const [allHouse, setAllHouse] = useState(true);
  const [filter, setFilter] = useState('All');
  const [singleRoom, setSingleRoome] = useState(false);
  const [capsule, setCapsule] = useState(false);
  const [cage, setCage] = useState(false);
  const [nearMe, setNearMe] = useState(false);
  const [googleMap, setGoogleMap] = useState(false);

  return (
    <>
      <div className="py-6 flex justify-between bg-white">
        <div className="flex  gap-12 ">
          {/* All Place */}
          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setFilter('All');
              setAllHouse(true);
              setSingleRoome(false);
              setCapsule(false);
              setCage(false);
              setNearMe(false);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={allPlaceIcon} alt=" " />
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

          {/* Near Me
          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(false);
              setCage(false);
              setNearMe(true);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={nearMeIcon} alt=" " />
            <p
              className={
                nearMe
                  ? 'text-gray-900 border-b-2 border-gray-700'
                  : 'text-gray-600'
              }
            >
              Near Me
            </p>
          </div> */}

          {/* Single room */}
          <div
            className="text-center cursor-pointer space-y-1"
            onClick={() => {
              setFilter('SINGLE_ROOM');
              setAllHouse(false);
              setSingleRoome(true);
              setCapsule(false);
              setCage(false);
              setNearMe(false);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={singleRoomIcon} alt=" " />
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
              setFilter('CAPSULE');
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(true);
              setCage(false);
              setNearMe(false);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={capsuleIcon} alt=" " />

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
              setFilter('CAGE');
              setAllHouse(false);
              setSingleRoome(false);
              setCapsule(false);
              setCage(true);
              setNearMe(false);
            }}
          >
            <img className="w-6 h-6 mx-auto" src={cageIcon} alt=" " />
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

        <button
          className="flex gap-2 bg-gray-100 text-gray-600 justify-center items-center px-4 rounded-full"
          onClick={() => {
            setGoogleMap((p) => !p);
          }}
        >
          <MapIcon className="w-6 h-6 mx-auto inline-block" />
          {!googleMap ? <p>Show Map</p> : <p>Show List</p>}
        </button>
      </div>
      <p>{title}</p>
      {/* <CardContainer filter={filter} isGoogle={googleMap} /> */}
      {allHouse && <CardContainer filter={filter} isGoogle={googleMap} />}
      {capsule && <CardContainerCapsule filter={filter} isGoogle={googleMap} />}
      {singleRoom && (
        <CardContainerSingleRoom filter={filter} isGoogle={googleMap} />
      )}
      {cage && <CardContainerCage filter={filter} isGoogle={googleMap} />}
    </>
  );
}
