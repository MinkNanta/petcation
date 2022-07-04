import React, { useContext, useEffect, useState } from 'react';
import HouseCard from '../common/HouseCard';
import BackNavigation from '../components/booking/BackNavigation';
import BookingSummary from '../components/booking/BookingSummary';
import ProfileDetails from '../components/profile/ProfileDetails';
import AddPetModal from '../components/booking/AddPetModal';
import SelectPetModal from '../components/booking/SelectPetModal';
import PaymentModal from '../components/payment/PaymentModal';
import { useLocation } from 'react-router-dom';
import UserAddress from '../components/address/UserAddress';

export default function CreateBooking() {
  const { state } = useLocation();
  const {
    checkInDate,
    checkOutDate,
    isIncludeFood,
    numberOfPets,
    houseById,
    nights,
  } = state;

  const [petIds, setPetIds] = useState([]);

  return (
    <div className="my-10 mx-20">
      <BackNavigation title="Booking & Payment" houseId={houseById?.id} />
      <div className="mt-10 flex">
        <div>
          <HouseCard
            houseName={houseById?.name}
            img={JSON.parse(houseById?.image)[0]}
            reviews="4"
            price={houseById?.price}
            nights={nights}
            foodPrice={houseById?.foodPrice}
            serviceFee={houseById?.serviceFee}
            numberOfPets={numberOfPets}
            isIncludeFood={isIncludeFood}
          />
        </div>
        <div className="ml-10 w-full">
          <BookingSummary
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            numberOfPets={numberOfPets}
            isIncludeFood={isIncludeFood}
            petType={houseById?.petType}
          />
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <p className="text-2xl font-medium">Pet Owner</p>
          <ProfileDetails />
          <UserAddress />
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <div className="flex justify-between items-end">
            <p className="text-2xl font-medium">Pet Information</p>
            <div className="flex gap-5 items-end">
              <SelectPetModal className="bg-orange-500 p-3 text-white rounded-2xl" />
              <AddPetModal className="bg-orange-500 p-3 px-5 text-white rounded-2xl" />
            </div>
          </div>
          <p className="mt-5 text-gray-500">Select or add a pet</p>
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <PaymentModal
            className="bg-orange-500 p-3 text-white rounded-2xl w-1/5"
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            houseId={houseById?.id}
            price={
              isIncludeFood
                ? (houseById?.price * nights + houseById?.foodPrice * nights) *
                  numberOfPets *
                  1.05
                : houseById?.price * nights * numberOfPets * 1.05
            }
            isIncludeFood={isIncludeFood}
            serviceFee={
              isIncludeFood
                ? (houseById?.price * nights + houseById?.foodPrice * nights) *
                  numberOfPets *
                  0.05
                : houseById?.price * nights * numberOfPets * 0.05
            }
            foodPrice={houseById?.foodPrice}
            petIds={petIds}
          />
        </div>
      </div>
    </div>
  );
}
