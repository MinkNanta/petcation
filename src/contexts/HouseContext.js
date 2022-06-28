import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { getAllHouse, getHouseById, getHouseByUserId } from '../api/house';
import { ErrorContext, useError } from './ErrorContext';

const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const { error, setError } = useError();
  const [house, setHouse] = useState([]);
  const [houseById, setHouseById] = useState([]);
  const [houseByUserID, setHouseByUserID] = useState([]);

  const [houseDetail, setHouseDetail] = useState({});

  // const { id } = useParams();

  useEffect(() => {
    const fetchAllHouse = async () => {
      try {
        const res = await getAllHouse();
        setHouse(res.data);
      } catch (err) {
        setError(err.massage);
        console.log(err);
      }
    };
    fetchAllHouse();
  }, []);

  const getHouse = async (id) => {
    try {
      const houseById = await getHouseById(id);
      setHouseById(houseById.data);
    } catch (error) {
      setError(error.massage);
    }
  };

  const getHouseByUser = async () => {
    try {
      const houseById = await getHouseByUserId();
      setHouseByUserID(houseById.data);
    } catch (error) {
      setError(error.massage);
    }
  };

  console.log('houseByUserID', houseByUserID);

  const setDefaultValue = () => {
    setHouseDetail(houseByUserID);
  };
  const handleChangeInput = (event) => {
    const values = { ...houseDetail };
    values[event.target.name] = event.target.value;
    setHouseDetail(values);
  };

  const handleCheckBox = (event) => {
    const values = { ...houseDetail };
    values[event.target.name] = event.target.checked;
    setHouseDetail(values);
  };

  return (
    <HouseContext.Provider
      value={{
        house,
        houseById,
        getHouse,
        houseByUserID,
        getHouseByUser,
        houseDetail,
        setDefaultValue,
        setHouseDetail,
        handleChangeInput,
        handleCheckBox,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}

const useHouse = () => {
  const ctx = useContext(HouseContext);
  return ctx;
};

export default HouseContextProvider;

export { HouseContext, useHouse };
