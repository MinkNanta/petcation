import InputDropdown from '../../common/InputDropdown';
import { useContext, useEffect, useState } from 'react';
import Input from '../../common/Input';
import { AddressContext } from '../../contexts/AddressContext';
import { AuthContext, useAuth } from '../../contexts/AuthContext';
import axios from '../../config/axios';
import { updateUser } from '../../api/user';
import validator from 'validator';

export default function ProfilePage() {
  const { user, setUser, userPic } = useAuth();
  // const [province, setProvince] = useState('');
  // const [district, setDistrict] = useState('');
  // const [subDistrict, setSubDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [firstName, setFirstNamne] = useState('');
  const [lastName, setLastNamne] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState({});

  // const [address, setAddress] = useState('');

  // const { dropdownAddress, getDstricts, getSubDstricts } =
  //   useContext(AddressContext);

  const validateInput = () => {
    const newValidate = {};

    if (!validator.isEmpty(firstName))
      newValidate.firstName = 'firstname is require';
    setValidate(newValidate);
  };
  // console.log(user);

  useEffect(() => {
    if (user) {
      setFirstNamne(user.firstName);
      setLastNamne(user.lastName);
      setPhoneNumber(user.phoneNumber);
      // setAddress(user.address);
      setEmail(user.email);
    }
    console.log(user);
  }, [user]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // validateInput();
    if (!firstName) {
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('userPic', userPic);
    await updateUser(formData);
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
            errMsg="Firstname is require"
            error={validator.isEmpty(firstName, { ignore_whitespace: true })}
          />
          <Input
            value={lastName}
            label="Last Name"
            onChange={(e) => setLastNamne(e.target.value)}
            placeholder="Enter your last name"
            errMsg="LastName is require"
            error={validator.isEmpty(lastName, { ignore_whitespace: true })}
          />
        </div>

        <div className=" ">
          <Input
            value={phoneNumber}
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            errMsg="phoneNumber is require"
            error={validator.isEmpty(phoneNumber, { ignore_whitespace: true })}
          />
          <Input
            value={email}
            label="Email"
            placeholder="Enter your email"
            errMsg="Error Massage"
            disabled
          />
        </div>
      </form>
    </>
  );
}
