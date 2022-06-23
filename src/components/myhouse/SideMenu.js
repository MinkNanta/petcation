import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MenuIcon from "../../common/MenuIcon";

export default function SideMenu() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 p-4 rounded-3xl space-y-2">
      <MenuIcon
        to="/house"
        title="Dashboard"
        active={location.pathname === "/house"}
      />
      <MenuIcon
        to="/house/reserve"
        title="Reservations"
        active={location.pathname === "/house/reserve"}
      />
      <MenuIcon
        to="/house/detail"
        title="My House"
        active={location.pathname === "/house/detail"}
      />
      <MenuIcon
        to="/house/setting"
        title="Setting"
        active={location.pathname === "/house/setting"}
      />
    </div>
  );
}
