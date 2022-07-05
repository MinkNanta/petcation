import { CheckCircleIcon } from '@heroicons/react/outline';
import React, { useState, useRef, useEffect } from 'react';
import { useError } from '../contexts/ErrorContext';

export default function AlertGreen({ message }) {
  const { feedback, setFeedback } = useError();
  const [open, setOpen] = useState(false);

  const toastEl = useRef();

  useEffect(() => {
    if (feedback) {
      setOpen(!open);
      setTimeout(() => setFeedback(null), 6000);
    }
  }, [feedback]);

  return (
    <>
      {feedback && (
        <div
          ref={toastEl}
          className=" slide-top space-x-2 text-white bg-green-600/80 rounded-2xl p-3  my-3 fixed bottom-0 w-auto left-9 z-50"
        >
          <CheckCircleIcon className="w-4 h-4 inline-flex" />
          <p className="text-xs h-full inline-flex">{feedback}</p>
        </div>
      )}
    </>
  );
}
