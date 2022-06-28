import React, { useState } from 'react';

export default function InputWithSuffix({
  label,
  onChange,
  errMsg,
  error,
  value,
  type,
  option,
  suffix,
  name,
  disabled,
  placeholder,
}) {
  return (
    <div className="form-control w-full ">
      <label className="space-x-1">
        <span className={`label-text ${disabled && 'text-gray-400'}`}>
          {label}
        </span>
        <span
          className={`label-text ${disabled && 'text-gray-400'}text-gray-500`}
        >
          {option}
        </span>
      </label>
      <div className="relative">
        <input
          name={name}
          defaultValue={value}
          type={type}
          className="input"
          onChange={onChange}
          placeholder={
            placeholder
              ? placeholder
              : `Please Enter Your ${name ? name : 'This Input'}`
          }
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
