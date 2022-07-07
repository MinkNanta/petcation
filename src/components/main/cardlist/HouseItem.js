import { useState } from 'react';

function HouseItem({ el }) {
  const [showPic, setShowPic] = useState(false);

  // console.log(JSON.parse(el.location)?.lng);

  return (
    <div
      onMouseOver={() => {
        setShowPic(true);
      }}
      onMouseOut={() => {
        setShowPic(false);
      }}
    >
      <div className="hover:bg-black hover:text-white bg-white font-bold w-fit h-[20px] px-1 flex items-center rounded-md">
        {el.price}$
      </div>
      {showPic && (
        <div
          className={` bg-white w-[200px] h-[250px] rounded-2xl overflow-hidden`}
        >
          <img
            className={`w-[200px] h-[150px] `}
            src={JSON.parse(el.image)[0]}
          />
          <div className="m-3">
            <div className="text-[16px]">{el.name}</div>
            <div className="text-[16px] my-2 text-gray-500">
              {el.type === 'SINGLE_ROOM' ? 'SINGLE ROOM' : el.type}
            </div>
            <div className="text-[16px] ">฿ {el.price} Day </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HouseItem;
