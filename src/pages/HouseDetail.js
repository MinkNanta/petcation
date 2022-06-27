import React from "react";

import detail from "../assets/mockup/MOCK_DATA_HOUSE_DETAIL.json";
import Input from "../common/Input";
import InputDropdown from "../common/InputDropdown";
import InputWithSuffix from "../common/InputWithSuffix";
import TitleHeder from "../common/TitleHeder";
import ProfileDetails from "../components/profile/ProfileDetails";

export default function HouseDetail() {
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

      <TitleHeder title="House detail">
        <button className="btn-text">Cancel</button>
        <button className="btn-small">Save</button>
      </TitleHeder>
      <div className="gap-y-5">
        <Input
          label="Name"
          option=""
          onChange={(e) => {
            // setZipCode(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <Input
          label="Price per night"
          onChange={(e) => {
            // setAddress(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <InputDropdown
          label="House type"
          onChange={(e) => {
            // setAddress(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <InputDropdown
          label="House for"
          onChange={(e) => {
            // setAddress(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <InputWithSuffix
          suffix="sqrt"
          label="Size"
          onChange={(e) => {
            // setAddress(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="divider"></div>
    </div>
  );
}
