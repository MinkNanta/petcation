import { useEffect, useState } from 'react';
import { nextStagePage } from '../../../actions/CreateHouseAction';
import { updateUser } from '../../../api/user';
import Input from '../../../common/Input';
import { useAuth } from '../../../contexts/AuthContext';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import { useError } from '../../../contexts/ErrorContext';

function HostInformation() {
  const { dispatch } = useCreateHouse();
  const { user, setFetch } = useAuth();
  const { setError, setFeedback } = useError();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [email, setEmail] = useState(user?.email);

  const [checkError, setCheckError] = useState(false);
  const allError = {};

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setPhoneNumber(user?.phoneNumber);
    setEmail(user?.email);
  }, [user]);

  const handleClickNext = async () => {
    if (!firstName) {
      allError.firstName = 'Enter your input';
      setCheckError(allError);
    }
    if (!lastName) {
      allError.lastName = 'Enter your input';
      setCheckError(allError);
    }
    if (!phoneNumber) {
      allError.phoneNumber = 'Enter your input';
      setCheckError(allError);
    }
    if (!email) {
      allError.email = 'Enter your input';
      setCheckError(allError);
    }

    if (allError.firstName) return;
    if (allError.lastName) return;
    if (allError.phoneNumber) return;
    if (allError.email) return;

    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('phoneNumber', phoneNumber);
      await updateUser(formData);
      setFetch((p) => !p);
      dispatch(nextStagePage());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">Host Information</div>
      <div className="mt-6 ">
        <Input
          value={firstName}
          // type="text"
          // option="option"
          label="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Enter your input"
          errMsg={checkError.firstName}
          error={checkError.firstName}
        />
      </div>
      <div className="mt-2">
        <Input
          value={lastName}
          // type="text"
          // option="option"
          label="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Enter your input"
          errMsg={checkError.lastName}
          error={checkError.lastName}
        />
      </div>
      <div className="mt-2">
        <Input
          value={phoneNumber}
          // type="text"
          // option="option"
          label="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder="Enter your input"
          errMsg={checkError.phoneNumber}
          error={checkError.phoneNumber}
        />
      </div>
      <div className="mt-2">
        <Input
          value={email}
          // type="text"
          // option="option"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your input"
          errMsg={checkError.email}
          error={checkError.email}
          disabled={true}
        />
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small">Next</div>
      </div>
    </div>
  );
}

export default HostInformation;
