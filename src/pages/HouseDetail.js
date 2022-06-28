import React, { useEffect, useState } from 'react';

import detail from '../assets/mockup/MOCK_DATA_HOUSE_DETAIL.json';
import Checkbox from '../common/Checkbox';
import Input from '../common/Input';
import InputDropdown from '../common/InputDropdown';
import InputWithSuffix from '../common/InputWithSuffix';
import Listing from '../common/Listing';
import Textarea from '../common/Textarea';
import TitleHeder from '../common/TitleHeder';
import UserAddress from '../components/address/UserAddress';
import HouseDetailForm from '../components/myhouse/myHouseDetail/HouseDetailForm';
import HouseInfoFrom from '../components/myhouse/myHouseDetail/HouseInfoFrom';
import ProfileDetails from '../components/profile/ProfileDetails';
import { useAddress } from '../contexts/AddressContext';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';

export default function HouseDetail() {
  const { houseByUserID, getHouseByUser, setDefaultValue, houseDetail } =
    useHouse();

  const [editAddress, SetEditAddress] = useState(false);
  const [editHouseDetail, SetEditHouseDetail] = useState(false);
  const { userOldAddress } = useAuth();

  const { changedAddress, setUserAddress, setChangeAddress } = useAddress();

  useEffect(() => {
    getHouseByUser();
  }, []);

  useEffect(() => {
    setDefaultValue();
  }, [houseByUserID]);

  console.log('data', houseByUserID);
  console.log(houseDetail);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-4 ">
          {detail.map((el) => (
            <div className="rounded-2xl overflow-hidden">
              <img
                src={el.photo}
                alt="house"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="space-x-4">
          <button className="btn-text-line">Remove all</button>
          <button className="btn-text-line">Edit Photo</button>
        </div>
      </div>
      <>
        <TitleHeder title="House address">
          {changedAddress && (
            <>
              <button className="btn-small">Save</button>
              <button
                className="btn-text"
                onClick={() => {
                  SetEditAddress((p) => !p);
                  setChangeAddress(false);
                  setUserAddress(userOldAddress);
                }}
              >
                Cancel
              </button>
            </>
          )}
        </TitleHeder>
        <UserAddress onClick={() => SetEditAddress((p) => !p)} />
        <div className="divider"></div>
      </>
      <>
        <TitleHeder title="House detail">
          {true && (
            <>
              <button className="btn-small">Save</button>
              <button
                className="btn-text"
                onClick={() => {
                  SetEditAddress((p) => !p);
                }}
              >
                Cancel
              </button>
            </>
          )}
        </TitleHeder>
        <HouseDetailForm onClick={() => SetEditAddress((p) => !p)} />
        <div className="divider"></div>
      </>

      <HouseInfoFrom />
    </div>
  );
}
