import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ErrorContextProvider from "./contexts/ErrorContext";
import AddressContextProvider, {
  AddressContext,
} from "./contexts/AddressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorContextProvider>
      <AuthContextProvider>
        <AddressContextProvider>
          <App />
        </AddressContextProvider>
      </AuthContextProvider>
    </ErrorContextProvider>
  </BrowserRouter>
);
