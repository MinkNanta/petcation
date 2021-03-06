import { Route, Routes, Navigate } from 'react-router-dom';
import { MainHeaderOutlet } from '../components/layout/MainHeaderOutlet';
import CreateBooking from '../pages/CreateBooking';
import CreateHouse from '../pages/CreateHouse';
import Details from '../pages/Details';
import BookingDetail from '../pages/BookingDetail';
import HouseReserve from '../pages/HouseReserve';
import House from '../pages/House';
import HouseMain from '../pages/HouseMain';
import Main from '../pages/Main';

import BookingList from '../pages/BookingList';
import HouseSetting from '../pages/HouseSetting';
import HouseDetail from '../pages/HouseDetail';
import BookingListDetails from '../pages/BookingListDetails';
import HouseReserveDetails from '../pages/HouseReserveDetails';

import HouseOutlet from '../components/myhouse/HouseOutlet';
import ProfileOutlet from '../components/profile/ProfileOutlet';
import ProfilePage from '../components/profile/ProfilePage';
import ProfilePet from '../components/profile/ProfilePet';
import { useAuth } from '../contexts/AuthContext';
import SearchResult from '../pages/SearchResult';

export default function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<MainHeaderOutlet />}>
        <Route path="" element={<Main />} />
        <Route path="/house/:id" element={<Details />} />
        {user ? (
          <>
            <Route path="/" element={<ProfileOutlet />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="profile/profilepet" element={<ProfilePet />} />
              <Route path="booking/list" element={<BookingList />} />
              <Route
                path="booking/list/:bookingId"
                element={<BookingListDetails />}
              />
            </Route>

            <Route path="/booking/create" element={<CreateBooking />} />
          </>
        ) : (
          // <></>
          <Route path="*" element={<Navigate to="/" />} />
        )}
        {user ? (
          <>
            <Route path="/" element={<HouseOutlet />}>
              <Route path="house" element={<House />} />
              <Route path="house/reserve" element={<HouseReserve />} />
              <Route
                path="house/reserve/:bookingId"
                element={<HouseReserveDetails />}
              />
              <Route path="house/detail" element={<HouseDetail />} />
              <Route path="house/setting" element={<HouseSetting />} />
            </Route>

            <Route path="/booking/create" element={<CreateBooking />} />
          </>
        ) : (
          // <></>
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="/booking/:id" element={<BookingDetail />} />
        <Route path="/house/main" element={<HouseMain />} />
        <Route path="/createHouse" element={<CreateHouse />} />
      </Route>
      <Route path="/search" element={<SearchResult />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}
