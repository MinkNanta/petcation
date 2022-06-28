import {
  backStagePage,
  nextStagePage,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import uploadImage from '../../../assets/img/uploadImage.png';
import UploadPhotoItem from './UploadPhotoItem';

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
      <div className="grid grid-cols-4 gap-4 mb-24">
        <UploadPhotoItem src={uploadImage} title="Cover" />
        <UploadPhotoItem src={uploadImage} title="Picture 1" />
        <UploadPhotoItem src={uploadImage} title="Picture 2" />
        <UploadPhotoItem src={uploadImage} title="Picture 3" />
        <UploadPhotoItem src={uploadImage} title="Picture 4" />
        <UploadPhotoItem src={uploadImage} title="Picture 5" />
        <UploadPhotoItem src={uploadImage} title="Picture 6" />
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

export default HouseCreateUploadPhoto;
