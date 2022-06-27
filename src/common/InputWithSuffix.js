import React, { useState } from 'react';

export default function InputWithSuffix({
  label,
  onChange,
  placeholder,
  errMsg,
  error,
  value,
  type,
  option,
  suffix,
  name,
}) {
  return (
    <div className="form-control w-full ">
      <label className="space-x-1">
        <span className="label-text">{label}</span>
        <span className="label-text text-gray-500">{option}</span>
      </label>
      <div className="relative">
        <input
          name={name}
          defaultValue={value}
          type={type}
          placeholder={placeholder}
          className="input"
          onChange={onChange}
        />
        <p className="absolute right-3 bottom-3 label-text text-gray-400">
          {suffix}
        </p>
      </div>
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
