import React from "react";
import { Link } from "react-router-dom";

export default function Warp() {
  return (
    <div className="flex flex-col gap-4 ml-4">
      <Link to="/">Main</Link>
      <Link to="/house/:id">details/:id</Link>
      <Link to="/booking/create">CreateBooking</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/house/detail">House(user view)</Link>
      <Link to="/house/reserve">HouseReserve</Link>
      <Link to="/booking/:id">BookingDetail/:id</Link>
      <Link to="/house/main">HouseMain</Link>
      <Link to="/creteHouse">CreateHouse</Link>
      <Link to="/search">Search</Link>
      <Link to="/booking/list">booking</Link>
      <Link to="/ui">UI</Link>
    </div>
  );
}
