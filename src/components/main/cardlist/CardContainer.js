import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';
import { motion } from 'framer-motion';

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

export default function CardContainer() {
  const { house } = useHouse();
  const navigate = useNavigate();
  // console.log(house.length);

  return (
    // <div className="grid sm:grid-cols-4 gap-8">
    <motion.ul
      className="grid sm:grid-cols-4 gap-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {house.length > 0 ? (
        house?.map((el) => (
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
