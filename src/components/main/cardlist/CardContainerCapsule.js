import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';
import EmtpyStateSearch from '../../../common/EmtpyStateSearch';

export default function CardContainerCapsule() {
  // const { house } = useHouse();
  const { searchHouse } = useHouse();
  const navigate = useNavigate();

  const houseFilter = searchHouse?.filter((el) => el.type === 'CAPSULE');

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
          <EmtpyStateSearch />
        </>
      )}
    </div>
  );
}
