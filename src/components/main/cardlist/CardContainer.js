import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';

export default function CardContainer() {
  const { house } = useHouse();
  const navigate = useNavigate();
  // console.log(house.length);

  return (
    <div className="grid sm:grid-cols-4 gap-8">
      {house.length > 0 ? (
        house?.map((el) => (
          <CardItem
            key={el.id}
            value={el}
            onClick={() => navigate('/booking/' + el.id)}
          />
        ))
      ) : (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </div>
  );
}
