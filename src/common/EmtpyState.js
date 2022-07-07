import React from 'react';

export default function EmtpyState({
  title,
  description,
  className,
  children,
}) {
  return (
    <div
      className={
        className
          ? className
          : 'bg-gray-50 w-full text-center px-10 rounded-3xl py-14'
      }
    >
      <h4 className="text-gray-600">{title}</h4>
      <p className="text-gray-400">{description}</p>
      {children}
    </div>
  );
}
