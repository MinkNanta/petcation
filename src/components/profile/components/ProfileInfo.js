import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import validator from 'validator';
import { updateUser } from '../../../api/user';
import Input from '../../../common/Input';
import TitleHeder from '../../../common/TitleHeder';

export default function ProfileInfo() {
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
    return (
      <>
        <h1>tttttttt</h1>

        {/* <form onSubmit={handleSubmit}>
          <TitleHeder title="Information"></TitleHeder>

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
              error={validator.isEmpty(phoneNumber, {
                ignore_whitespace: true,
              })}
            />
            <Input
              value={email}
              label="Email"
              placeholder="Enter your email"
              errMsg="Error Massage"
              disabled
            />
          </div>
        </form> */}
      </>
    );
  };
}
