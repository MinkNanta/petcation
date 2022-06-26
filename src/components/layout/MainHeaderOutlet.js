import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import CreateHouseContextProvider from '../../contexts/CreateHouseContext';
function MainHeaderOutlet() {
  return (
    <>
      <Header />
      <CreateHouseContextProvider>
        <Outlet />
      </CreateHouseContextProvider>
      <Footer />
    </>
  );
}

export { MainHeaderOutlet };
