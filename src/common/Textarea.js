import React, { useState } from "react";

export default function Input({ label, onChange, placeholder, errMsg, error }) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea bg-gray-100 text-gray-500 rounded-2xl "
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>

      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
