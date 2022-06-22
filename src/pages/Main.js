import { MenuIcon } from "@heroicons/react/solid";
import React from "react";
import Modal from "../common/Modal";
import CardContainer from "../components/home/cardlist/CardContainer";
import Hero from "../components/home/Hero";
import TapFilter from "../components/home/TapFilter";

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
