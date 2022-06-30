import { useState } from 'react';
import {
  backStagePage,
  nextStagePage,
  saveMoreInformation,
} from '../../../actions/CreateHouseAction';
import Checkbox from '../../../common/Checkbox';
import Textarea from '../../../common/Textarea';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function MoreInformation() {
  const { dispatch, createHouse } = useCreateHouse();
  const [checkError, setCheckError] = useState(false);

  const allError = {};

  const handleClickNext = () => {
    if (!createHouse.dailySchedule) {
      allError.dailySchedule = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.other) {
      allError.other = 'Enter your input';
      setCheckError(allError);
    }

    if (allError.dailySchedule) return;
    if (allError.other) return;

    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">More Information</div>
      <div className="mt-6 ">
        <span className="label-text">Highlights</span>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div>
          <Checkbox
            title="Pet Food"
            onChange={(e) => {
              dispatch(saveMoreInformation({ isPetFood: e.target.checked }));
            }}
            checked={createHouse.isPetFood}
          />

          <Checkbox
            title="Grooming"
            onChange={(e) => {
              dispatch(saveMoreInformation({ isGrooming: e.target.checked }));
            }}
            checked={createHouse.isGrooming}
          />

          <Checkbox
            title="Air Conditioning"
            onChange={(e) => {
              dispatch(
                saveMoreInformation({ isAirCondition: e.target.checked }),
              );
            }}
            checked={createHouse.isAirCondition}
          />
          <Checkbox
            title="Pet staff"
            onChange={(e) => {
              dispatch(saveMoreInformation({ isPetStaff: e.target.checked }));
            }}
            checked={createHouse.isPetStaff}
          />
        </div>
        <div>
          <Checkbox
            title="Pet Training"
            onChange={(e) => {
              dispatch(
                saveMoreInformation({ isPetTraining: e.target.checked }),
              );
            }}
            checked={createHouse.isPetTraining}
          />
          <Checkbox
            title="Pick up-Drop off"
            onChange={(e) => {
              dispatch(
                saveMoreInformation({ isPickupDropOff: e.target.checked }),
              );
            }}
            checked={createHouse.isPickupDropOff}
          />
          <Checkbox
            title="Litter changed daily"
            onChange={(e) => {
              dispatch(
                saveMoreInformation({ isLitterChangedDaily: e.target.checked }),
              );
            }}
            checked={createHouse.isLitterChangedDaily}
          />
          <Checkbox
            title="Air Filter"
            onChange={(e) => {
              dispatch(saveMoreInformation({ isAirFilter: e.target.checked }));
            }}
            checked={createHouse.isAirFilter}
          />
        </div>
      </div>

      <div className="mt-2">
        <Textarea
          label="Daily schedule"
          value={createHouse.dailySchedule}
          onChange={(e) => {
            dispatch(
              saveMoreInformation({
                dailySchedule: e.target.value,
                id: 'dailySchedule',
              }),
            );
          }}
          placeholder="Enter your input"
          errMsg={checkError.dailySchedule}
          error={checkError.dailySchedule}
        />
      </div>

      <div className="mt-2">
        <Textarea
          label="Other"
          value={createHouse.other}
          onChange={(e) => {
            dispatch(
              saveMoreInformation({ other: e.target.value, id: 'other' }),
            );
          }}
          placeholder="Enter your input"
          errMsg={checkError.other}
          error={checkError.other}
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

export default MoreInformation;
