import React from "react";
import CardItem from "./CardItem";
import MOCKUP from "../../../assets/mockup/MOCK_DATA_HOUSE_CARD.json";

export default function CardContainer() {
  const house = MOCKUP;

  console.log(house);

  return (
    <div className="grid grid-cols-4 gap-8">
      {house?.map((el) => (
        <>
          <CardItem value={el} />
        </>
      ))}
    </div>
  );
}
