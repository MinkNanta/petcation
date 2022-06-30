import React, { useEffect, useState } from 'react';
import DashboardMenu from '../components/myhouse/components/DashboardMenu';
import EmptyState from '../common/EmtpyState';
import CardList from '../common/CardList';

import cardItem from '../assets/mockup/MOCK_DATA_CARDLIST.json';
import { useTab } from '../contexts/TabContext';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';
import { Link } from 'react-router-dom';
import TitleHeder from '../common/TitleHeder';

export default function HouseReserve() {
  const { active } = useTab();
  const [empty, SetEmpty] = useState(true);
  const { user } = useAuth();

  const { houseByUserID, getHouseByUser } = useHouse();
  useEffect(() => {
    getHouseByUser();
  }, [user]);

  return (
    <div className="space-y-6">
      <TitleHeder title="Your reservations" />

      <DashboardMenu />

      {houseByUserID.length < 1 ? (
        <EmptyState
          title="Become a host"
          description="Easy step to become a host."
        >
          <Link className="btn-text-line" to="/house/main">
            Become a host
          </Link>
        </EmptyState>
      ) : active === 'upcoming' ? (
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
