import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage.js';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [fetch, setFetch] = useState(false);
  const [userOldAddress, setUserOldAddress] = useState({});

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get('/users');
          setUser(res.data.user);

          setUserOldAddress({
            address: res.data.user?.address ?? '',
            provinces: res.data.user?.province ?? '',
            districts: res.data.user?.district ?? '',
            subDistricts: res.data.user?.subDistrict ?? '',
            zipCodes: res.data.user?.zipCode ?? '',
          });
        }
      } catch (err) {
        removeAccessToken();
        navigate('/');
      }
    };
    fetchMe();
  }, [fetch]);

  const signUp = async (input) => {
    const res = await axios.post('/auth/register', input);
    setAccessToken(res.data.token);
    setFetch(!fetch);
  };
  const login = async (uId, password) => {
    const res = await axios.post('/auth/login', { uId, password });
    setAccessToken(res.data.token);
    setFetch(!fetch);
  };
  const logout = () => {
    setUser(null);
    removeAccessToken();
    // setFetch(!fetch);
  };
  return (
    <AuthContext.Provider
      value={{ signUp, login, logout, user, userOldAddress }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };

function useAuth() {
  const ctx = useContext(AuthContext);
  return ctx;
}
export { useAuth };
