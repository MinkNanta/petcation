import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ children }) {
  return <div className="text-sm breadcrumbs text-gray-600">{children}</div>;
}
