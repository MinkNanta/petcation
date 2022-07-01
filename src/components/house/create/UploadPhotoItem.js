import { XIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import {
  createHouseAction,
  saveDeleteImage,
  saveUploadImage,
} from '../../../actions/CreateHouseAction';
import BtnIcon from '../../../common/BtnIcon';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function UploadPhotoItem({ src, srcHouse, idx }) {
  const { dispatch, createHouse } = useCreateHouse();
  const housePicInputEl = useRef();

  useEffect(() => {
    dispatch(createHouseAction());
  }, [createHouse.image.length]);

  console.log(createHouse);
  return (
    <div className="relative">
      <img
        className="h-[224px] w-[224px] rounded-3xl mt-6"
        src={srcHouse ? URL.createObjectURL(srcHouse) : src}
        onClick={() => housePicInputEl.current.click()}
      />
      {srcHouse && (
        <div
          className="absolute top-8 right-2 cursor-pointer"
          onClick={() => {
            dispatch(saveDeleteImage({ idx }));
          }}
        >
          <BtnIcon icon={<XIcon />} htmlFor="" />
        </div>
      )}

      <input
        type="file"
        className="hidden"
        ref={housePicInputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            if (!idx) {
              dispatch(saveUploadImage({ housePic: e.target.files[0] }));
              housePicInputEl.current.value = '';
            }
          }
        }}
      />
    </div>
  );
}

export default UploadPhotoItem;
