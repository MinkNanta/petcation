// import React from 'react';
import {
  CheckIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import hero from '../../assets/img/hero.png';
import Input from '../../common/Input';
import LineH from '../../common/LineH';
import InputHero from '../../common/InputHero';
import DatePicker from '../../common/DatePicker';
import { Popover, Combobox } from '@headlessui/react';
import dogIcon from '../../assets/img/dogIcon.png';
import catIcon from '../../assets/img/catIcon.png';
import TransitionCommon from '../../common/TransitionCommon';
import CardSelect from '../../common/CardSelect';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import { useError } from '../../contexts/ErrorContext';
import { useHouse } from '../../contexts/HouseContext';
import { useSearchInput } from '../../contexts/SearchInputContext';

export default function SearchInput() {
  // const [body, setBody] = useState({
  //   province: '',
  //   petType: '',
  //   amountPet: 1,
  //   checkInDate: '',
  //   checkOutDate: '',
  // });

  const { body, setBody } = useSearchInput();
  const navigate = useNavigate();
  const { setSearchHouse } = useHouse();

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const { error, setError } = useError();
  const handelSubmit = async () => {
    try {
      body.checkInDate = checkIn;
      body.checkOutDate = checkOut;
      console.log('body', body);
      const res = await axios.get(
        `/allHouses/search?province=${body.province}&petType=${body.petType}&amountPet=${body.amountPet}&checkInDate=${body.checkInDate}&checkOutDate=${body.checkOutDate}`,
      );
      console.log(res.data);
      setSearchHouse(res.data);
      navigate('/search');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const [petValue, setPetValue] = useState('');
  const [dog, setDog] = useState(false);
  const [cat, setCat] = useState(false);

  const handelChange = (e) => {
    const value = { ...body };
    value[e.target.name] = e.target.value;
    setBody(value);
  };

  const handelPet = (e) => {
    if (e === 'DOG') {
      setCat(false);
      setDog((p) => !p);
    }
    if (e === 'CAT') {
      setDog(false);
      setCat((p) => !p);
    }
    const value = { ...body };
    if (body.petType === e) {
      value.petType = '';
      setBody(value);
    } else {
      value.petType = e;
      setBody(value);
    }
    setPetValue(
      ' with ' + value.amountPet + ' ' + value.petType.toLocaleLowerCase(),
    );
  };

  const handelAmount = (a) => {
    const value = { ...body };
    if (value.amountPet >= 1) {
      value.amountPet = value.amountPet + a;
      setBody(value);
    } else {
      value.amountPet = 1;
      setBody(value);
    }
    setPetValue(
      ' with ' + value.amountPet + ' ' + value.petType.toLocaleLowerCase(),
    );
  };

  return (
    <div
      className="bg-gray-100 rounded-full 
             mx-auto relative grid grid-cols-12 w-full"
    >
      {/* <div
      className="bg-gray-100 rounded-full 
             mx-auto relative flex w-full"
    > */}
      <div className="w-full col-span-3">
        <InputHero
          name="province"
          className="pl-6"
          label="Location"
          placeholder="Enter a location"
          value={body.province}
          onChange={(e) => handelChange(e)}
        />
      </div>

      <div className="w-full col-span-6 ">
        <DatePicker
          handelChange={handelChange}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
          setBody={setBody}
        />
      </div>

      <Popover className="relative w-full col-span-3">
        <Popover.Button
          className=" focus:outline-none
          focus:outline-offset-0 w-full"
        >
          <InputHero
            label="Pet"
            placeholder="With pet"
            value={petValue}
            onChange={(e) => {}}
          />
        </Popover.Button>
        <TransitionCommon>
          <Popover.Panel className="absolute z-10 mt-2 right-0 ">
            <div className=" bg-white rounded-3xl py-8 px-6 space-y-6 shadow-xl ">
              <div className="flex items-center justify-between gap-2">
                <CardSelect
                  action={dog}
                  icon={dogIcon}
                  title="Dog"
                  onClick={() => handelPet('DOG')}
                />
                <CardSelect
                  action={cat}
                  icon={catIcon}
                  title="Cat"
                  onClick={() => handelPet('CAT')}
                />
              </div>

              <div className="flex gap-8 items-center justify-between">
                <p>Amount</p>
                <div className="flex items-center justify-between gap-2">
                  <button
                    className="btn-action "
                    onClick={() =>
                      body.amountPet === 1 ? handelAmount(0) : handelAmount(-1)
                    }
                  >
                    <MinusIcon className="w-3 h-3 " />
                  </button>
                  <p className="w-[24px] text-center text-gray-500">
                    {body.amountPet}
                  </p>
                  <button
                    className=" btn-action "
                    onClick={() => handelAmount(1)}
                  >
                    <PlusIcon className="w-3 h-3 " />
                  </button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </TransitionCommon>
      </Popover>

      <div
        className="bg-orange-500 p-2 rounded-full centerAll absolute right-2 top-2 hover:bg-orange-600/90 active:bg-orange-600 hover:shadow-md"
        onClick={() => handelSubmit()}
      >
        <SearchIcon className="w-6 h-6 m-auto text-white" />
      </div>
    </div>
  );
}
