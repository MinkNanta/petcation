import React from "react";
export default function HouseCard({ icon, title, number, describe, color }) {
  return (
    <div className={`${color} rounded-2xl text-center py-10 flex-grow `}>
      <div className="flex gap-2 justify-center items-center">
        {icon}
        <h5 className="text-gray-700">{title}</h5>
      </div>
      <h4 className="text-7xl text-gray-700 my-2">{number}</h4>
      <h6 className="text-gray-700">{describe} </h6>
    </div>
  );
}
