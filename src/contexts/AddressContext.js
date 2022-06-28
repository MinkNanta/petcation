import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { useAuth } from './AuthContext';

const AddressContext = createContext();

function AddressContextProvider({ children }) {
  const [dropdownAddress, setDropdownAddress] = useState({
    provinces: [],
    districts: [],
    subDistricts: [],
    zipCodes: '',
  });

  const { userOldAddress } = useAuth();
  const [userAddress, setUserAddress] = useState(userOldAddress);

  const [changedAddress, setChangeAddress] = useState(false);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await axios.get('/address/provinces');
        setDropdownAddress((dropdownAddress) => ({
          ...dropdownAddress,
          provinces: res.data.provinces,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchProvinces();
  }, []);
  console.log(dropdownAddress);

  const getDstricts = async (provinceId) => {
    try {
      const res = await axios.get(`/address/districts/${provinceId}`);
      setDropdownAddress((dropdownAddress) => ({
        ...dropdownAddress,
        districts: res.data.districts,
      }));
    } catch (error) {}
  };

  const getSubDstricts = async (districtId) => {
    try {
      const res = await axios.get(`/address/subdistricts/${districtId}`);
      setDropdownAddress((dropdownAddress) => ({
        ...dropdownAddress,
        subDistricts: res.data.subDistricts,
      }));
    } catch (error) {}
  };
  const getZip = async (districtId) => {
    try {
      const res = await axios.get(`/address/subdistricts/${districtId}`);
      setDropdownAddress((dropdownAddress) => ({
        ...dropdownAddress,
        subDistricts: res.data.subDistricts,
      }));
    } catch (error) {}
  };

  const handleChangeAddress = (event) => {
    setChangeAddress(true);
    const values = { ...userAddress };
    values[event.target.name] = event.target.value;
    setUserAddress(values);

    if (event.target.name === 'provinces') {
      const matchObj = dropdownAddress.provinces.find(
        (el) => el.nameEn == event.target.value,
      );
      getDstricts(matchObj.id);
    }

    if (event.target.name === 'districts') {
      const matchObj = dropdownAddress.districts.find(
        (el) => el.nameEn == event.target.value,
      );
      getSubDstricts(matchObj.id);
    }

    if (event.target.name === 'subDistricts') {
      const matchObj = dropdownAddress.subDistricts.find(
        (el) => el.nameEn == event.target.value,
      );
      setUserAddress((p) => ({ ...p, zipCodes: matchObj.zipCode }));
    }
  };

  return (
    <AddressContext.Provider
      value={{
        getSubDstricts,
        getDstricts,
        dropdownAddress,
        setDropdownAddress,
        handleChangeAddress,
        setUserAddress,
        userAddress,
        changedAddress,
        setChangeAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

const useAddress = () => {
  const ctx = useContext(AddressContext);
  return ctx;
};

export default AddressContextProvider;

export { AddressContext, useAddress };
