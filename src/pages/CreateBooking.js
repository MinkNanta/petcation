import React from "react";
import HouseCard from "../components/booking/HouseCard";
import BackNavigation from "../components/booking/BackNavigation";
import BookingSummary from "../components/booking/BookingSummary";
import PetOwnerDetails from "../components/profile/PetOwnerDetails";
import PetInformation from "../components/profile/PetInformation";

export default function CreateBooking() {
  // const [inputFile, setInputFile] = useState("");

  // const uploadClick = (e) => {
  //   e.preventDefault();
  //   inputFile.click();
  //   return false;
  // };

  return (
    <div className="my-10 mx-20">
      <BackNavigation title="Booking & Payment" />
      <div className="mt-10 flex">
        <div>
          <HouseCard />
        </div>
        <div className="ml-10 w-full">
          <BookingSummary />
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <PetOwnerDetails />
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <PetInformation />
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <button className="btn w-32">Booking</button>
        </div>
      </div>
    </div>
  );
}
