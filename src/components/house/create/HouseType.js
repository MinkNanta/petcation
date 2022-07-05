import {
  backStagePage,
  nextStagePage,
  saveHouseType,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import singleRoom from '../../../assets/img/singleRoom.png';
import capsule from '../../../assets/img/capsule.png';
import cage from '../../../assets/img/cage.png';
import { useState } from 'react';

function HouseType() {
  const { dispatch, createHouse } = useCreateHouse();
  const [checkError, setCheckError] = useState(false);

  const handleClickNext = () => {
    if (createHouse.type) {
      dispatch(nextStagePage());
    } else {
      setCheckError(true);
    }
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">House type</div>

      <label className="form-control cursor-pointer bg-[#F3F4F6] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mr-4">
          <span className="label-text flex items-center gap-3">
            {/* <img src={singleRoom} /> */}
            <div className="w-[92px] h-[92px] rounded-2xl overflow-hidden ml-2">
              <img
                src="https://images.unsplash.com/photo-1535126320463-c5c1b26b3e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                className="w-full h-full object-cover"
                alt="single"
              />
            </div>
            <span className="text-base font-medium ">Single room</span>
          </span>
          {createHouse.type === 'SINGLE_ROOM' ? (
            <input
              type="radio"
              name="radio-3"
              className="radio checked:bg-orange-500"
              onChange={() => dispatch(saveHouseType('SINGLE_ROOM'))}
              checked
            />
          ) : (
            <input
              type="radio"
              name="radio-3"
              className="radio checked:bg-orange-500"
              onChange={() => dispatch(saveHouseType('SINGLE_ROOM'))}
            />
          )}
        </label>
      </label>

      <label className="form-control cursor-pointer bg-[#F3F4F6] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mr-4 ">
          <span className="label-text flex items-center gap-3">
            <div className="w-[92px] h-[92px] rounded-2xl overflow-hidden ml-2">
              <img
                src="https://i.pinimg.com/originals/3f/04/e5/3f04e53366cf25daeed9f19b1ada3d43.jpg"
                className="w-full h-full object-cover"
                alt="capsule"
              />
            </div>
            <span className="text-base font-medium ">Capsule</span>
          </span>
          {createHouse.type === 'CAPSULE' ? (
            <input
              type="radio"
              name="radio-3"
              className="radio checked:bg-orange-500"
              onChange={() => dispatch(saveHouseType('CAPSULE'))}
              checked
            />
          ) : (
            <input
              type="radio"
              name="radio-3"
              className="radio checked:bg-orange-500"
              onChange={() => dispatch(saveHouseType('CAPSULE'))}
            />
          )}
        </label>
      </label>

      <label className="form-control cursor-pointer bg-[#F3F4F6] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mr-4 ">
          <span className="label-text flex items-center gap-3">
            <div className="w-[92px] h-[92px] rounded-2xl overflow-hidden ml-2">
              <img
                src="https://i.pinimg.com/736x/50/b3/41/50b341f2d7e5e69bdfcbbba275b5abfe.jpg"
                className="w-full h-full object-cover"
                alt="Cage"
              />
            </div>

            <span className="text-base font-medium ">Cage</span>
          </span>
          {createHouse.type === 'CAGE' ? (
            <input
              type="radio"
              name="radio-3"
              className="radio checked:bg-orange-500"
              onChange={() => dispatch(saveHouseType('CAGE'))}
              checked
            />
          ) : (
            <input
              type="radio"
              name="radio-3"
              className="radio checked:bg-orange-500"
              onChange={() => dispatch(saveHouseType('CAGE'))}
            />
          )}
        </label>
      </label>

      {checkError && (
        <span className="label-text-alt text-red-400">
          You have to choose one
        </span>
      )}

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small ">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small ">Next</div>
      </div>
    </div>
  );
}

export default HouseType;
