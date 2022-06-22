import React, { Children } from "react";

export default function BtnIcon({ icon, htmlFor }) {
  return (
    <div
      class="w-7 h-7 bg-gray-100 rounded-full text-gray-500 p-1"
      htmlFor={htmlFor}
    >
      {icon}
    </div>
  );
}
