import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import dogIcon from '../../../assets/img/dogIcon.png';
import cageIcon from '../../../assets/img/cageIcon.png';

function HouseType() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">House type</div>

      <div className="form-control bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={dogIcon} />
            <span className="text-base font-medium ">Single room</span>
          </span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-orange-500"
            checked
          />
        </label>
      </div>

      <div className="form-control bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={dogIcon} />
            <span className="text-base font-medium ">Capsule</span>
          </span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-orange-500"
          />
        </label>
      </div>

      <div className="form-control bg-[#F3F4F6] h-[80px] flex justify-center rounded-3xl mt-6">
        <label className="label cursor-pointer mx-6 ">
          <span className="label-text flex items-center gap-3">
            <img src={cageIcon} />
            <span className="text-base font-medium ">Cage</span>
          </span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-orange-500"
          />
        </label>
      </div>

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn  w-[91px]">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HouseType;
