import React from 'react';
import card from '../../../assets/img/card.png';

export default function CardItem({
  value: { name, description, price, image ,petType},
  onClick,
}) {
  return (
    <div className="space-y-1 cursor-pointer" onClick={onClick}>
      <div className="rounded-2xl overflow-hidden">
        <img src={image} alt="card" className="w-full h-full" />
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-gray-900 font-semibold ">{name}</p>
          <p className="text-gray-500">For Cat</p>
        </div>
        <p>
          <span>฿ {price} </span>
          <span>/ night</span>
        </p>
      </div>
    </div>
  );
}
