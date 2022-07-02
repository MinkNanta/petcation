import { Fragment, useState } from 'react';
import InputHero from './InputHero';
import { Menu } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
export default function Demo() {
  const [range, setRange] = useState({});
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const body = {
    province: 'bangkok',
    date: ['2022-07-26', '2022-07-27', '2022-07-28'],
    petType: 'DOG',
    amountPet: '4',
  };

  // const checkIn = range.from + '';
  // const checkOut = range.to + '';

  // if (range.from === undefined) {
  //   setRange({
  //     from: 'Please pick the first day',
  //     to: ' ',
  //   });
  // }

  // if (range.from !== undefined) {
  //   setCheckIn('' + range.from.slice(4, 16));
  // }

  // const value = checkIn.slice(4, 16) + ' to ' + checkOut.slice(4, 16);
  // const value = checkIn.slice(4, 16) + ' to ' + checkOut.slice(4, 16);

  // console.log(range);

  return (
    <>
      <Menu>
        <Menu.Button>
          <div className="flex relative">
            <InputHero
              placeholder="Please pick the first day"
              className="w-[240px]"
              label="Check in"
              type="text"
              value={range.from + range.to}
            />

            {/* <InputHero
              className="w-[140px]"
              label="Check out"
              type="text"
              value={checkOut.slice(4, 16)}
            /> */}
          </div>
        </Menu.Button>
        <Menu.Items className="absolute mt-16 ml-56">
          <div className="bg-white rounded-3xl p-1 shadow-2xl">
            <DayPicker mode="range" selected={range} onSelect={setRange} />
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
}
