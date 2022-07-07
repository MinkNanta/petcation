import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';
import EmtpyStateSearch from '../../../common/EmtpyStateSearch';
import { motion } from 'framer-motion';
import GoogleMapContainer from './GoogleMapContainer';

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

export default function CardContainerCapsule({ isGoogle }) {
  const { house } = useHouse();
  // const { searchHouse } = useHouse();
  const navigate = useNavigate();

  const houseFilter = house?.filter((el) => el.type === 'CAPSULE');

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
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </motion.ul>

      // </div>
    );
  }
}
