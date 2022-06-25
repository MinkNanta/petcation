import React from 'react';
import CardItem from './CardItem';
import MOCKUP from '../../../assets/mockup/MOCK_DATA_HOUSE_CARD.json';
import { useNavigate } from 'react-router-dom';

export default function CardContainer() {
  const house = MOCKUP;
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-8">
      {house?.map((el) => (
        <>
          <CardItem value={el} onClick={() => navigate('/booking/:id')} />
        </>
      ))}
      <div></div>
    </div>
  );
}
