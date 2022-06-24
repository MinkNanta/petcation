import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import uploadImage from '../../../assets/img/uploadImage.png';

function HouseCreateUploadPhoto() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="relative">
      <div className="text-2xl">Upload photo</div>
      <img
        className="h-[247px] w-[1048px] rounded-3xl mt-6 mb-24"
        src={uploadImage}
      />

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn  w-[91px]">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HouseCreateUploadPhoto;
