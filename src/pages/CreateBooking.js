import React, { useState } from "react";
import { ChevronLeftIcon, MapIcon, PlusIcon } from "@heroicons/react/outline";
import Input from "../common/Input";
import InputDropdown from "../common/InputDropdown";

export default function CreateBooking() {
  // const [inputFile, setInputFile] = useState("");

  // const uploadClick = (e) => {
  //   e.preventDefault();
  //   inputFile.click();
  //   return false;
  // };

  return (
    <div className="my-10 mx-20">
      <div>
        <p className="text-4xl font-semibold">
          <ChevronLeftIcon className="w-6 h-6 inline-block mr-5" />
          Booking & Payment
        </p>
      </div>
      <div className="mt-10 flex">
        <div>
          <div class="card w-96 bg-gray-100 p-5 inline-block">
            <p className="text-2xl font-medium">
              Room name Cat Capsule by Minkminks
            </p>
            <figure className="mt-5">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center p-0 py-5">
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-x font-medium">Price Details</p>
                <p className="text-end text-base text-gray-500">4 reviews</p>
              </div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  10,000 x 2 nights
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  Food Service
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  Service Fee
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div class="w-full border-t-2 border-gray-200 my-5"></div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-900">Total</p>
                <p className="text-end text-base text-gray-900">60,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 w-full">
          <div className="flex mb-5">
            <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
            <p>
              Date
              <br />
              <span className="text-gray-500">6/24/2022 - 6/26/2022</span>
            </p>
          </div>
          <div className="flex mb-5">
            <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
            <p>
              Pet
              <br />
              <span className="text-gray-500">2 Cats with Pet Food</span>
            </p>
          </div>
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <div>
            <p className="text-2xl font-medium">Pet Owner</p>
            <div className="form-control flex mt-5">
              <div className="flex gap-x-5">
                <Input
                  label="First name"
                  onChange={() => {}}
                  placeholder=""
                  errMsg="Error Massage"
                  error={false}
                />
                <Input
                  label="Last name"
                  onChange={() => {}}
                  placeholder=""
                  errMsg="Error Massage"
                  error={false}
                />
              </div>
              <Input
                label="Phone Number"
                onChange={() => {}}
                placeholder=""
                errMsg="Error Massage"
                error={false}
              />
              <InputDropdown
                label="Province"
                onChange={(e) => {
                  // setValueDropDown(e.target.value);
                }}
                errMsg="Error Massage"
                error={false}
              >
                <option value="option1"></option>
              </InputDropdown>
              <InputDropdown
                label="District"
                onChange={(e) => {
                  // setValueDropDown(e.target.value);
                }}
                errMsg="Error Massage"
                error={false}
              >
                <option value="option1"></option>
              </InputDropdown>
              <InputDropdown
                label="Subdistrict"
                onChange={(e) => {
                  // setValueDropDown(e.target.value);
                }}
                errMsg="Error Massage"
                error={false}
              >
                <option value="option1"></option>
              </InputDropdown>
              <Input
                label="Postal/Zip Code"
                option='(Optional)'
                onChange={() => {}}
                placeholder=""
                errMsg="Error Massage"
                error={false}
              />
              <Input
                label="Address"
                onChange={() => {}}
                placeholder=""
                errMsg="Error Massage"
                error={false}
              />
            </div>
          </div>
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <div>
            <p className="text-2xl font-medium">Pet Information</p>
            <div className="form-control w-full mt-5">
              <input
                type="file"
                name="fileUpload"
                ref={(input) => {
                  // assigns a reference so we can trigger it later
                  // setInputFile(input);
                }}
                className="hidden"
              />
              <a
                // href="#"
                // onClick={uploadClick}
                className="bg-gray-100 text-gray-300 font-light rounded-2xl w-48 h-48 flex flex-row justify-center items-center mb-5"
              >
                <PlusIcon className="w-4 h-4 inline-block" />
                Upload Photo
              </a>
              <div className="flex gap-x-5">
                <Input
                  label="Name"
                  onChange={() => {}}
                  placeholder=""
                  errMsg="Error Massage"
                  error={false}
                />
                <InputDropdown
                  label="Type"
                  onChange={(e) => {
                    // setValueDropDown(e.target.value);
                  }}
                  errMsg="Error Massage"
                  error={false}
                >
                  <option value="option1"></option>
                </InputDropdown>
              </div>
              <InputDropdown
                label="Weight"
                onChange={(e) => {
                  // setValueDropDown(e.target.value);
                }}
                errMsg="Error Massage"
                error={false}
              >
                <option value="option1"></option>
              </InputDropdown>
              <div className="flex gap-x-5">
                <div className="flex gap-x-5 items-end">
                  <Input
                    label="Name"
                    onChange={() => {}}
                    placeholder=""
                    errMsg="Error Massage"
                    error={false}
                  />
                  <Input
                    label=""
                    onChange={() => {}}
                    placeholder=""
                    errMsg="Error Massage"
                    error={false}
                  />
                </div>
                <Input
                  label="Species"
                  onChange={() => {}}
                  placeholder=""
                  errMsg="Error Massage"
                  error={false}
                />
              </div>
              <Input
                label="Note"
                onChange={() => {}}
                placeholder=""
                errMsg="Error Massage"
                error={false}
              />
            </div>
          </div>
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <button className="btn w-32">Booking</button>
        </div>
      </div>
    </div>
  );
}
