// import React from 'react';
import hero from '../../assets/img/hero.png';
import Input from '../../common/Input';

export default function Hero() {
  return (
    <div className="relative h-[90vh] overflow-hidden z-0">
      <div className="w-screen top-0">
        <img src={hero} alt="hero" className="w-full" />
      </div>
      <div className="top-0 absolute w-screen h-[90vh]">
        <div className="mainContainer h-full flex flex-col mt-40 content-center">
          <h1 className="text-6xl text-white">
            Find the <span className="text-orange-500">Perfect</span> <br />
            Stay for Your Pet.
          </h1>
          <Input />
        </div>
      </div>
    </div>
  );
}
