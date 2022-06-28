import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';

const AddressContext = createContext();

function AddressContextProvider({ children }) {
  const [dropdownAddress, setDropdownAddress] = useState({
    provinces: [],
    districts: [],
    subDistricts: [],
    zipCodes: '',
  });

  console.log(dropdownAddress);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await axios.get('/address/provinces');

        console.log(res);
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

  const getDstricts = async (provinceId) => {
    console.log(provinceId);
    try {
      const res = await axios.get(`/address/districts/${provinceId}`);
      console.log(res);
      setDropdownAddress((dropdownAddress) => ({
        ...dropdownAddress,
        districts: res.data.districts,
      }));
    } catch (error) {}
  };

  const getSubDstricts = async (districtId) => {
    console.log(districtId);
    try {
      const res = await axios.get(`/address/subdistricts/${districtId}`);
      console.log(res);
      setDropdownAddress((dropdownAddress) => ({
        ...dropdownAddress,
        subDistricts: res.data.subDistricts,
      }));
    } catch (error) {}
  };

  return (
    <AddressContext.Provider
      value={{
        getSubDstricts,
        getDstricts,
        dropdownAddress,
        setDropdownAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;

export { AddressContext };
