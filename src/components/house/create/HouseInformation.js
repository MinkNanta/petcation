import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HouseInformation() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
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
          //   value="Address"
          // type="text"
          // option="option"
          label="Check in"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>

      <div className="mt-2">
        <Input
          //   value="Address"
          // type="text"
          // option="option"
          label="Check out"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>

      <div className="mt-2">
        <Input
          //   value="Address"
          // type="text"
          // option="option"
          label="Food for pet"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>

      <div className="mt-2">
        <Input
          //   value="Address"
          // type="text"
          // option="option"
          label="Food price per night"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
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
