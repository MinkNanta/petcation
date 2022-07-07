import React, { useState } from "react";
import Tab from "../../../common/Tab";
import TapItem from "../../../common/TapItem";
import { useTab } from "../../../contexts/TabContext";

// const menus = ["upcoming", "completed", "canceled", "all"];

export default function DashboardMenu({ active, setActive, menus }) {
  // const { active, setActive, menus } = useTab();

  return (
    <Tab>
      {menus?.map((menu) => (
        <TapItem
          key={menu}
          active={menu === active}
          title={menu}
          onClick={() => setActive(menu)}
        />
      ))}
    </Tab>
  );
}
