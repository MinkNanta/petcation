import React from 'react';
import EmtpyState from './EmtpyState';
import { useSearchInput } from '../contexts/SearchInputContext.js';

export default function EmtpyStateSearch() {
  const { body, setBody, range, setRange } = useSearchInput();

  return (
    <div className="w-full col-span-4 ">
      <EmtpyState
        title="No exact matches"
        description="Try changing or removing some of your filters or adjusting your search area."
        className="bg-gray-50 w-full text-left px-10 rounded-3xl py-14"
      >
        <div className="my-4 w-[220px]">
          <button
            className="btn-small bg-gray-200"
            onClick={() => {
              setBody({
                province: '',
                petType: '',
                amountPet: 1,
                checkInDate: '',
                checkOutDate: '',
              });
              setRange({});
            }}
          >
            Remove filter
          </button>
        </div>
      </EmtpyState>
    </div>
  );
}
