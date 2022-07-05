import { Fragment, useState } from 'react';
import InputHero from './InputHero';
import { Menu, Popover } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import TransitionCommon from './TransitionCommon';

// const body = {
//   province: 'bangkok',
//   date: ['2022-07-26', '2022-07-27', '2022-07-28'],
//   petType: 'DOG',
//   amountPet: '4',
// };

export default function DatePicker({ setCheckOut, setCheckIn, handelChange }) {
  const [range, setRange] = useState({});
  const checkOut = range.to + '';

  const checkInValue =
    range.from?.toDateString() === undefined
      ? 'Please pick the first day'
      : range.from?.toDateString() + '  -  ';

  const checkOutValue =
    checkOut === 'undefined' ? '' : range.to?.toDateString();

  const value = checkInValue + checkOutValue;

  // console.log(range.from?.toJSON().slice(0, 10));
  // console.log(range.to?.toJSON().slice(0, 10));

  // console.log(range.from?.toDateString().slice(4));
  // console.log(range.to?.toDateString().slice(4));

  setCheckIn(range.from?.toJSON().slice(0, 10));
  setCheckOut(range.to?.toJSON().slice(0, 10));

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
              <DayPicker mode="range" selected={range} onSelect={setRange} />
            </div>
          </Popover.Panel>
        </TransitionCommon>
      </Popover>
    </>
  );
}
