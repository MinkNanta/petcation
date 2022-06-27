import React, { Children } from 'react';

export default function BtnIcon({ icon, onClick }) {
  return (
    <div
      className="w-7 h-7 bg-gray-100 rounded-full text-gray-500 p-1"
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
