import { useEffect, useState } from 'react';
import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import InputDropdown from '../../../common/InputDropdown';
import { useAuth } from '../../../contexts/AuthContext';
import { useAddress } from '../../../contexts/AddressContext';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import { updateUser } from '../../../api/user';

function HostAddress() {
  const { dispatch } = useCreateHouse();
  const {
    dropdownAddress,
    userAddress,
    handleChangeAddress,
    setChangeAddress,
  } = useAddress();

  const handleClickNext = async () => {
    await updateUser(userAddress);
    setChangeAddress((p) => !p);
    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">Host Address</div>

      <div className="mt-6 ">
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
      </div>

      <div className="mt-1 ">
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
      </div>

      <div className="mt-1 ">
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
      </div>

      <div className="mt-2">
        <Input
          disabled={userAddress?.zipCodes === ''}
          name="zipCodes"
          value={userAddress?.zipCodes}
          label="Postal/Zip Code"
          onChange={(event) => {
            handleChangeAddress(event);
          }}
          placeholder="Enter your zipcode"
          errMsg="Error Massage"
          error={false}
        ></Input>
      </div>

      <div className="mt-2 ">
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

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small  w-[91px]">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HostAddress;
