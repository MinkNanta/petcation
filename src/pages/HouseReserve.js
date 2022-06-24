import React, { useState } from "react";
import DashboardMenu from "../components/myhouse/components/DashboardMenu";
import EmptyState from "../common/EmtpyState";
import CardList from "../common/CardList";

import cardItem from "../assets/mockup/MOCK_DATA_CARDLIST.json";
import { useTab } from "../contexts/TabContext";

export default function HouseReserve() {
  const [empty, SetEmpty] = useState(false);
  const { active } = useTab();

  return (
    <div className="space-y-6">
      <h4>Your reservations</h4>
      <DashboardMenu />

      {active === "upcoming" ? (
        cardItem.map((el) => (
          <CardList
            src={el.photo}
            title={el.title}
            date={el.dtate}
            detail={el.detail}
          />
        ))
      ) : (
        <EmptyState
          title="You have no upcoming reservations"
          description="You don’t have any guests checking out today or tomorrow."
        />
      )}
    </div>
  );
}
