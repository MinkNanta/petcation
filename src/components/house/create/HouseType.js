import {
  backStagePage,
  nextStagePage,
  saveHouseType,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import dogIcon from '../../../assets/img/dogIcon.png';
import cageIcon from '../../../assets/img/cageIcon.png';
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

      <label className="form-control cursor-pointer bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={dogIcon} />
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

      <label className="form-control cursor-pointer bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={dogIcon} />
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

      <label className="form-control cursor-pointer bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={cageIcon} />
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
        <div className="btn-small  w-[91px]">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HouseType;
