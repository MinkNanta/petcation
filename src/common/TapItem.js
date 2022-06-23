import React from "react";
import { Link } from "react-router-dom";

export default function TapItem({ active, title, onClick }) {
  return (
    <div
      className="tab tab-bordered flex-grow"
      id={`${active ? "tabItem" : ""}`}
      onClick={onClick}
    >
      <p>{title}</p>
    </div>
  );
}
