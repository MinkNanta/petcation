import { useState } from 'react';
import {
  backStagePage,
  nextStagePage,
  saveHouseInformation,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HouseInformation() {
  const { dispatch, createHouse } = useCreateHouse();
  const [checkError, setCheckError] = useState(false);

  const allError = {};

  const handleClickNext = () => {
    if (!createHouse.checkInTime) {
      allError.checkInTime = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.checkOutTime) {
      allError.checkOutTime = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.petFood) {
      allError.petFood = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.foodPrice) {
      allError.foodPrice = 'Enter your input';
      setCheckError(allError);
    }
    if (allError.checkInTime) return;
    if (allError.checkOutTime) return;
    if (allError.petFood) return;
    if (allError.foodPrice) return;
    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">House Information</div>
      <div className="mt-6 ">
        <Input
          type="text"
          // option="option"
          label="Check in"
          value={createHouse.checkInTime}
          onChange={(e) => {
            dispatch(
              saveHouseInformation({
                checkInTime: e.target.value,
                id: 'checkInTime',
              }),
            );
          }}
          placeholder="Enter your input"
          errMsg={checkError.checkInTime}
          error={checkError.checkInTime}
        />
      </div>

      <div className="mt-2">
        <Input
          type="text"
          // option="option"
          label="Check out"
          value={createHouse.checkOutTime}
          onChange={(e) => {
            dispatch(
              saveHouseInformation({
                checkOutTime: e.target.value,
                id: 'checkOutTime',
              }),
            );
          }}
          placeholder="Enter your input"
          errMsg={checkError.checkOutTime}
          error={checkError.checkOutTime}
        />
      </div>

      <div className="mt-2">
        <Input
          type="text"
          // option="option"
          label="Food for pet"
          value={createHouse.petFood}
          onChange={(e) => {
            dispatch(
              saveHouseInformation({ petFood: e.target.value, id: 'petFood' }),
            );
          }}
          placeholder="Enter your input"
          errMsg={checkError.petFood}
          error={checkError.petFood}
        />
      </div>

      <div className="mt-2">
        <Input
          type="number"
          // option="option"
          label="Food price per night"
          value={createHouse.foodPrice}
          onChange={(e) => {
            dispatch(
              saveHouseInformation({
                foodPrice: e.target.value,
                id: 'foodPrice',
              }),
            );
          }}
          placeholder="Enter your input"
          errMsg={checkError.foodPrice}
          error={checkError.foodPrice}
        />
      </div>

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small  w-[91px]">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HouseInformation;
