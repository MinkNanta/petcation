import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage.js";
// const navigate = useNavigate();

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const signUp = async (input) => {
    const res = await axios.post("/auth/register", input);
    setAccessToken(res.data.token);
  };
  const login = async (uId, password) => {
    const res = await axios.post("/auth/login", { uId, password });
    setAccessToken(res.data.token);
  };
  const logout = () => {
    removeAccessToken();
  };
  return (
    <AuthContext.Provider value={{ signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
