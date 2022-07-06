import React, { useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import { useHouse } from '../../../contexts/HouseContext';
import SkeletonCard from '../../../common/SkeletonCard';
import EmtpyState from '../../../common/EmtpyState';
import EmtpyStateSearch from '../../../common/EmtpyStateSearch';

export default function SearchCardContainer() {
  const { searchHouse } = useHouse();
  const navigate = useNavigate();

  return (
    <>
      <div className="grid sm:grid-cols-4 gap-8">
        {searchHouse.length > 0 ? (
          searchHouse?.map((el) => (
            <CardItem
              key={el.id}
              value={el}
              onClick={() => navigate('/booking/' + el.id)}
            />
          ))
        ) : searchHouse.length === 0 ? (
          <EmtpyStateSearch />
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
    </>
  );
}
