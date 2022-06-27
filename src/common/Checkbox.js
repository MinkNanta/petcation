import React from 'react';

export default function Checkbox({
  title,
  onChange,
  onClick,
  value,
  name,
  checked,
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-secondary w-5 h-5 rounded-1"
          onChange={onChange}
          onClick={onClick}
          // value={value}
          name={name}
          checked={checked}
        />
        <span className="label-text text-left w-full text-gray-600">
          {title}
        </span>
      </label>
    </div>
  );
}
