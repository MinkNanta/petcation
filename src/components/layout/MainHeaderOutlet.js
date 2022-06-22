import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
function MainHeaderOutlet() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { MainHeaderOutlet };
