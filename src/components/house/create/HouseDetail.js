import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import InputWithSuffix from '../../../common/InputWithSuffix';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HouseDetail() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
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
          //   value="Address"
          // type="text"
          // option="option"
          label="Name"
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
          label="Price per night"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>

      <div className="mt-2">
        <InputWithSuffix
          label="Size"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
          suffix="sqm"
        />
      </div>

      <div className="mt-2">
        <Input
          //   value="Address"
          // type="text"
          // option="option"
          label="Limit per room"
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

export default HouseDetail;
