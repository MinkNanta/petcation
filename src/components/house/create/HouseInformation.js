import { useState } from 'react';
import {
  backStagePage,
  nextStagePage,
  saveHouseInformation,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import Textarea from '../../../common/Textarea';
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
        <Textarea
          rows="2"
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
          placeholder="i.e Check-in time 10am to 5pm."
          errMsg={checkError.checkInTime}
          error={checkError.checkInTime}
        />
      </div>

      <div className="mt-2">
        <Textarea
          rows="2"
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
          placeholder="i.e Check-Out time 10am to 5pm."
          errMsg={checkError.checkOutTime}
          error={checkError.checkOutTime}
        />
      </div>

      <div className="mt-2">
        <Input
          type="text"
          // option="option"
          label="Pet food services"
          value={createHouse.petFood}
          onChange={(e) => {
            dispatch(
              saveHouseInformation({ petFood: e.target.value, id: 'petFood' }),
            );
          }}
          placeholder="Name of pet food or food grade"
          errMsg={checkError.petFood}
          error={checkError.petFood}
        />
      </div>

      <div className="mt-2">
        <Input
          type="number"
          // option="option"
          label="Price food per night"
          value={createHouse.foodPrice}
          onChange={(e) => {
            dispatch(
              saveHouseInformation({
                foodPrice: e.target.value,
                id: 'foodPrice',
              }),
            );
          }}
          placeholder="Enter price"
          errMsg={checkError.foodPrice}
          error={checkError.foodPrice}
        />
      </div>

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small ">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  ">Next</div>
      </div>
    </div>
  );
}

export default HouseInformation;
