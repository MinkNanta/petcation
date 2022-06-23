import React from "react";

export default function CardList({ src, title, detail, date }) {
  return (
    <div className="pt-2 pb-8 border-b-2 border-gray-100">
      <div className="flex gap-4">
        <div className="w-[160px] h-[160px] overflow-hidden rounded-2xl">
          <img src={src} alt="profile" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between text-light">
          <div className="space-y-1">
            <h6 className="font-medium">{title}</h6>
            <p className="text-gray-500">{date}</p>
            <p className="text-gray-500">{detail}</p>
          </div>
          <p className="text-gray-600">Detail</p>
        </div>
      </div>
    </div>
  );
}
