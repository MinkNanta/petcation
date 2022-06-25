import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

function Logout() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logout}>
        <p>Sign Out</p>
      </button>
    </div>
  );
}

export default Logout;
