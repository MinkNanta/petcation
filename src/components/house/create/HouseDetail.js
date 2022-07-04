import { useState } from 'react';
import {
  backStagePage,
  nextStagePage,
  saveHouseDetail,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import InputWithSuffix from '../../../common/InputWithSuffix';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HouseDetail() {
  const { dispatch, createHouse } = useCreateHouse();
  const [checkError, setCheckError] = useState(false);

  const allError = {};

  const handleClickNext = () => {
    if (!createHouse.name) {
      allError.name = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.price) {
      allError.price = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.size) {
      allError.size = 'Enter your input';
      setCheckError(allError);
    }
    if (!createHouse.limit) {
      allError.limit = 'Enter your input';
      setCheckError(allError);
    }
    if (allError.name) return;
    if (allError.price) return;
    if (allError.size) return;
    if (allError.limit) return;

    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">House Detail</div>
      <div className="mt-6 ">
        <Input
          // type="text"
          // option="option"
          label="Name"
          value={createHouse.name}
          onChange={(e) => {
            dispatch(saveHouseDetail({ name: e.target.value, id: 'name' }));
          }}
          placeholder="House name ex. Urban Pets Hotel"
          errMsg={checkError.name}
          error={checkError.name}
        />
      </div>

      <div className="mt-2">
        <Input
          type="number"
          // option="option"
          label="Price Room"
          value={createHouse.price}
          onChange={(e) => {
            dispatch(saveHouseDetail({ price: e.target.value, id: 'price' }));
          }}
          placeholder="Price per night"
          errMsg={checkError.price}
          error={checkError.price}
        />
      </div>

      <div className="mt-2">
        <InputWithSuffix
          type="number"
          label="Size Room or Unit"
          value={createHouse.size}
          onChange={(e) => {
            dispatch(saveHouseDetail({ size: e.target.value, id: 'size' }));
          }}
          placeholder="Room size"
          errMsg={checkError.size}
          error={checkError.size}
          suffix="sqm"
        />
      </div>

      <div className="mt-2">
        <div className="-mb-3">
          <Input
            type="number"
            // option=""
            min="0"
            max="20"
            label="Max pets"
            value={createHouse.limit}
            onChange={(e) => {
              dispatch(saveHouseDetail({ limit: e.target.value, id: 'limit' }));
            }}
            placeholder="Acceptable amount per room"
            errMsg={checkError.limit}
            error={checkError.limit}
          />
        </div>
        {createHouse.limit < 0 || createHouse.limit > 20 ? (
          <p className="text-xs text-red-400 ">
            Max pet must be values ​​between 0 - 20
          </p>
        ) : (
          <></>
        )}
      </div>

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small ">Next</div>
      </div>
    </div>
  );
}

export default HouseDetail;
