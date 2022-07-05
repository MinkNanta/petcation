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
  disabled,
  ...props
}) {
  return (
    <div className="form-control w-full mb-1">
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
      <input
        name={name}
        disabled={disabled}
        // defaultValue={value}
        value={value}
        type={type}
        placeholder={
          placeholder
            ? placeholder
            : `Please Enter Your ${name ? name : 'Input'}`
        }
        className="input"
        onChange={onChange}
        {...props}
      />
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
