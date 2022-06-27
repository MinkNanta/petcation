import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import ErrorContextProvider from './contexts/ErrorContext';
import AddressContextProvider from './contexts/AddressContext';
import HouseContextProvider from './contexts/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ErrorContextProvider>
      <AuthContextProvider>
        <AddressContextProvider>
          <HouseContextProvider>
            <App />
          </HouseContextProvider>
        </AddressContextProvider>
      </AuthContextProvider>
    </ErrorContextProvider>
  </BrowserRouter>,
);
