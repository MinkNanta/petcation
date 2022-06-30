import { XIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import { saveUploadImage } from '../../../actions/CreateHouseAction';
import BtnIcon from '../../../common/BtnIcon';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function UploadPhotoItem({ src, title, id }) {
  const { dispatch, createHouse } = useCreateHouse();
  const housePicInputEl = useRef();
  let savePic;
  if (id === '0') {
    savePic = createHouse.image.cover;
  }
  if (id === '1') {
    savePic = createHouse.image.picture1;
  }
  if (id === '2') {
    savePic = createHouse.image.picture2;
  }
  if (id === '3') {
    savePic = createHouse.image.picture3;
  }
  if (id === '4') {
    savePic = createHouse.image.picture4;
  }
  if (id === '5') {
    savePic = createHouse.image.picture5;
  }
  if (id === '6') {
    savePic = createHouse.image.picture6;
  }

  console.log(createHouse);
  return (
    <div className="relative">
      <img
        className="h-[224px] w-[224px] rounded-3xl mt-6"
        src={savePic ? URL.createObjectURL(savePic) : src}
        onClick={() => housePicInputEl.current.click()}
      />
      {savePic && (
        <div
          className="absolute top-8 right-2 cursor-pointer"
          onClick={() => {
            dispatch(saveUploadImage({ id, housePic: '' }));
          }}
        >
          <BtnIcon icon={<XIcon />} htmlFor="" />
        </div>
      )}
      <div className="text-[18px] mt-4">{title}</div>
      <input
        type="file"
        className="hidden"
        ref={housePicInputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            dispatch(saveUploadImage({ id, housePic: e.target.files[0] }));
          }
        }}
      />
    </div>
  );
}

export default UploadPhotoItem;
