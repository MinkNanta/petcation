import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import InputDropdown from '../../../common/InputDropdown';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HostAddress() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">Host Address</div>

      <div className="mt-6 ">
        <InputDropdown label="Province" errMsg="Error Massage" error={false}>
          <option value="option1">Star Wars</option>
          <option value="option2">Harry Potter</option>
          <option value="option3">Lord of the Rings</option>
          <option value="option4">Planet of the Apes</option>
          <option value="option5">Star Trek</option>
        </InputDropdown>
      </div>

      <div className="mt-1 ">
        <InputDropdown label="District" errMsg="Error Massage" error={false}>
          <option value="option1">Star Wars</option>
          <option value="option2">Harry Potter</option>
          <option value="option3">Lord of the Rings</option>
          <option value="option4">Planet of the Apes</option>
          <option value="option5">Star Trek</option>
        </InputDropdown>
      </div>

      <div className="mt-1 ">
        <InputDropdown label="SubDistrict" errMsg="Error Massage" error={false}>
          <option value="option1">Star Wars</option>
          <option value="option2">Harry Potter</option>
          <option value="option3">Lord of the Rings</option>
          <option value="option4">Planet of the Apes</option>
          <option value="option5">Star Trek</option>
        </InputDropdown>
      </div>

      <div className="mt-2 ">
        <Input
          //   value="Address"
          // type="text"
          // option="option"
          label="Address"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>

      <div className="mt-2">
        <Input
          // value=""
          // type="text"
          option="(Optional)"
          label="Postal/Zip Code"
          onChange={() => {}}
          placeholder=""
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

export default HostAddress;
