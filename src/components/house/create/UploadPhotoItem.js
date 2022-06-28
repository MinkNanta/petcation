import { useRef, useState } from 'react';

function UploadPhotoItem({ src, title }) {
  const [housePic, setHousePic] = useState(null);
  const housePicInputEl = useRef();

  return (
    <div>
      <img
        className="h-[224px] w-[224px] rounded-3xl mt-6 "
        src={housePic ? URL.createObjectURL(housePic) : src}
        onClick={() => housePicInputEl.current.click()}
      />
      <div className="text-[18px] mt-4">{title}</div>
      <input
        type="file"
        className="hidden"
        ref={housePicInputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setHousePic(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}

export default UploadPhotoItem;
