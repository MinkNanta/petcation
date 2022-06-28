import React, { useState } from 'react';
import Input from '../../../common/Input';
import TitleHeder from '../../../common/TitleHeder';
import { useAuth } from '../../../contexts/AuthContext';
import { useHouse } from '../../../contexts/HouseContext';
import Textarea from '../../../common/Textarea';
import Checkbox from '../../../common/Checkbox';

export default function HouseInfoFrom() {
  const { houseDetail, handleChangeInput, handleCheckBox } = useHouse();

  return (
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
              <Checkbox
                name="isPetTraining"
                title="Pet Training"
                checked={houseDetail?.isPetTraining}
                onChange={(event) => handleCheckBox(event)}
              />
              <Checkbox
                name="isPickupDropOff"
                title="Pick up-Drop off"
                checked={houseDetail?.isPickupDropOff}
                onChange={(event) => handleCheckBox(event)}
              />
              <Checkbox
                name="isLitterChangedDaily"
                title="Litter changed daily"
                checked={houseDetail?.isLitterChangedDaily}
                onChange={(event) => handleCheckBox(event)}
              />
              <Checkbox
                name="isAirFilter"
                title="Air Filter"
                checked={houseDetail?.isAirFilter}
                onChange={(event) => handleCheckBox(event)}
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Textarea
            name="other"
            label="Other"
            value={houseDetail?.dailySchedule}
            placeholder="Breakfast: 10.30am 
          Snack: 2pm
          Dinner: 6pm
          Playtime: 11.30am till 5.30pm"
            onChange={(event) => handleChangeInput(event)}
            errMsg="Error Massage"
            error={false}
          />
        </div>
      </div>
    </div>
  );
}
