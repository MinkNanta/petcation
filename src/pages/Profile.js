import React from "react";
import { Outlet } from "react-router-dom";
import ProfilePage from "../components/profile/ProfilePage";
import ProfilePet from "../components/profile/ProfilePet";

export default function Profile() {
  return (
    <div className="mainContainer">
      <ProfilePage>
        <Outlet />
      </ProfilePage>
    </div>
  );
}
