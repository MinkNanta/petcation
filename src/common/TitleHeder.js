import React, { Children } from 'react';

export default function TitleHeder({ title, children }) {
  return (
    <div className="flex justify-between items-center mb-6 mt-16">
      <h4 className="text-2xl">{title}</h4>
      <div className="flex gap-4">{children}</div>
    </div>
  );
}
