import React, { useEffect, useState } from 'react';
import card from '../../../assets/img/card.png';
import TransitionCommon from '../../../common/TransitionCommon';

export default function CardItem({
  value: { name, description, price, image, petType, type },
  onClick,
  className,
}) {
  const img = JSON.parse(image);
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setNumber((number) => number + 1);
  //   }, 1000);
  // }, []);
  // const slidePhoto = () => {
  //   setHover(true);
  //   if (number === img.length) {
  //     setNumber(1);
  //     setTimeout(() => {
  //       setNumber((number) => number + 1);
  //     }, 5000);
  //   } else {
  //     setTimeout(() => {
  //       setNumber((number) => number + 1);
  //     }, 5000);
  //   }
  // };

  return (
    <div className="relative">
      <div
        className="space-y-2 cursor-pointer"
        // className="space-y-1 cursor-pointer hover:bg-white hover:rounded-2xl hover:shadow-2xl hover:border hover:border-gray-100 hover:p-3 hover:scale-105 hover:z-50 hover:absolute  hover:-top-4 hover:w-full"
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        // onMouseDown={() => setHover((p) => !p)}
        // onMouseOver={() => setHover(true)}
      >
        <div className="rounded-2xl overflow-hidden h-[240px] w-full  ">
          {!hover && (
            <img
              src={img[0]}
              alt="card"
              className="w-full h-full object-cover "
            />
          )}
          {hover && (
            <img
              src={img[1]}
              alt="card"
              className="w-full h-full object-cover "
            />
          )}
        </div>
        <div className="space-y-2 mt-2">
          <div>
            <p className="text-gray-900 font-semibold ">{name}</p>
            <p className="text-gray-500">
              {petType === 'CAT'
                ? type === 'SINGLE_ROOM'
                  ? 'Single room for Cats'
                  : type === 'CAPSULE'
                  ? 'Capsule for Cats'
                  : 'Cage for Cats'
                : type === 'SINGLE_ROOM'
                ? 'Single room for Dogs'
                : type === 'CAPSULE'
                ? 'Capsule for Dogs'
                : 'Cage for Dogs'}
            </p>
          </div>
          <p>
            <span>฿ {price.toLocaleString('en-EN')} </span>
            <span>night</span>
          </p>
        </div>
      </div>
    </div>
  );
}
