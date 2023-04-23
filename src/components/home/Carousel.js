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
      <div
        id="main-carousel"
        className=" w-full h-full rounded-2xl overflow-hidden"
      >
        {images.length === 1 ? (
          <div className="carousel-item w-full ">
            <img
              src={
                'https://plus.unsplash.com/premium_photo-1664371207179-d4ea25479ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'
              }
              className="w-full hfull object-cover"
              alt="petcation"
            />
          </div>
        ) : (
          <ResponsiveCarousel
            showThumbs={false}
            showStatus={false}
            renderIndicator={(clickHandler, isSelected) => {
              return (
                <div
                  className={`w-2 h-2 rounded-full inline-block mx-1 ${
                    isSelected ? 'bg-orange-500' : 'bg-white'
                  }`}
                  onClick={clickHandler}
                ></div>
              );
            }}
          >
            {images.map((el, idx) => (
              <div id={`${idx}`} className="carousel-item w-full h-96">
                <img
                  src={
                    'https://plus.unsplash.com/premium_photo-1664371207179-d4ea25479ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'
                  }
                  className="w-full object-cover"
                />
              </div>
            ))}
          </ResponsiveCarousel>
        )}
      </div>
    </>
  );
}
