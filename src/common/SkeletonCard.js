import React from 'react';

export default function SkeletonCard() {
  return (
    <div className=" animate-pulse space-y-3 ">
      <div className="rounded-2xl bg-gray-200 h-40"></div>
      <div className="space-y-2">
        <div className="rounded-2xl bg-gray-200  h-4"></div>
        <div className="rounded-2xl bg-gray-200  h-4"></div>
        <div className="rounded-2xl bg-gray-200  h-4"></div>
      </div>
    </div>
  );
}
