import {
  backStagePage,
  nextStagePage,
  saveHouseFor,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import dogIcon from '../../../assets/img/dogIcon.png';
import catIcon from '../../../assets/img/catIcon.png';
import { useState } from 'react';

function HouseFor() {
  const { dispatch, createHouse } = useCreateHouse();
  const [checkError, setCheckError] = useState(false);

  const handleClickNext = () => {
    if (createHouse.petType) {
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
      <div className="text-2xl">House for</div>

      <label className="form-control cursor-pointer bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={dogIcon} />
            <span className="text-base font-medium ">Dogs</span>
          </span>
          {createHouse.petType === 'DOG' ? (
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-orange-500"
              onChange={() => {
                dispatch(saveHouseFor('DOG'));
              }}
              checked
            />
          ) : (
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-orange-500"
              onChange={() => {
                dispatch(saveHouseFor('DOG'));
              }}
            />
          )}
        </label>
      </label>

      <label className="form-control cursor-pointer bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={catIcon} />
            <span className="text-base font-medium ">Cats</span>
          </span>
          {createHouse.petType === 'CAT' ? (
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-orange-500"
              onChange={() => {
                dispatch(saveHouseFor('CAT'));
              }}
              checked
            />
          ) : (
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-orange-500"
              onChange={() => {
                dispatch(saveHouseFor('CAT'));
              }}
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

export default HouseFor;
