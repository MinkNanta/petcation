import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import TitleHeader from "./TitleHeader";

export default function HouseOutlet() {
  return (
    <div className="max-w-7xl px-8 pb-20">
      <TitleHeader />
      <h2>House Dashboard</h2>
      <div className="grid grid-cols-12 gap-4 mt-9">
        <div className="col-span-3">
          <SideMenu />
        </div>
        <div className="col-span-9 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
