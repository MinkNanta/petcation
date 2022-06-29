import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';

export default function Carousel({ images }) {
  const [activePic, setActivePic] = useState(1);

  useEffect(() => {}, [activePic]);

  return (
    <>
      <div id="main-carousel" className="carousel w-full h-full rounded-2xl">
      <ResponsiveCarousel
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, isSelected) => {
          return (
            <div
              className={`w-3 h-3 rounded-full inline-block mx-2 ${
                isSelected ? 'bg-orange-500' : 'bg-white'
              }`}
              onClick={clickHandler}
            ></div>
          );
        }}
      >
        {images.map((el, idx) => (
          <div id={`${idx}`} className="carousel-item w-full h-96">
            <img src={el} className="w-full object-cover" />
          </div>
        ))}
      </ResponsiveCarousel>
      </div>
      {/* <div className="flex justify-center w-full py-2 gap-2 relative">
        <div className="absolute bottom-8 flex flex-row">
          {images.map((el, idx) => (
            <>
              <a
                // href={`#${idx}`}
                className={`w-3 h-3 rounded-full ${
                  activePic === idx ? 'bg-orange-500' : 'bg-white'
                }`}
                onClick={() => setActivePic(idx)}
              ></a>
              <div className="w-3"></div>
            </>
          ))}
        </div>
      </div> */}
    </>
  );
}
