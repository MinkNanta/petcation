import InputDropdown from '../../common/InputDropdown';
import { useContext, useEffect, useState } from 'react';
import Input from '../../common/Input';
import { AddressContext } from '../../contexts/AddressContext';
import { AuthContext, useAuth } from '../../contexts/AuthContext';
import axios from '../../config/axios';
import { updateUser } from '../../api/user';

export default function ProfilePage() {
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [firstName, setFirstNamne] = useState('');
  const [lastName, setLastNamne] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [address, setAddress] = useState('');

  const { dropdownAddress, getDstricts, getSubDstricts } =
    useContext(AddressContext);

  const { user } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser({
      firstName,
      lastName,
      phoneNumber,
      province,
      district,
      subDistrict,
      zipCode,
      address,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center ">
          <h4 className="text-2xl">Information</h4>
          <div className="flex gap-4">
            <button className="btn-text">Cancel</button>
            <button className="btn-small " type="submit">
              Save
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <Input
            value={firstName}
            label="First name"
            onChange={(e) => setFirstNamne(e.target.value)}
            placeholder="Enter your first name"
            errMsg="Error Massage"
            error={true}
          />
          <Input
            value={lastName}
            label="Last Name"
            onChange={(e) => setLastNamne(e.target.value)}
            placeholder="Enter your last name"
            errMsg="Error Massage"
            error={true}
          />
        </div>

        <div className=" ">
          <Input
            value={phoneNumber}
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            errMsg="Error Massage"
            error={true}
          />
          <Input
            value={email}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            errMsg="Error Massage"
            error={true}
          />
        </div>

        {/* Province */}
        <div>
          <InputDropdown
            label="Province"
            onChange={(e) => {
              setProvince(e.target.value);
              getDstricts(e.target.value);
            }}
            errMsg="Error Massage"
            error={true}
          >
            {dropdownAddress.provinces.map((province) => (
              <option value={province.id}>{province.nameEn}</option>
            ))}
          </InputDropdown>

          <InputDropdown
            label="District"
            onChange={(e) => {
              setDistrict(e.target.value);
              getSubDstricts(e.target.value);
            }}
            errMsg="Error Massage"
            error={true}
          >
            {dropdownAddress.districts?.map((district) => (
              <option value={district.id}>{district.nameEn}</option>
            ))}
          </InputDropdown>

          <InputDropdown
            label="subDistrict"
            onChange={(e) => {
              setSubDistrict(e.target.value);
            }}
            errMsg="Error Massage"
            error={true}
          >
            {dropdownAddress.subDistricts?.map((subDistrict) => (
              <option value={subDistrict.zipCode}>{subDistrict.nameEn}</option>
            ))}
          </InputDropdown>

          <Input
            value={subDistrict}
            label="Postal/Zip Code (Optional)"
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter your zipcode"
            errMsg="Error Massage"
            error={true}
          >
            {/* {dropdownAddress.subDistricts?.map((subDistrict) => (
            <option value={subDistrict.zipCodes}>{subDistrict.zipCodes}</option>
          ))} */}
          </Input>

          <Input
            value={address}
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            errMsg="Error Massage"
            error={true}
          />
        </div>
      </form>
    </>
  );
}
