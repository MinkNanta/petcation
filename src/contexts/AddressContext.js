import { createContext, useContext, useEffect, useState } from 'react';
import { updateUser } from '../api/user';
import axios from '../config/axios';
import { useAuth } from './AuthContext';
import { useError } from './ErrorContext';

const AddressContext = createContext();

function AddressContextProvider({ children }) {
  const [changedAddress, setChangeAddress] = useState(false);
  const { userOldAddress } = useAuth();
  const [dropdownAddress, setDropdownAddress] = useState({
    provinces: [],
    districts: [],
    subDistricts: [],
    zipCodes: '',
  });

  const [provincesId, setProvincesID] = useState('');
  const [districtsId, setDistrictsID] = useState('');
  const [loading, setLoading] = useState(false);

  const [userAddress, setUserAddress] = useState({});
  const { setError, setFeedback } = useError();

  useEffect(() => {
    setUserAddress(userOldAddress);
  }, [userOldAddress]);

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

  useEffect(() => {
    try {
      if (userOldAddress.provinces) {
        const res = dropdownAddress.provinces.find(
          (el) => el.nameEn === userOldAddress.provinces,
        );
        setProvincesID(res.id);
      }
    } catch (error) {
      console.log(error);
    }
  }, [userOldAddress.provinces, dropdownAddress.provinces]);

  useEffect(() => {
    try {
      if (userOldAddress.districts) {
        const res = dropdownAddress.districts.find(
          (el) => el.nameEn === userOldAddress.districts,
        );
        setDistrictsID(res?.id);
      }
    } catch (error) {
      console.log(error);
    }
  }, [userOldAddress.districts, dropdownAddress.districts]);

  useEffect(() => {
    const getDstricts = async () => {
      try {
        const res = await axios.get(`/address/districts/${provincesId}`);
        setDropdownAddress((dropdownAddress) => ({
          ...dropdownAddress,
          districts: res.data.districts,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    getDstricts();
  }, [userAddress?.provinces]);

  useEffect(() => {
    const getSubDstricts = async () => {
      try {
        const res = await axios.get(`/address/subdistricts/${districtsId}`);
        setDropdownAddress((dropdownAddress) => ({
          ...dropdownAddress,
          subDistricts: res.data.subDistricts,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    getSubDstricts();
  }, [userAddress?.districts, districtsId]);

  const handleChangeAddress = (event) => {
    setChangeAddress(true);
    const values = { ...userAddress };
    values[event.target.name] = event.target.value;
    setUserAddress(values);

    if (event.target.name === 'provinces') {
      const matchObj = dropdownAddress.provinces.find(
        (el) => el.nameEn == event.target.value,
      );
      setProvincesID(matchObj.id);
      setUserAddress((p) => ({
        ...p,
        districts: '',
        subDistricts: '',
        zipCodes: '',
      }));
    }

    if (event.target.name === 'districts') {
      const matchObj = dropdownAddress.districts.find(
        (el) => el.nameEn == event.target.value,
      );
      setDistrictsID(matchObj.id);
      setUserAddress((p) => ({
        ...p,
        subDistricts: '',
        zipCodes: '',
      }));
    }

    if (event.target.name === 'subDistricts') {
      const matchObj = dropdownAddress.subDistricts.find(
        (el) => el.nameEn == event.target.value,
      );
      setUserAddress((p) => ({ ...p, zipCodes: matchObj.zipCode }));
    }
  };

  const handleUpdateAddress = async () => {
    try {
      setLoading(true);
      await updateUser(userAddress);
      setChangeAddress((p) => !p);
      setLoading(false);
      setFeedback('Your Address Updated');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        dropdownAddress,
        setDropdownAddress,
        handleChangeAddress,
        setUserAddress,
        userAddress,
        changedAddress,
        setChangeAddress,
        handleUpdateAddress,
        loading,
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
