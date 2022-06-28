import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import Checkbox from '../../../common/Checkbox';
import Textarea from '../../../common/Textarea';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function MoreInformation() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
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
          <Checkbox title="Pet Food" value="checked1" />
          <Checkbox title="Grooming" value="checked1" />
          <Checkbox title="Air Conditioning" value="checked1" />
          <Checkbox title="Pet staff" value="checked1" />
        </div>
        <div>
          <Checkbox title="Pet Training" value="checked1" />
          <Checkbox title="Pick up-Drop off" value="checked1" />
          <Checkbox title="Litter changed daily" value="checked1" />
          <Checkbox title="Air Filter" value="checked1" />
        </div>
      </div>

      <div className="mt-2">
        <Textarea
          label="Daily schedule"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>

      <div className="mt-2">
        <Textarea
          label="Other"
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

export default MoreInformation;
