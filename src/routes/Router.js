import { Route, Routes, Navigate } from "react-router-dom";
import { MainHeaderOutlet } from "../components/layout/MainHeaderOutlet";
import CreateBooking from "../pages/CreateBooking";
import CreateHouse from "../pages/CreateHouse";
import Warp from "../pages/Warp";
import Details from "../pages/Details";
import BookingDetail from "../pages/BookingDetail";
import HouseReserve from "../pages/HouseReserve";
import House from "../pages/House";
import Search from "../pages/Search";
import HouseMain from "../pages/HouseMain";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import BookingList from "../pages/BookingList";
import DesignSystemDoc from "../pages/DesignSystemDoc";
import ProfilePet from "../components/profile/ProfilePet";

export default function Router() {
  const user = true;
  return (
    <Routes>
      <Route path="/warp" element={<Warp />} />
      <Route path="/ui" element={<DesignSystemDoc />} />
      <Route path="/" element={<MainHeaderOutlet />}>
        <Route path="" element={<Main />} />
        <Route path="/house/:id" element={<Details />} />
        <Route path="/booking/create" element={<CreateBooking />} />
        {user && (
          <>
            <Route path="/profile" element={<Profile />}>
              <Route path="profilepet" element={<ProfilePet />} />
            </Route>
            <Route path="/house/detail" element={<House />} />
            <Route path="/house/reserve" element={<HouseReserve />} />
            <Route path="/booking/:id" element={<BookingDetail />} />
            <Route path="/booking/list" element={<BookingList />} />
          </>
        )}
        <Route path="/house/main" element={<HouseMain />} />
        <Route path="/createHouse" element={<CreateHouse />} />
      </Route>
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
