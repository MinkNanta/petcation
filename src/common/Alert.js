import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import React, { useState, useRef, useEffect } from 'react';
import { useError } from '../contexts/ErrorContext';

export default function Alert({ message }) {
  const { error, setError } = useError();
  const [open, setOpen] = useState(false);
  //   const myTimeout = setTimeout('ddd', 5000);

  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      setOpen(!open);
      setTimeout(() => setError(null), 6000);
    }
  }, [error]);

  return (
    <>
      {error && (
        <div
          ref={toastEl}
          className=" space-x-2 text-red-400 bg-red-50 rounded-2xl p-3 w-full my-3"
        >
          <QuestionMarkCircleIcon className="w-4 h-4 inline-flex" />
          <p className="text-xs h-full inline-flex">{error}</p>
        </div>
      )}
    </>
  );
}
