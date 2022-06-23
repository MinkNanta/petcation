import React, { useState } from "react";
import HouseCard from "../components/booking/HouseCard";
import BackNavigation from "../components/booking/BackNavigation";
import BookingSummary from "../components/booking/BookingSummary";
import ProfileDetails from "../components/profile/ProfileDetails";
import PetInformation from "../components/profile/PetInformation";

export default function CreateBooking() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subdistrict, setSubdistrict] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [address, setAddress] = useState(null);

  // console.log(firstName);
  // console.log(lastName);
  // console.log(phoneNumber);
  // console.log(province);
  // console.log(district);
  // console.log(subdistrict);
  // console.log(zipCode);
  // console.log(address);

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
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <PetInformation />
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <button className="btn w-32">Booking</button>
        </div>
      </div>
    </div>
  );
}
