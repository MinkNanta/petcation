import { createContext, useContext, useReducer } from 'react';
import CreateHouseReducer, { initial } from '../reducer/CreateHouseReducer';

const CreateHouseContext = createContext();

function CreateHouseContextProvider({ children }) {
  const [{ stagePage }, dispatch] = useReducer(CreateHouseReducer, initial);
  return (
    <CreateHouseContext.Provider value={{ dispatch, stagePage }}>
      {children}
    </CreateHouseContext.Provider>
  );
}

const useCreateHouse = () => {
  const ctx = useContext(CreateHouseContext);
  return ctx;
};

export default CreateHouseContextProvider;

export { useCreateHouse };
