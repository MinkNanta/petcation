import { Fragment, useState } from 'react';
import InputHero from './InputHero';
import { Menu, Popover } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import TransitionCommon from './TransitionCommon';
import { useSearchInput } from '../contexts/SearchInputContext';

// const body = {
//   province: 'bangkok',
//   date: ['2022-07-26', '2022-07-27', '2022-07-28'],
//   petType: 'DOG',
//   amountPet: '4',
// };

export default function DatePicker({ setCheckOut, setCheckIn, handelChange }) {
  const { range, setRange } = useSearchInput();
  const checkOut = range.to + '';

  const checkInValue =
    range.from?.toDateString() === undefined
      ? 'Please pick the first day'
      : range.from?.toDateString() + '  -  ';

  const checkOutValue =
    checkOut === 'undefined' ? '' : range.to?.toDateString();

  const value = checkInValue + checkOutValue;

  const handelDate = (date) => {
    setRange(date);

    const dateFrom = date.from?.toLocaleString() ?? ' ';
    const dateTo = date.to?.toLocaleString() ?? ' ';

    const checkInRes = dateFrom.split('/');
    const checkOutRes = dateTo.split('/');

    const resIn =
      checkInRes[2].slice(0, 4) +
      '-' +
      checkInRes[0] +
      '-' +
      checkInRes[1].padStart(2, '0');

    const resOut =
      checkOutRes[2].slice(0, 4) +
      '-' +
      checkOutRes[0] +
      '-' +
      checkOutRes[1].padStart(2, '0');

    setCheckIn(resIn);
    setCheckOut(resOut);
  };

  return (
    <>
      <Popover className="relative w-full">
        <Popover.Button
          className=" focus:outline-none
        focus:outline-offset-0 w-full"
        >
          <InputHero
            // className="w-[310px]"
            placeholder="Please pick the first day"
            label="Check in"
            type="text"
            value={value}
          />
        </Popover.Button>
        <TransitionCommon>
          <Popover.Panel className="absolute z-10 mt-2">
            <div className="bg-white rounded-3xl p-1 shadow-2xl">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={(date) => handelDate(date)}
              />
            </div>
          </Popover.Panel>
        </TransitionCommon>
      </Popover>
    </>
  );
}
