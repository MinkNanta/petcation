import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';

export default function CardSelect({ action, onClick, icon, title }) {
  return (
    <div
      className={`relative p-2 w-full bg-gray-100 rounded-3xl  ${
        action ? 'border-2 border-orange-300' : 'border-2 border-gray-100'
      }`}
    >
      {action && (
        <div className="p-1 bg-orange-500 rounded-full absolute -top-1 -left-1 z-50 ">
          <CheckIcon className="w-3 h-3 text-white" />
        </div>
      )}
      <div onClick={onClick}>
        <img src={icon} alt="Dog" className="mx-auto h-8 w-8 mt-2" />
        <p className="text-[12px] text-gray-700 text-center font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}
