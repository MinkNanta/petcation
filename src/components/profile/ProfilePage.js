import InputDropdown from '../../common/InputDropdown';
import { useContext, useEffect, useState } from 'react';
import Input from '../../common/Input';
import { AddressContext } from '../../contexts/AddressContext';
import { AuthContext, useAuth } from '../../contexts/AuthContext';
import axios from '../../config/axios';
import { updateUser } from '../../api/user';
import validator from 'validator';
import UserAddress from '../address/UserAddress';
import ProfileDetails from './ProfileDetails';

export default function ProfilePage() {
  return (
    <>
      <ProfileDetails />
      <div className="divider"></div>
      <UserAddress title="Address" />
    </>
  );
}
