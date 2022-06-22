import React, { useState } from "react";

export default function InputDropdown({
  label,
  onChange,
  errMsg,
  error,
  option,
  children,
}) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="select select-bordered w-full bg-gray-100 text-gray-500 rounded-2xl border-0 focus:border-0 text-xs font-normal"
        onChange={onChange}
      >
        {children}
      </select>
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
