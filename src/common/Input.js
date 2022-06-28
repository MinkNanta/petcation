import React, { useState } from 'react';

export default function Input({
  label,
  onChange,
  placeholder,
  errMsg,
  error,
  value,
  type,
  option,
  name,
  // defaultValue,
}) {
  return (
    <div className="form-control w-full mb-3">
      <label className="space-x-1">
        <span className="label-text">{label}</span>
        <span className="label-text text-gray-500">{option}</span>
      </label>
      <input
        name={name}
        // defaultValue={defaultValue}
        defaultValue={value}
        type={type}
        placeholder={
          placeholder
            ? placeholder
            : `Please Enter Your ${name ? name : 'This Input'}`
        }
        className="input"
        onChange={onChange}
      />
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
