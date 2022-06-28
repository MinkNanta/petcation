import React, { useEffect, useState } from 'react';

import detail from '../assets/mockup/MOCK_DATA_HOUSE_DETAIL.json';
import Checkbox from '../common/Checkbox';
import Input from '../common/Input';
import InputDropdown from '../common/InputDropdown';
import InputWithSuffix from '../common/InputWithSuffix';
import Textarea from '../common/Textarea';
import TitleHeder from '../common/TitleHeder';
import ProfileDetails from '../components/profile/ProfileDetails';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';

export default function HouseDetail() {
  const [empty, SetEmpty] = useState(true);
  const { houseByUserID, getHouseByUser } = useHouse();
  const { user } = useAuth();

  const [houseDetail, setHouseDetail] = useState(
    {},

    // {
    //   name: 'HappyCat',
    //   price: 320,
    //   type: 'CAPSULE',
    //   petType: 'CAT',
    //   foodPrice: 120,
    //   limit: 9,
    //   checkInTime: 'test',
    //   checkOutTime: 'test',
    //   petFood: 'Petdegree',
    //   dailySchedule: 'test',
    //   image:
    //     'https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    //   isPetFood: true,
    //   isGrooming: true,
    //   isAirCondition: true,
    //   isPetStaff: true,
    //   isPetTraining: true,
    //   isPickupDropOff: true,
    //   isLitterChangedDaily: true,
    //   isAirFilter: true,
    //   status: 'OPEN',
    // },
  );

  useEffect(() => {
    getHouseByUser();
  }, []);

  useEffect(() => {
    setHouseDetail(houseByUserID);
  }, [houseByUserID]);

  const handleChangeInput = (event) => {
    const values = { ...houseDetail };
    values[event.target.name] = event.target.value;
    setHouseDetail(values);
  };

  const handleCheckBox = (event) => {
    const values = { ...houseDetail };
    values[event.target.name] = event.target.checked;
    setHouseDetail(values);
  };

  console.log('data', houseByUserID);
  console.log(houseDetail);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-4 ">
          {detail.map((el) => (
            <div className="rounded-2xl overflow-hidden">
              <img
                src={el.photo}
                alt="house"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="space-x-4">
          <button className="btn-text-line">Remove all</button>
          <button className="btn-text-line">Edit Photo</button>
        </div>
      </div>
      <TitleHeder title="House address">
        <button className="btn-text">Cancel</button>
        <button className="btn-small">Save</button>
      </TitleHeder>
      <div className="gap-y-5">
        <InputDropdown
          label="Province"
          onChange={(e) => {
            // setProvince(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="District"
          onChange={(e) => {
            // setDistrict(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="Subdistrict"
          onChange={(e) => {
            // setSubdistrict(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1">option1</option>
          <option value="option2">option2</option>
        </InputDropdown>
        <Input
          label="Postal/Zip Code"
          option="(Optional)"
          onChange={(e) => {
            // setZipCode(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <Input
          label="Address"
          onChange={(e) => {
            // setAddress(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="divider"></div>

      {/* House detail*/}
      <div>
        <TitleHeder title="House detail">
          <button className="btn-text">Cancel</button>
          <button className="btn-small">Save</button>
        </TitleHeder>
        <div className="gap-y-5">
          <Input
            value={houseDetail?.name}
            name="name"
            label="Name"
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />
          <Input
            value={houseDetail?.price}
            name="price"
            label="Price per night"
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />

          <InputDropdown
            name="type"
            label="House type"
            value={houseDetail?.type}
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          >
            <option value="SINGLE_ROOM">Single Room</option>
            <option value="CAPSULE">Capsule</option>
            <option value="CAGE">Cage</option>
          </InputDropdown>
          <InputDropdown
            name="petType"
            label="House for"
            value={houseDetail?.petType}
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          >
            <option value="CAT">Cat</option>
            <option value="DOG">Dog</option>
          </InputDropdown>

          <InputWithSuffix
            name="size"
            type="number"
            suffix="sqrt"
            label="Size"
            value={houseDetail?.size}
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />
          <div className="divider"></div>
        </div>
      </div>

      {/* House information */}
      <div>
        <TitleHeder title="House information">
          <button className="btn-text">Cancel</button>
          <button className="btn-small">Save</button>
        </TitleHeder>
        <div className="gap-y-5">
          <Input
            value={houseDetail?.checkInTime}
            name="checkInTime"
            label="Check in"
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />
          <Input
            value={houseDetail?.checkOutTime}
            name="checkOutTime"
            label="Check Out"
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />

          <Input
            name="petFood"
            label="Pet Food"
            value={houseDetail?.petFood}
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />
          <Input
            name="foodPrice"
            label="Food Price"
            value={houseDetail?.foodPrice}
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />
          <Textarea
            name="dailySchedule"
            label="Daily Schedule"
            value={houseDetail?.dailySchedule}
            placeholder="Breakfast: 10.30am 
          Snack: 2pm
          Dinner: 6pm
          Playtime: 11.30am till 5.30pm"
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />

          {/* Highlights */}
          <div>
            <label className="label">
              <span className="label-text">Highlights</span>
            </label>
            <div className="grid grid-cols-2 mt-2">
              <div>
                <Checkbox
                  name="isPetFood"
                  title="Pet Food"
                  checked={houseDetail?.isPetFood}
                  onChange={(event) => handleCheckBox(event)}
                />
                <Checkbox
                  name="isGrooming"
                  title="Grooming"
                  checked={houseDetail?.isGrooming}
                  onChange={(event) => handleCheckBox(event)}
                />
                <Checkbox
                  name="isAirCondition"
                  title="Air Conditioning"
                  checked={houseDetail?.isAirCondition}
                  onChange={(event) => handleCheckBox(event)}
                />
                <Checkbox
                  name="isPetStaff"
                  title="Pet staff"
                  checked={houseDetail?.isPetStaff}
                  onChange={(event) => handleCheckBox(event)}
                />
              </div>
              <div>
                <Checkbox title="Pet Training" value="checked1" />
                <Checkbox title="Pick up-Drop off" value="checked1" />
                <Checkbox title="Litter changed daily" value="checked1" />
                <Checkbox title="Air Filter" value="checked1" />
              </div>
            </div>
          </div>

          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}
