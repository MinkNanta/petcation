import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function MenuList({ to, title }) {
  return (
    <Link to={to} className="flex justify-between items-center py-2">
      <p className="text-gray-800">{title}</p>
      <div className="w-5 h-5 text-gray-500">
        <ChevronRightIcon />
      </div>
    </Link>
  );
}
