import React from 'react';

export default function InputHero({
  active,
  placeholder,
  className,
  label,
  ...props
}) {
  return (
    <div className={className ? className : 'grow'}>
      <p className="text-xs text-gray-400 -mb-1 text-left">{label}</p>
      <input className={'inputWhite'} placeholder={placeholder} {...props} />
    </div>
  );
}
