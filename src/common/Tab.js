import React from 'react';
import { Link } from 'react-router-dom';

export default function Tab({ children }) {
  return <div className="tabs mt-4 flex flex-row">{children}</div>;
}
