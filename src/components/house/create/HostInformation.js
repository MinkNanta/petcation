import { useState } from 'react';
import { nextStagePage } from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import { useAuth } from '../../../contexts/AuthContext';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HostInformation() {
  const { dispatch } = useCreateHouse();
  const { user } = useAuth();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  console.log(user);

  const handleClickNext = () => {
    dispatch(nextStagePage());
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
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="mt-2">
        <Input
          value={lastName}
          // type="text"
          // option="option"
          label="Last Name"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="mt-2">
        <Input
          value={phoneNumber}
          // type="text"
          // option="option"
          label="Phone Number"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="mt-2">
        <Input
          value={email}
          // type="text"
          // option="option"
          label="Email"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HostInformation;
