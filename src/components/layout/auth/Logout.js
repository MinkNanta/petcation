import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button className="btn btn-outline" onClick={logout}>
        Sign Out
      </button>
    </div>
  );
}

export default Logout;
