import React from 'react';
import { Link } from 'react-router-dom';

function TitleProfile() {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/profile'}>my account</Link>
        </li>
      </ul>
    </div>
  );
}

export default TitleProfile;
