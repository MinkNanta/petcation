import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import validator from 'validator';
import { updateUser } from '../../api/user';
import Input from '../../common/Input';
import TitleHeder from '../../common/TitleHeder';
import { getAccessToken } from '../../services/localStorage';
import axios from '../../config/axios';
import Spinner from '../../common/Spinner';
import { useError } from '../../contexts/ErrorContext';

export default function ProfileDetails() {
  const [change, setChange] = useState(false);
  const [oldValue, setOldValue] = useState({});
  const [fetch, setFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newUserInfo, setNewUserInfo] = useState({});
  const { setError } = useError();

  console.log('newUserInfo', newUserInfo);
  console.log('oldValue', oldValue);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get('/users');
          setNewUserInfo(res.data.user);
          setOldValue(res.data.user);
        }
      } catch (err) {}
    };
    fetchMe();
  }, [fetch]);

  const handleChangeInput = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setChange(true);
    const values = { ...newUserInfo };
    values[event.target.name] = event.target.value;
    setNewUserInfo(values);
  };

  const [validate, setValidate] = useState({});

  const handleSubmit = async (e) => {
    try {
      const newValidate = {};

      if (
        validator.isEmpty(newUserInfo?.firstName, {
          ignore_whitespace: true,
        })
      ) {
        newValidate.firstName = 'FirstName is require';
        setValidate(newValidate);
        return;
      }
      if (
        validator.isEmpty(newUserInfo?.lastName, {
          ignore_whitespace: true,
        })
      ) {
        newValidate.lastName = 'FirstName is require';
        setValidate(newValidate);
        return;
      }
      if (
        validator.isEmpty(newUserInfo?.phoneNumber, {
          ignore_whitespace: true,
        })
      ) {
        newValidate.phoneNumber = 'FirstName is require';
        setValidate(newValidate);
        return;
      }
      setValidate({});
      setLoading(true);
      const formData = new FormData();
      formData.append('firstName', newUserInfo.firstName);
      formData.append('lastName', newUserInfo.lastName);
      formData.append('phoneNumber', newUserInfo.phoneNumber);
      // formData.append('userPic', userPic);
      const res = await updateUser(formData);
      setChange(false);
      setFetch((p) => !p);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        {loading && <Spinner />}
        <h4>Hi, Welcome back {oldValue?.firstName}</h4>
        <p className="text-gray-500">{oldValue?.email}</p>

        <TitleHeder title="Information"></TitleHeder>

        <Input
          name="firstName"
          value={newUserInfo?.firstName}
          label="First Name"
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your first name"
          errMsg={validate.firstName}
          error={validate.firstName}
        />
        <Input
          name="lastName"
          value={newUserInfo?.lastName}
          label="Last Name"
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your last name"
          errMsg={validate.lastName}
          error={validate.lastName}
        />

        <Input
          name="phoneNumber"
          value={newUserInfo?.phoneNumber}
          label="Phone Number"
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your phone number"
          errMsg={validate.phoneNumber}
          error={validate.phoneNumber}
        />

        {change && (
          <div div className="flex gap-4 w-[40%] mt-4">
            <button className="btn flex-shrink" onClick={() => handleSubmit()}>
              Save
            </button>

            <button
              className="btn btn-outline flex-shrink "
              onClick={() => {
                setNewUserInfo(oldValue);
                setChange(false);
                setValidate({});
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
