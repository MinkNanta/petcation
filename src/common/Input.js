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
<<<<<<< HEAD
  ...prop
=======
  disabled,
>>>>>>> 71bd0b553e0b54defa40e1e51d24c7335ce0da6c
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
<<<<<<< HEAD
        defaultValue={value}
=======
        disabled={disabled}
        // defaultValue={value}
        value={value}
>>>>>>> 71bd0b553e0b54defa40e1e51d24c7335ce0da6c
        type={type}
        placeholder={
          placeholder
            ? placeholder
            : `Please Enter Your ${name ? name : 'This Input'}`
        }
        className="input"
        onChange={onChange}
        {...prop}
      />
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
