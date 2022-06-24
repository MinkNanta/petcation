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
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get('/user/');
          setUser(res.data.user);
        }
      } catch (err) {
        removeAccessToken();
        navigate('/');
      }
    };
    fetchMe();
  }, []);

  const signUp = async (input) => {
    const res = await axios.post('/auth/register', input);
    setAccessToken(res.data.token);
  };
  const login = async (uId, password) => {
    const res = await axios.post('/auth/login', { uId, password });
    setAccessToken(res.data.token);
  };
  const logout = () => {
    removeAccessToken();
  };
  return (
    <AuthContext.Provider value={{ signUp, login, logout, user }}>
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
