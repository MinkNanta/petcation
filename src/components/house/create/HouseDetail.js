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
          placeholder="Enter your input"
          errMsg={checkError.name}
          error={checkError.name}
        />
      </div>

      <div className="mt-2">
        <Input
          type="number"
          // option="option"
          label="Price per night"
          value={createHouse.price}
          onChange={(e) => {
            dispatch(saveHouseDetail({ price: e.target.value, id: 'price' }));
          }}
          placeholder="Enter your input"
          errMsg={checkError.price}
          error={checkError.price}
        />
      </div>

      <div className="mt-2">
        <InputWithSuffix
          type="number"
          label="Size"
          value={createHouse.size}
          onChange={(e) => {
            dispatch(saveHouseDetail({ size: e.target.value, id: 'size' }));
          }}
          placeholder="Enter your input"
          errMsg={checkError.size}
          error={checkError.size}
          suffix="sqm"
        />
      </div>

      <div className="mt-2">
        <Input
          type="number"
          // option="option"
          label="Limit per room"
          value={createHouse.limit}
          onChange={(e) => {
            dispatch(saveHouseDetail({ limit: e.target.value, id: 'limit' }));
          }}
          placeholder="Enter your input"
          errMsg={checkError.limit}
          error={checkError.limit}
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

export default HouseDetail;
