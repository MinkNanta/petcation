import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';
import EmtpyStateSearch from '../../../common/EmtpyStateSearch';

export default function CardContainerCage() {
  const { house } = useHouse();
  const navigate = useNavigate();
  // console.log(house.length);

  const houseFilter = house?.filter((el) => el.type === 'CAGE');

  // console.log(houseFilter);

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
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </div>
  );
}
