import React, { useEffect } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import { useAddress } from '../../contexts/AddressContext';

export default function UserAddress() {
  const { dropdownAddress, userAddress, handleChangeAddress } = useAddress();

  return (
    <div className="gap-y-5">
      <InputDropdown
        name="provinces"
        label="Province"
        value={userAddress?.provinces}
        onChange={(event) => handleChangeAddress(event)}
        errMsg="Error Massage"
        error={false}
      >
        <option value="">Select your option</option>
        {dropdownAddress.provinces?.map((el) => (
          <option key={el.id} value={el.nameEn}>
            {el.nameEn}
          </option>
        ))}
      </InputDropdown>

      <InputDropdown
        disabled={dropdownAddress?.districts.length < 1}
        name="districts"
        label="District"
        value={userAddress?.districts}
        onChange={(event) => handleChangeAddress(event)}
        errMsg="Error Massage"
        error={false}
      >
        <option value="">Select your option</option>
        {dropdownAddress.districts?.map((el) => (
          <option key={el.id} value={el.nameEn}>
            {el.nameEn}
          </option>
        ))}
      </InputDropdown>
      <InputDropdown
        disabled={dropdownAddress?.subDistricts.length < 1}
        name="subDistricts"
        label="Subdistrict"
        value={userAddress?.subDistricts}
        onChange={(event) => handleChangeAddress(event)}
        errMsg="Error Massage"
        error={false}
      >
        <option value="">Select your option</option>
        {dropdownAddress.subDistricts?.map((el) => (
          <option key={el.id} value={el.nameEn}>
            {el.nameEn}
          </option>
        ))}
      </InputDropdown>

      <Input
        disabled={userAddress?.zipCodes === ''}
        name="zipCodes"
        value={userAddress?.zipCodes}
        label="Postal/Zip Code"
        onChange={(event) => handleChangeAddress(event)}
        placeholder="Enter your zipcode"
        errMsg="Error Massage"
        error={false}
      ></Input>

      <Input
        value={userAddress?.address}
        label="Address"
        name="address"
        onChange={(event) => handleChangeAddress(event)}
        placeholder="Enter your address"
        errMsg="Error Massage"
        error={false}
      />
    </div>
  );
}
