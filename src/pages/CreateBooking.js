import React, { useContext, useState } from 'react';
import HouseCard from '../common/HouseCard';
import BackNavigation from '../components/booking/BackNavigation';
import BookingSummary from '../components/booking/BookingSummary';
import ProfileDetails from '../components/profile/ProfileDetails';
import AddPetModal from '../components/booking/AddPetModal';
import SelectPetModal from '../components/booking/SelectPetModal';
import PaymentModal from '../components/payment/PaymentModal';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function CreateBooking() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subdistrict, setSubdistrict] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [address, setAddress] = useState(null);

  const { user } = useContext(AuthContext);

  const { state } = useLocation();

  return (
    <div className="my-10 mx-20">
      <BackNavigation title="Booking & Payment" />
      <div className="mt-10 flex">
        <div>
          <HouseCard
            houseName="Room name Cat Capsule by Minkminks"
            img="https://api.lorem.space/image/shoes?w=400&h=225"
            reviews="4"
            price={10000}
            nights={2}
            foodPrice={20000}
            serviceFee={20000}
          />
        </div>
        <div className="ml-10 w-full">
          <BookingSummary />
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <p className="text-2xl font-medium">Pet Owner</p>
          <ProfileDetails
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhoneNumber={setPhoneNumber}
            setProvince={setProvince}
            setDistrict={setDistrict}
            setSubdistrict={setSubdistrict}
            setZipCode={setZipCode}
            setAddress={setAddress}
          />
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <div className="flex justify-between items-end">
            <p className="text-2xl font-medium">Pet Information</p>
            <div className="flex gap-5 items-end">
              <SelectPetModal />
              <AddPetModal />
            </div>
          </div>
          <p className="mt-5 text-gray-500">Select or add a pet</p>
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <PaymentModal />
        </div>
      </div>
    </div>
  );
}
