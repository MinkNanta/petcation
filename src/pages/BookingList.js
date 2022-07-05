import React from 'react';
import DashboardMenu from '../components/myhouse/components/DashboardMenu';
import TabContextProvider from '../contexts/TabContext';

export default function BookingList() {
  return (
    <div className="space-y-6 mt-8">
      <h4>Your reservations</h4>
      <TabContextProvider>
        <DashboardMenu />
      </TabContextProvider>
    </div>
  );
}
