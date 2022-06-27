import { MenuIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Modal from '../common/Modal';
import CardContainer from '../components/main/cardlist/CardContainer';
import Hero from '../components/main/Hero';
import TapFilter from '../components/main/TapFilter';

export default function Main() {
  return (
    <div>
      <Hero />
      <div className="mainContainer">
        <TapFilter />
        <CardContainer />
      </div>
    </div>
  );
}
