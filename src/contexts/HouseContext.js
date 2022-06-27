import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { getAllHouse, getHouseById } from '../api/house';
import { ErrorContext, useError } from './ErrorContext';

const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const { error, setError } = useError();
  const [house, setHouse] = useState([]);
  const [houseById, setHouseById] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchAllHouse = async () => {
      try {
        const res = await getAllHouse();
        setHouse(res.data);
        const houseById = await getHouseById(id);
        setHouseById(houseById.data);
      } catch (err) {
        setError(err.massage);
        console.log(err);
      }
    };
    fetchAllHouse();
  }, []);

  return (
    <HouseContext.Provider value={{ house, houseById }}>
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
