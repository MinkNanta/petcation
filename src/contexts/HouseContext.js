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
  const [houseById, setHouseById] = useState({});
  const [paramsId, setParamsId] = useState(null);
  const [houseByUserID, setHouseByUserID] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    const fetchAllHouse = async () => {
      try {
        const res = await getAllHouse();
        setHouse(res.data);
        if (paramsId) {
          const houseById = await getHouseById(paramsId);
          setHouseById(houseById.data);
          console.log(houseById.data);
        }
      } catch (err) {
        setError(err.massage);
        console.log(err);
      }
    };
    fetchAllHouse();
  }, [paramsId]);

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

  return (
    <HouseContext.Provider
      value={{
        house,
        houseById,
        getHouse,
        houseByUserID,
        getHouseByUser,
        setParamsId,
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
