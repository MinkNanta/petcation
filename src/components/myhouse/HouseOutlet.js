import React from "react";
import { Outlet } from "react-router-dom";
import TabContextProvider from "../../contexts/TabContext";
import SideMenu from "./SideMenu";
import TitleHeader from "./TitleHeader";

export default function HouseOutlet() {
  return (
    <TabContextProvider>
      <div className="max-w-7xl px-8 pb-20">
        <TitleHeader />
        <h2>House Dashboard</h2>
        <div className="grid grid-cols-12 gap-8 mt-9">
          <div className="col-span-4">
            <SideMenu />
          </div>
          <div className="col-span-8 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </TabContextProvider>
  );
}
