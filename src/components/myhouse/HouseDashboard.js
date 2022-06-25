import React, { useState } from "react";
import HouseCard from "./components/HouseCard";
import { HomeIcon, KeyIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import EmptyState from "../../common/EmtpyState";
import DashboardMenu from "./components/DashboardMenu";

export default function HouseDashboard() {
  const [empty, SetEmpty] = useState(true);

  return (
    <div className="w-full space-y-6">
      <div>
        <h4>Hi, Welcome back</h4>
        <div className="flex gap-8 mt-4">
          <HouseCard
            icon={<HomeIcon className="w-6 h-6" />}
            title="Available"
            number="9"
            describe="Room Unit"
            color="bg-[#D0E9FD]"
          />
          <HouseCard
            icon={<KeyIcon className="w-6 h-6" />}
            title="Active"
            number="9"
            describe="Room Unit"
            color="bg-[#FFF8CE]"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h4>Your reservations</h4>
        <DashboardMenu />
        {empty && (
          <EmptyState
            title="You have no upcoming reservations"
            description="You don’t have any guests checking out today or tomorrow."
          />
        )}
      </div>
    </div>
  );
}
