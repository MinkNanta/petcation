import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const AddressContext = createContext();

function AddressContextProvider({ children }) {
  const [dropdownAddress, setDropdownAddress] = useState({
    provinces: [],
    districts: [],
    subDistricts: [],
    zipCodes: "",
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await axios.get("/address/provinces");
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

  return (
    <AddressContext.Provider value={{ dropdownAddress, setDropdownAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;

export { AddressContext };
