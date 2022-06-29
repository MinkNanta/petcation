import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import validator from 'validator';
import { updateUser } from '../../api/user';
import Input from '../../common/Input';
import TitleHeder from '../../common/TitleHeder';

export default function ProfileDetails() {
  const { user, userPic } = useAuth();
  const [firstName, setFirstNamne] = useState('');
  const [lastName, setLastNamne] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstNamne(user?.firstName);
      setLastNamne(user?.lastName);
      setPhoneNumber(user?.phoneNumber);
      setEmail(user?.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    if (!firstName) {
      return;
    }
    if (!lastName) {
      return;
    }
    if (!phoneNumber) {
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('userPic', userPic);
    const res = await updateUser(formData);
    setChange(false);
  };

  return (
    <>
      <div>
        <h4>Hi, Welcome back {user?.firstName}</h4>
        <p className="text-gray-500">{user?.email}</p>

        <TitleHeder title="Information"></TitleHeder>

        <Input
          value={firstName}
          label="First name"
          onChange={(e) => {
            setFirstNamne(e.target.value);
            setChange(true);
          }}
          placeholder="Enter your first name"
          errMsg="Firstname is require"
          error={validator.isEmpty(firstName, { ignore_whitespace: true })}
        />
        <Input
          value={lastName}
          label="Last Name"
          onChange={(e) => {
            setLastNamne(e.target.value);
            setChange(true);
          }}
          placeholder="Enter your last name"
          errMsg="LastName is require"
          error={validator.isEmpty(lastName, { ignore_whitespace: true })}
        />

        <Input
          value={phoneNumber}
          label="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setChange(true);
          }}
          placeholder="Enter your phone number"
          errMsg="phoneNumber is require"
          error={validator.isEmpty(phoneNumber, {
            ignore_whitespace: true,
          })}
        />

        {change && (
          <div div className="flex gap-4 w-[40%] mt-4">
            <button className="btn flex-shrink" onClick={() => handleSubmit()}>
              Save
            </button>

            <button
              className="btn btn-outline flex-shrink "
              onClick={() => {
                setFirstNamne(user?.firstName);
                setLastNamne(user?.lastName);
                setPhoneNumber(user?.phoneNumber);
                setEmail(user?.email);
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
}
