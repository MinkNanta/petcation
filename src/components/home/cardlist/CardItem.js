import React from "react";
import card from "../../../assets/img/card.png";

export default function CardItem() {
  return (
    <div>
      <img src={card} />
      <p>Happy House</p>
      <p>3,082 kilometers away</p>
      <p>
        <span>฿ </span>3,078 <span>Day</span>
      </p>
    </div>
  );
}
