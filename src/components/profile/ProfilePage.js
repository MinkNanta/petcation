import InputDropdown from '../../common/InputDropdown';
import { useContext, useState } from 'react';
import Input from '../../common/Input';
import { AddressContext } from '../../contexts/AddressContext';
import { AuthContext, useAuth } from '../../contexts/AuthContext';
import axios from '../../config/axios';
import { updateUser } from '../../api/user';

export default function ProfilePage() {
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subdistrict, setSubDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [firstName, setFirstNamne] = useState('');
  const [lastName, setLastNamne] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [address, setAddress] = useState('');

  const { dropdownAddress, getDstricts, getSubDstricts } =
    useContext(AddressContext);

  const { User } = useContext(AuthContext);

  console.log(province);
  console.log(district);
  console.log(subdistrict);
  // console.log(dropdownAddress?.subDistricts);
  // console.log(dropdownAddress.map((el) => el.subDistricts));
  console.log(dropdownAddress.subdistrict);
  console.log(zipCode);

  // console.log(dropdownAddress);

  const handleSubmit = async () => {
    // await updateUser({ firstName: 'not' });
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
            label="Subdistrict"
            onChange={(e) => {
              setSubDistrict(e.target.value);
            }}
            errMsg="Error Massage"
            error={true}
          >
            {dropdownAddress.subDistricts?.map((subdistrict) => (
              <option value={subdistrict.zipCode}>{subdistrict.nameEn}</option>
            ))}
          </InputDropdown>

          <Input
            value={subdistrict}
            label="Postal/Zip Code (Optional)"
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter your zipcode"
            errMsg="Error Massage"
            error={true}
          >
            {/* {dropdownAddress.subDistricts?.map((subdistrict) => (
            <option value={subdistrict.zipCodes}>{subdistrict.zipCodes}</option>
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
