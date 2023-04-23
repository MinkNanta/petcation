import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';
import EmtpyStateSearch from '../../../common/EmtpyStateSearch';
import { motion } from 'framer-motion';
import GoogleMapContainer from './GoogleMapContainer';
import mockHouse from '../../../mockupdata/mockHouse.json';

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 2, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CardContainerCage({ filter, isGoogle }) {
  const { house } = useHouse();
  const navigate = useNavigate();

  // console.log(house.length);

  const houseFilter = house?.filter((el) => el.type === 'CAGE');

  // console.log(houseFilter);

  if (isGoogle) {
    return <GoogleMapContainer house={houseFilter} />;
  } else {
    return (
      // <div className="grid sm:grid-cols-4 gap-8">
      <motion.ul
        className="grid sm:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {houseFilter.length > 0 ? (
          houseFilter?.map((el) => (
            <motion.li key={el.id} className="item" variants={item}>
              <CardItem
                key={el.id}
                value={el}
                onClick={() => navigate('/booking/' + el.id)}
              />
            </motion.li>
          ))
        ) : (
          <>
            {mockHouse
              ?.filter((el) => el.type === filter)
              .map(({ id, name, description, price, image, petType, type }) => (
                <motion.li key={id} className="item" variants={item}>
                  <div
                    className="space-y-2 cursor-pointer"
                    onClick={() => navigate('/booking/1234')}
                  >
                    <div className="rounded-2xl overflow-hidden h-[240px] w-full relative ">
                      <div className="absolute w-full h-full bg-black opacity-0 hover:opacity-20"></div>
                      <img
                        src={
                          image ||
                          'https://plus.unsplash.com/premium_photo-1664371207179-d4ea25479ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'
                        }
                        alt="card"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 mt-2">
                      <div>
                        <p className="text-gray-900 font-semibold ">{name}</p>
                        <p className="text-gray-500">
                          {petType === 'CAT'
                            ? type === 'SINGLE_ROOM'
                              ? 'Single room for Cats'
                              : type === 'CAPSULE'
                              ? 'Capsule for Cats'
                              : 'Cage for Cats'
                            : type === 'SINGLE_ROOM'
                            ? 'Single room for Dogs'
                            : type === 'CAPSULE'
                            ? 'Capsule for Dogs'
                            : 'Cage for Dogs'}
                        </p>
                      </div>
                      <p>
                        <span>฿ {price.toLocaleString('en-EN')} </span>
                        <span>night</span>
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
          </>
        )}
      </motion.ul>
      // </div>
    );
  }
}
