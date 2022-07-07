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
