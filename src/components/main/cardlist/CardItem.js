import React from 'react';
import card from '../../../assets/img/card.png';

export default function CardItem({
  value: { name, description, price, image, petType },
  onClick,
}) {
  const img = JSON.parse(image);
  return (
    <div className="space-y-1 cursor-pointer" onClick={onClick}>
      <div className="rounded-2xl overflow-hidden h-[240px]">
        <img src={img[0]} alt="card" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-gray-900 font-semibold ">{name}</p>
          <p className="text-gray-500">
            {petType === 'CAT' ? 'For Cat' : 'For Dog'}
          </p>
        </div>
        <p>
          <span>฿ {price} </span>
          <span>/ night</span>
        </p>
      </div>
    </div>
  );
}
