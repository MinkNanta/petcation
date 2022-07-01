import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';

export default function CardContainerSingleRoom() {
  const { house } = useHouse();
  const navigate = useNavigate();
  console.log(house.length);

  const houseFilter = house?.filter((el) => el.type === 'SINGLE_ROOM');

  console.log(houseFilter);

  return (
    <div className="grid sm:grid-cols-4 gap-8">
      {houseFilter.length > 0 ? (
        houseFilter?.map((el) => (
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
