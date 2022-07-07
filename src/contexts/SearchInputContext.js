import { createContext, useContext, useEffect, useState } from 'react';

const SearchInputContext = createContext();

function SearchInputContextProvider({ children }) {
  const [body, setBody] = useState({
    province: '',
    petType: '',
    amountPet: 1,
    checkInDate: '',
    checkOutDate: '',
  });
  const [range, setRange] = useState({});
  const [houseLimit, setHouseLimit] = useState([]);
  const [activeDate, setActiveDate] = useState(false);

  const [petValue, setPetValue] = useState('');
  const [dog, setDog] = useState(false);
  const [cat, setCat] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  return (
    <SearchInputContext.Provider
      value={{
        body,
        setBody,
        range,
        setRange,
        houseLimit,
        setHouseLimit,
        activeDate,
        setActiveDate,
        petValue,
        setPetValue,
        dog,
        setDog,
        cat,
        setCat,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
}

function useSearchInput() {
  const ctx = useContext(SearchInputContext);
  return ctx;
}

export default SearchInputContextProvider;
export { SearchInputContext, useSearchInput };
