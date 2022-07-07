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
      <div className="hover:bg-black hover:text-white bg-white font-bold w-fit p-2 flex items-center rounded-xl shadow-xl" >
        {el.price}$
      </div>
      {showPic && (
        <div
          className="bg-white w-[200px] h-[250px] rounded-2xl overflow-hidden z-[5000] mt-2 shadow-xl absolute"
        >
          <div className='w-[200px] h-[150px]'>
          <img
            className="w-full h-full object-cover"
            src={JSON.parse(el.image)[0]}
          />
          </div>
          <div className="m-3 ">
            <h6 className="text-[16px] font-medium" style={{fontFamily: "poppins"}}>{el.name}</h6>
            <p style={{fontFamily: "poppins"}} className="text-[14px] text-gray-500 font-medium">
              {el.type === 'SINGLE_ROOM' ? 'SINGLE ROOM' : el.type}
            </p>
            <p style={{fontFamily: "poppins"}} className="text-[14px] ">฿ {el.price.toLocaleString('en-EN')} night </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HouseItem;
