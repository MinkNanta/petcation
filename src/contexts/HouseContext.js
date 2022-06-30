import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  getAllHouse,
  getHouseById,
  getHouseByUserId,
  updateHouseByUserId,
} from '../api/house';
import { ErrorContext, useError } from './ErrorContext';

const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const [changedHouseDetail, setChangeHouseDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changedHouseInfo, setChangeHouseInfo] = useState(false);
  const [fetch, setFetch] = useState(false);

  const { error, setError } = useError();
  const [house, setHouse] = useState([]);
  const [houseById, setHouseById] = useState({});
  const [paramsId, setParamsId] = useState(null);
  const [houseByUserID, setHouseByUserID] = useState([]);

  const [houseDetail, setHouseDetail] = useState({});

  const { id } = useParams();

  console.log('houseByUserID', houseByUserID);

  useEffect(() => {
    const fetchAllHouse = async () => {
      try {
        const res = await getAllHouse();
        setHouse(res.data);

        const houseById = await getHouseByUserId();
        setHouseByUserID(houseById.data);

        if (paramsId) {
          const houseById = await getHouseById(paramsId);
          setHouseById(houseById.data);
        }
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    };
    fetchAllHouse();
  }, [paramsId, fetch]);

  const getHouse = async (id) => {
    try {
      const houseById = await getHouseById(id);
      setHouseById(houseById.data);
    } catch (error) {
      setError(error.message);
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

  // const setDefaultValue = () => {
  //   setHouseDetail(houseByUserID);
  // };
  const handleChangeInput = (event) => {
    const values = { ...houseDetail };
    values[event.target.name] = event.target.value;
    setHouseDetail(values);
    if (
      event.target.name === 'name' ||
      event.target.name === 'price' ||
      event.target.name === 'type' ||
      event.target.name === 'petType' ||
      event.target.name === 'size'
    ) {
      setChangeHouseDetail(true);
    } else {
      setChangeHouseInfo(true);
    }
  };

  const handleCheckBox = (event) => {
    const values = { ...houseDetail };
    values[event.target.name] = event.target.checked;
    setHouseDetail(values);
    if (
      event.target.name === 'name' ||
      event.target.name === 'price' ||
      event.target.name === 'type' ||
      event.target.name === 'petType' ||
      event.target.name === 'size'
    ) {
      setChangeHouseDetail(true);
    } else {
      setChangeHouseInfo(true);
    }
  };

  const handleUpdateHouseDetail = async () => {
    try {
      setLoading(true);
      const res = await updateHouseByUserId(houseDetail);
      setLoading(false);

      setChangeHouseInfo(false);
      setChangeHouseDetail(false);
    } catch (error) {
      setError(error.message);
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
        houseDetail,
        // setDefaultValue,
        setHouseDetail,
        handleChangeInput,
        handleCheckBox,
        changedHouseDetail,
        handleUpdateHouseDetail,
        setChangeHouseDetail,
        fetch,
        setFetch,
        changedHouseInfo,
        setChangeHouseInfo,
        loading,
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
