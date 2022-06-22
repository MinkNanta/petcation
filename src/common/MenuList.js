import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function MenuList({ to, title }) {
  return (
    <Link to={to} className="flex justify-between ">
      <p>{title}</p>
      <div className="w-5 h-5">
        <ChevronRightIcon />
      </div>
    </Link>
  );
}
