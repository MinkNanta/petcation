import {
  ChevronRightIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function MenuIcon({ to, title, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center ${
        active ? "bg-gray-200" : ""
      } px-3 py-2 rounded-2xl gap-2`}
    >
      <div className="w-5 h-5 text-gray-500">
        <PresentationChartBarIcon />
      </div>
      <p className="text-gray-800 text-right">{title}</p>
    </Link>
  );
}
