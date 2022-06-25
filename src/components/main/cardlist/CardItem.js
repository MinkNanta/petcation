import React from 'react';
import card from '../../../assets/img/card.png';

export default function CardItem({
  value: { name, description, price },
  onClick,
}) {
  return (
    <div className="space-y-1 cursor-pointer" onClick={onClick}>
      <div className="h-[238px]">
        <img src={card} alt="card" className="w-full h-full" />
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-gray-900 font-semibold ">{name}</p>
          <p className="text-gray-500">3,082 kilometers away</p>
        </div>
        <p>
          <span>฿ </span>
          {description} <span>night</span>
        </p>
      </div>
    </div>
  );
}
