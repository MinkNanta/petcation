import React from 'react';

export default function Listing({ title, info }) {
  return (
    <span className="flex gap-2 text-gray-700">
      {title} :{'  '}
      <p className=" text-gray-500">
        {info ? info : 'Please edit to fill in this field'}
      </p>
    </span>
  );
}
