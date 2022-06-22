import React, { useState } from "react";

export default function Input({
  label,
  onChange,
  placeholder,
  errMsg,
  error,
  value,
  type,
  option,
}) {
  return (
    <div className="form-control w-full">
      <label className="space-x-1">
        <span className="label-text">{label}</span>
        <span className="label-text text-gray-500">{option}</span>
      </label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className="input"
        onChange={onChange}
      />
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
