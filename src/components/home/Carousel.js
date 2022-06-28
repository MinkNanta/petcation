import { useState } from "react";

export default function Carousel({ images }) {
  const [activePic, setActivePic] = useState(1);

  return (
    <>
      <div className="carousel w-full h-96 rounded-2xl">
        {images.map((el, idx) => (
          <div id={`${idx}`} className="carousel-item w-full">
            <img src={el} className="w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 relative">
        <div className="absolute bottom-8 flex flex-row">
          {images.map((el, idx) => (
            <>
              <a
                href={`#${idx}`}
                className={`w-3 h-3 rounded-full ${
                  activePic == idx ? "bg-orange-500" : "bg-white"
                }`}
                onClick={() => setActivePic(idx)}
              ></a>
              <div className="w-3"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
