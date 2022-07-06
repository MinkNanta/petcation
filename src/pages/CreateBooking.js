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
import defaultProtoPic from '../assets/img/defaultProtoPic.png';
import BtnIcon from '../common/BtnIcon';
import { XIcon } from '@heroicons/react/outline';

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
  const setGetPet = () => {};

  const [petIds, setPetIds] = useState([]);
  const [addedPets, setAddedPets] = useState([]);

  const handleRemove = (e, id) => {
    const remainingArr = petIds.filter((el) => el.id != id);
    setPetIds(remainingArr);
  };

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
          <ProfileDetails title="Pet Owner" />
          <UserAddress />
          <div className="w-full border-t-2 border-gray-200 my-10"></div>
          <div className="flex justify-between items-end">
            <p className="text-2xl font-medium">Pet Information</p>
            <div className="flex gap-5 items-end">
              <SelectPetModal
                className="bg-orange-500 p-3 text-white rounded-2xl"
                setPetIds={setPetIds}
                petIds={petIds}
                addedPets={addedPets}
                petType={houseById?.petType}
              />
              <AddPetModal
                className="bg-orange-500 p-3 px-5 text-white rounded-2xl"
                setAddedPets={setAddedPets}
                addedPets={addedPets}
                fetch={fetch}
                petType={houseById?.petType}
                setPetIds={setPetIds}
                petIds={petIds}
                setGetPet={setGetPet}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            {petIds.length > 0 ? (
              petIds.map((el) => (
                <div className="grid grid-cols-4">
                  <div className="col-span-1">
                    <img
                      className="rounded-full w-20 h-20"
                      src={el.petPic || defaultProtoPic}
                    ></img>
                  </div>
                  <div className="col-span-3">
                    <h4>{el.name}</h4>
                    <table className="mt-2">
                      <tr className="items">
                        <td>Type</td>
                        <td className="text-gray-500 pl-2 flex items-end">
                          {el.type || 'N/A'}
                        </td>
                      </tr>
                      <tr className="items">
                        <td>Age</td>
                        <td className="text-gray-500 pl-2 flex items-end">
                          {el.age
                            ? `${el.age?.split('.')[0]} Year ${
                                el.age?.split('.')[1]
                              } Month`
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr className="items">
                        <td>Species</td>
                        <td className="text-gray-500 pl-2 flex items-end">
                          {el.species || 'N/A'}
                        </td>
                      </tr>
                      <tr className="items">
                        <td>Note</td>
                        <td className="text-gray-500 pl-2 flex items-end">
                          {el.note || 'N/A'}
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-span-4">
                    <button
                      className="btn-outline mt-2 w-1/5"
                      onClick={(e) => handleRemove(e, el.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-5 text-gray-500">Select or add a pet</p>
            )}
          </div>
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
