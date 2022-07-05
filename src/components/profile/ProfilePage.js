// import InputDropdown from '../../common/InputDropdown';
// import { useContext, useEffect, useState } from 'react';
// import Input from '../../common/Input';
// import { AddressContext } from '../../contexts/AddressContext';
// import { AuthContext, useAuth } from '../../contexts/AuthContext';
// import axios from '../../config/axios';
// import { updateUser } from '../../api/user';
// import validator from 'validator';
import UserAddress from '../address/UserAddress';
import ProfileDetails from './ProfileDetails';
import AlertGreen from '../../common/AlertGreen';
import { useError } from '../../contexts/ErrorContext';

export default function ProfilePage() {
  const { error } = useError;
  return (
    <>
      {/* <h1>dkjkjlk</h1> */}
      {true && <AlertGreen />}
      <ProfileDetails />
      <div className="divider"></div>
      <UserAddress title="Address" />
    </>
  );
}
