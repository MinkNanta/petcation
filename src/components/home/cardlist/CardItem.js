import React from "react";
import card from "../../../assets/img/card.png";

export default function CardItem({ title, description, price }) {
  return (
    <div className="space-y-1">
      <img src={card} />
      <div className="space-y-2">
        <div>
          <p className="text-gray-900 font-semibold ">Happy House</p>
          <p className="text-gray-500">3,082 kilometers away</p>
        </div>
        <p>
          <span>฿ </span>3,078 <span>night</span>
        </p>
      </div>
    </div>
  );
}
